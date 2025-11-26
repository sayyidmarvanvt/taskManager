import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";


const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">
            TaskManager Pro
          </Link>

          {user && (
            <div className="flex items-center gap-6">
              <Link to="/tasks" className="hover:text-indigo-200 transition">
                Tasks
              </Link>
              <Link to="/products" className="hover:text-indigo-200 transition">
                Products
              </Link>
              <span className="text-indigo-200">Welcome, {user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-indigo-700 hover:bg-indigo-800 px-4 py-2 rounded-lg transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
