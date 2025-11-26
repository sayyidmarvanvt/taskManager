import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Layout/Navbar";
import PrivateRoute from "./components/Layout/PrivateRoute";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import TaskList from "./components/Tasks/TaskList";
import ProductList from "./components/Products/ProductList";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/tasks"
              element={
                
                  <TaskList />
               
              }
            />
            <Route
              path="/products"
              element={
                <PrivateRoute>
                  <ProductList />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Navigate to="/tasks" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;