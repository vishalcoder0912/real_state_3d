import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import FloatingCTA from "./components/FloatingCTA.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import MissionVision from "./pages/MissionVision.jsx";
import DirectorMessage from "./pages/DirectorMessage.jsx";
import Projects from "./pages/Projects.jsx";
import NewsEvents from "./pages/NewsEvents.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/director-message" element={<DirectorMessage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;
