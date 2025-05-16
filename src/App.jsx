import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Course from './pages/Course';
import Articles from './pages/Articles';
import NewCourse from './pages/NewCourse';
import Notification from './pages/Notification';
import Navbar from './components/Navbar';
import "./index.css"
import Mentorship from './pages/Mentorship';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/new-course" element={<NewCourse />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/notifications" element={<Notification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;