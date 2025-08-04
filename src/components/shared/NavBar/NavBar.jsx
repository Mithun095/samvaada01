import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loading from "../../Loading/Loading";

const NavBar = () => {
  const { logOut, user, loading } = useContext(AuthContext);
  const [imgError, setImgError] = useState(false);

  if (loading) {
    return <> <Loading /> </>;
  }

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.error(error));
  };

  // Get first letter of displayName or "?"
  const avatarChar = user?.displayName
    ? user.displayName[0].toUpperCase()
    : "?";

  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-[#243E51] bg-opacity-90 z-50 font-semibold text-[#89A3B6]">
        <div className="navbar max-w-screen-xl mx-auto flex items-center h-16">
          <div className="navbar-start">
            <Link className="flex items-center gap-2" to="/">
              <img className="h-8 object-contain" src="https://res.cloudinary.com/duq64offn/image/upload/v1754321029/logo_veymzm.png" alt="Logo" />
            </Link>
          </div>
          <div className="navbar-end flex items-center gap-2">
            {user ? (
              <>
                {user.email === import.meta.env.VITE_ADMIN_EMAIL && (
                  <Link
                    to="/admin/add-event"
                    className="text-white bg-gradient-to-br from-[#496980] to-[#5C7B92] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-[#38576D] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
                    style={{ marginBottom: 0 }}
                  >
                    Add Event
                  </Link>
                )}
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={-1}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold overflow-hidden">
                      {user.photoURL && !imgError ? (
                        <img
                          src={user.photoURL}
                          alt="profile"
                          className="w-full h-full object-cover"
                          onError={() => setImgError(true)}
                        />
                      ) : (
                        <span
                          className="flex items-center justify-center w-10 h-10"
                          style={{ lineHeight: "2.5rem" }}
                        >
                          {avatarChar}
                        </span>
                      )}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#29465B] rounded-box w-60"
                  >
                    <li>
                      <a className="justify-between mb-5 items-center">
                        <p className="text-2xl font-bold text-[#89A3B6]">
                          {user.displayName}
                        </p>
                        {/* <span className="badge">New</span> */}
                      </a>
                    </li>
                    <Link
                      onClick={handleLogOut}
                      className="text-white bg-gradient-to-br from-[#496980] to-[#5C7B92] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-[#38576D] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
                      style={{ marginBottom: 0 }}
                    >
                      Log Out
                    </Link>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white bg-gradient-to-br from-[#496980] to-[#5C7B92] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-[#38576D] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
                  style={{ marginBottom: 0 }}
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;