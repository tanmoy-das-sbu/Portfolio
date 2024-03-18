'use client'

function Home() {

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col space-y-4">
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Today's Schedule</h2>

          {todaySchedule.map((event, index) => (
            <div key={index} className="border-b border-gray-300 py-2">
              <h3 className="text-base font-medium">{event.heading}</h3>
              <p className="text-sm">{event.startTime} - {event.endTime}</p>
              <p className="text-sm">{event.shortDescription}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Tomorrow's Schedule</h2>
          {tomorrowSchedule.map((event, index) => (
            <div key={index} className="border-b border-gray-300 py-2">
              <h3 className="text-base font-medium">{event.heading}</h3>
              <p className="text-sm">{event.startTime} - {event.endTime}</p>
              <p className="text-sm">{event.shortDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
