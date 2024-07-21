import "./App.css";
import Course from "./components/Course";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import AuthProvider, { useAuth } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={<ProtectedRoute component={Course} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
        <Footer />
      </Router>
    </AuthProvider>
  );
}

function ProtectedRoute({ component: Component }) {
  const [authUser] = useAuth();

  return authUser ? <Component /> : <Navigate to="/signup" />;
}

export default App;
