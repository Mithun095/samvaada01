import { useEffect, useState, useContext } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/firebase.config";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import AboutFea from "./AboutFea/AboutFea";
import Banner from "./Banner/Banner";
import MeetTheTeam from "./MeetTheTeam";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [academicYears, setAcademicYears] = useState([]);
  const { user } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // ✅ Detect screen size (to limit events count)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const eventsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventsList);

      // Extract unique academic years
      const years = new Set();
      eventsList.forEach((event) => {
        const date = new Date(event.eventDate);
        const month = date.getMonth();
        const year = date.getFullYear();
        // June (5) to May (4) as academic year
        const academicYear =
          month >= 5 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
        years.add(academicYear);
      });
      const sortedYears = Array.from(years).sort().reverse();
      setAcademicYears(sortedYears);

      // Set default year to most recent
      const mostRecentYear = sortedYears[0] || null;
      setSelectedYear(mostRecentYear);
      if (mostRecentYear) filterEventsByYear(mostRecentYear, eventsList);
    };
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterEventsByYear = (academicYear, eventList = events) => {
    if (!academicYear) {
      setFilteredEvents([]);
      setSelectedYear(null);
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

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "events", id));
      setEvents(events.filter((event) => event.id !== id));
      setFilteredEvents(filteredEvents.filter((event) => event.id !== id));
      toast.success("Event deleted successfully!");
    } catch (error) {
      toast.error("Error deleting event");
    }
  };

  const handleViewClick = (e, link) => {
    if (!user) {
      e.preventDefault();
      toast.error("Please login to view event details");
      return false;
    }
    return true;
  };

  // ✅ Limit events count (6 for desktop, 3 for mobile)
  const displayedEvents = filteredEvents.slice(0, isMobile ? 3 : 6);

  return (
    <div className="bg-black text-[#89A3B6] min-h-screen">
      {/* HOME / HERO */}
      <section id="home">
        <Banner />
      </section>

      {/* EVENTS */}
      <section id="events" className="mt-10 px-8">
        <h2 className="text-6xl font-bold text-center mb-6">Events</h2>

        {/* Year filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedEvents.map((event) => (
            <div
              key={event.id}
              className="card bg-[#243E51]/60 shadow-xl text-[#89A3B6] hover:scale-105 transition-transform duration-300"
            >
              <div className="card-body">
                <div className="flex justify-between items-start">
                  <h3 className="card-title text-2xl font-bold mb-4">
                    {event.eventName}
                  </h3>
                  {user?.email === import.meta.env.VITE_ADMIN_EMAIL && (
                    <div className="relative">
                      <button
                        onClick={() =>
                          setShowMenu(showMenu === event.id ? null : event.id)
                        }
                        className="btn btn-ghost btn-sm btn-circle"
                      >
                        <BiDotsVerticalRounded className="text-xl" />
                      </button>
                      {showMenu === event.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-[#1A202C] rounded-md shadow-lg z-50">
                          <div className="py-1">
                            <Link
                              to={`/admin/update-event/${event.id}`}
                              className="block px-4 py-2 text-sm hover:bg-[#243E51]"
                            >
                              Update Event
                            </Link>
                            <button
                              onClick={() => handleDelete(event.id)}
                              className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-[#243E51]"
                            >
                              Delete Event
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <p className="mb-4">{event.eventDescription}</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-400">{event.eventDate}</p>
                  {user ? (
                    <a
                      href={event.eventDriveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-gradient-to-br from-[#496980] to-[#5C7B92] text-white hover:bg-gradient-to-bl border-none"
                    >
                      View
                    </a>
                  ) : (
                    <Link
                      to="/login"
                      className="btn btn-sm bg-gradient-to-br from-[#496980] to-[#5C7B92] text-white hover:bg-gradient-to-bl border-none"
                      onClick={() =>
                        toast.error("Please login to view event details")
                      }
                    >
                      View
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        {filteredEvents.length > (isMobile ? 3 : 6) && (
          <div className="flex justify-center mt-10">
            <Link
              to="/events"
              className="btn bg-gradient-to-br from-[#496980] to-[#5C7B92] text-white border-none hover:bg-gradient-to-bl px-6 py-3 rounded-lg text-lg"
            >
              View All Events
            </Link>
          </div>
        )}
      </section>

      {/* ABOUT */}
      <section id="about" className="mt-10">
        <div className="px-8">
          <AboutFea />
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section id="gallery" className="mt-10 px-8">
        <MeetTheTeam />
      </section>

      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
