import cron from 'node-cron';
import Schedule from '../models/schedule.model.js';

const scheduleUpdater = cron.schedule('* * * * *', async () => {
  try {
    const currentDateTime = new Date();

    // Filter by date and time in a single query for efficiency
    const schedulesToUpdate = await Schedule.find({
      $and: [
        { scheduledDate: { $lte: currentDateTime } },
        { scheduledTime: { $lte: currentDateTime } },
      ],
    });

    if (schedulesToUpdate.length === 0) {
      console.log('No schedules to update.');
      return; // Exit if no updates needed
    }

    for (const schedule of schedulesToUpdate) {
      schedule.visibility = true;
      await schedule.save();
      console.log(`Visibility updated for schedule ${schedule._id}`);
    }
  } catch (error) {
    console.error('Error updating schedule visibility:', error);
  }
});

export default scheduleUpdater;
