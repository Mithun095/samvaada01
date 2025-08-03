import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { IoArrowBack } from "react-icons/io5";

const Login = () => {
  const { googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const notifyGoogle = (e) => toast.success(e);
  const notifyGoogleError = (e) => toast.error(e);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        notifyGoogle(res.user.displayName);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => notifyGoogleError(error.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="relative max-w-md w-full bg-[#1A202C] p-8 rounded-lg shadow-2xl border border-[#243E51] mt-20 mb-10">
        {/* Header with Back Arrow and Title */}
        <div className="flex items-center justify-center mb-8 relative">
          <button
            onClick={() => navigate("/")}
            className="absolute left-0 text-[#89A3B6] hover:text-white text-2xl flex items-center"
            aria-label="Go Back"
            style={{ top: 0 }}
          >
            <IoArrowBack />
          </button>
          <h5 className="text-2xl font-bold text-[#89A3B6] w-full text-center">
            Sign in to Samvaada
          </h5>
        </div>
        <div className="mb-6 space-y-4">
          <div className="bg-[#243E51] p-4 rounded">
            <p className="text-[#89A3B6] font-semibold">Are you a student?</p>
            <p className="text-[#89A3B6] text-sm">
              Login with your college account ending with{" "}
              <span className="font-mono">@nmamit.in</span>
            </p>
          </div>
          <div className="bg-[#243E51] p-4 rounded">
            <p className="text-[#89A3B6] font-semibold">Are you a college Faculty?</p>
            <p className="text-[#89A3B6] text-sm">
              Login with your college account ending with{" "}
              <span className="font-mono">@nitte.edu.in</span>
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="btn w-full bg-white hover:bg-gray-50 text-gray-800 flex items-center justify-center gap-2"
        >
          <FcGoogle className="text-2xl" />
          <span>Sign in with Google</span>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
