import cron from 'node-cron';
import Schedule from '../models/schedule.model.js';

const scheduleUpdater = cron.schedule('* * * * *', async () => {
  try {
    const currentDateTime = new Date();
    
    // Convert current date to ISO string for comparison
    const justDate = currentDateTime.toISOString().split('T')[0];
    const justTime = `${currentDateTime.getHours()}:${currentDateTime.getMinutes()}`;

    // Find schedules with visibility true and scheduleVisibility true
    const schedulesToUpdate = await Schedule.find({
      visibility: true,
      scheduleVisibility: true,
      scheduleDate: justDate,
      scheduleTime: { $lte: justTime } // Only update if scheduleTime is less than or equal to current time
    });

    if (schedulesToUpdate.length === 0) {
      console.log('No schedules to update.');
      return;
    }

    for (const schedule of schedulesToUpdate) {
      schedule.scheduleVisibility = false;
      await schedule.save();
      console.log(`Visibility updated for schedule ${schedule._id}`);
    }
  } catch (error) {
    console.error('Error updating schedule visibility:', error);
  }
});

export default scheduleUpdater;