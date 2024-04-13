import cron from 'node-cron';
import Schedule from '../models/schedule.model.js';

const scheduleUpdater = cron.schedule('* * * * *', async () => {
  try {
    // T00:00:00.000+00:00
    const currentDateTime = new Date();
    
    const justTime = `${currentDateTime.getHours()}:${currentDateTime.getMinutes()}`;
    const justDate = `${currentDateTime.getFullYear()}-${currentDateTime.getMonth()}-${currentDateTime.getDate()}`+'T00:00:00.000+00:00';

    // Filter by date and time in a single query for efficiency
    const schedulesToUpdate = await Schedule.find({
      $and: [
        { scheduledDate: { $gte: justDate } },
        { scheduledTime: { $lte: justTime } },
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