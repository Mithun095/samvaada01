import { useEffect, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import { db } from "../../Firebase/firebase.config";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SectionHeading from "../../shared/SectionHeading";
import EventCard from "../../shared/EventCard";

const Events = () => {
  const { user } = useContext(AuthContext);
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

      // Filter events for the default year
      if (mostRecentYear) {
        filterEventsByYear(mostRecentYear, eventsList);
      }

      setEvents(eventsList);
    };

    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className="relative bg-ground text-ink min-h-screen">
      {/* ambient glow */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-[40rem] bg-lens-glow opacity-50" />

      <div className="relative max-w-screen-xl mx-auto px-6 md:px-8 py-20">
        <SectionHeading kicker="The Full Archive" title="All Events" />

        {/* Year Filter */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-10">
          {academicYears.map((year) => (
            <button
              key={year}
              onClick={() => filterEventsByYear(year)}
              className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-all duration-300 ${
                selectedYear === year
                  ? "border-brand-glow/50 bg-brand-700/40 text-ink"
                  : "border-white/10 text-ink-dim hover:border-brand-glow/30 hover:text-ink"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <EventCard event={event} index={i} user={user} />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-ink-faint py-16">
            No events found for {selectedYear || "this year"}.
          </p>
        )}
      </div>
    </div>
  );
};

export default Events;
