import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loading from "../../Loading/Loading";
import logo from "../../../assets/video/logo.png";

const NavBar = () => {
  const { logOut, user, loading } = useContext(AuthContext);
  const [imgError, setImgError] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Make logout async and navigate to home after success
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // First letter of displayName or "?"
  const avatarChar = user?.displayName
    ? user.displayName[0].toUpperCase()
    : "?";

  const navItems = [
    { id: "home", label: "Home" },
    { id: "events", label: "Events" },
    { id: "about", label: "About Us" },
    { id: "gallery", label: "Gallery" },
  ];

  const handleNavClick = (id) => {
    setMobileOpen(false);

    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    navigate("/");

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
      return false;
    };

    setTimeout(() => { if (!tryScroll()) setTimeout(() => { if (!tryScroll()) setTimeout(tryScroll, 220); }, 80); }, 20);
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="mb-16">
      {/* Show loading overlay if loading */}
      {loading && <Loading />}

      <div className="fixed top-0 left-0 w-full bg-[#243E51] bg-opacity-90 z-50 font-semibold text-[#89A3B6]">
        <div className="navbar max-w-screen-xl mx-auto flex items-center h-16 px-4 md:px-6">
          <div className="navbar-start flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <img className="h-8 object-contain" src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex navbar-center flex-1 justify-end items-center">
            <div className="flex items-center gap-6 mr-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-sm text-[#89A3B6] hover:text-white focus:outline-none"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Login / Avatar / Admin */}
            <div className="flex items-center gap-2">
              {user ? (
                <>
                  {user.email === import.meta.env.VITE_ADMIN_EMAIL && (
                    <Link
                      to="/admin/add-event"
                      className="text-white bg-gradient-to-br from-[#496980] to-[#5C7B92] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-[#38576D] font-medium rounded-lg text-sm px-4 py-2 text-center mr-2"
                    >
                      Add Event
                    </Link>
                  )}
                  <div className="dropdown dropdown-end">
                    <label tabIndex={-1} className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold overflow-hidden">
                        {user.photoURL && !imgError ? (
                          <img
                            src={user.photoURL}
                            alt="profile"
                            className="w-full h-full object-cover"
                            onError={() => setImgError(true)}
                          />
                        ) : (
                          <span className="flex items-center justify-center w-10 h-10" style={{ lineHeight: "2.5rem" }}>
                            {avatarChar}
                          </span>
                        )}
                      </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#29465B] rounded-box w-60">
                      <li>
                        <div className="justify-between mb-5 items-center">
                          <p className="text-2xl font-bold text-[#89A3B6]">{user.displayName}</p>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="w-full text-left text-white bg-gradient-to-br from-[#496980] to-[#5C7B92] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-[#38576D] font-medium rounded-lg text-sm px-3 py-2"
                        >
                          Log Out
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  to="/login"
                  className="text-white bg-gradient-to-br from-[#496980] to-[#5C7B92] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-[#38576D] font-medium rounded-lg text-sm px-4 py-2 text-center mr-2"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto flex items-center">
            <button
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
              className="p-2 rounded-md focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div className="md:hidden border-t bg-white/5 backdrop-blur-sm">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left w-full px-2 py-2 text-sm font-medium rounded-md focus:outline-none text-[#89A3B6] hover:bg-[rgba(36,62,81,0.6)]"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-2">
                {user ? (
                  <>
                    {user.email === import.meta.env.VITE_ADMIN_EMAIL && (
                      <Link
                        to="/admin/add-event"
                        className="block w-full text-center px-4 py-2 rounded-md mb-2 text-white bg-gradient-to-br from-[#496980] to-[#5C7B92]"
                        onClick={() => setMobileOpen(false)}
                      >
                        Add Event
                      </Link>
                    )}
                    <button
                      onClick={async () => {
                        await handleLogOut();
                        setMobileOpen(false);
                      }}
                      className="block w-full text-center px-4 py-2 rounded-md text-white bg-gradient-to-br from-[#496980] to-[#5C7B92]"
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="block w-full text-center px-4 py-2 rounded-md text-white bg-gradient-to-br from-[#496980] to-[#5C7B92]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
