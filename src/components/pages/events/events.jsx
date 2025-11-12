import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebase.config";
import NavBar from "../../shared/NavBar/NavBar";
import Footer from "../../shared/NavBar/Footer";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [academicYears, setAcademicYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const eventsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Extract academic years (June–May)
      const years = new Set();
      eventsList.forEach((event) => {
        const date = new Date(event.eventDate);
        const month = date.getMonth();
        const year = date.getFullYear();
        const academicYear =
          month >= 5 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
        years.add(academicYear);
      });

      const sortedYears = Array.from(years).sort().reverse();
      setAcademicYears(sortedYears);

      // Default to most recent academic year
      const mostRecentYear = sortedYears[0] || null;
      setSelectedYear(mostRecentYear);

      // Filter events by the most recent academic year initially
      if (mostRecentYear) {
        filterEventsByYear(mostRecentYear, eventsList);
      }

      setEvents(eventsList);
    };

    fetchEvents();
  }, []);

  // 🧩 Filter events by academic year
  const filterEventsByYear = (academicYear, eventList = events) => {
    if (!academicYear) {
      setFilteredEvents([]);
      return;
    }

    const [startYear] = academicYear.split("-");
    const startDate = new Date(`${startYear}-06-01`);
    const endDate = new Date(`${parseInt(startYear) + 1}-05-31`);

    const filtered = eventList.filter((event) => {
      const eventDate = new Date(event.eventDate);
      return eventDate >= startDate && eventDate <= endDate;
    });

    const sortedFiltered = filtered.sort(
      (a, b) => new Date(b.eventDate) - new Date(a.eventDate)
    );

    setFilteredEvents(sortedFiltered);
    setSelectedYear(academicYear);
  };

  return (
    <div className="bg-black text-[#89A3B6] min-h-screen flex flex-col">
      <NavBar />

      <div className="flex-grow px-8 py-16">
        <h2 className="text-5xl font-bold text-center mb-10">All Events</h2>

        {/* Year Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {academicYears.map((year) => (
            <button
              key={year}
              onClick={() => filterEventsByYear(year)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedYear === year
                  ? "bg-gradient-to-br from-[#496980] to-[#5C7B92] text-white"
                  : "bg-[rgba(36,62,81,0.5)] text-[#89A3B6] hover:bg-[rgba(47,77,99,0.6)]"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="card bg-[#243E51]/60 shadow-xl text-[#89A3B6] hover:scale-105 transition-transform duration-300"
              >
                <div className="card-body">
                  <h3 className="card-title text-2xl font-bold mb-4">
                    {event.eventName}
                  </h3>
                  <p className="mb-4">{event.eventDescription}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-400">{event.eventDate}</p>
                    <a
                      href={event.eventDriveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-gradient-to-br from-[#496980] to-[#5C7B92] text-white hover:bg-gradient-to-bl border-none"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 mt-10">
            No events found for {selectedYear || "this year"}.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Events;