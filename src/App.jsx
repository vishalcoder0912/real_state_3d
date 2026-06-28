import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import FloatingCTA from "./components/FloatingCTA.jsx";
import MobileBottomCTA from "./components/MobileBottomCTA.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import MissionVision from "./pages/MissionVision.jsx";
import DirectorMessage from "./pages/DirectorMessage.jsx";
import Projects from "./pages/Projects.jsx";
import ResidentialPlots from "./pages/ResidentialPlots.jsx";
import IndustrialPlots from "./pages/IndustrialPlots.jsx";
import MixedUse from "./pages/MixedUse.jsx";
import PlotForBuy from "./pages/PlotForBuy.jsx";
import NewsEvents from "./pages/NewsEvents.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import Contact from "./pages/Contact.jsx";
import BookSiteVisit from "./pages/BookSiteVisit.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import ThankYou from "./pages/ThankYou.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-white pb-20 text-ink md:pb-0">
      <Navbar />
      <main className="pt-20 lg:pt-[120px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/director-message" element={<DirectorMessage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/residential-plots" element={<ResidentialPlots />} />
          <Route path="/projects/industrial-plots" element={<IndustrialPlots />} />
          <Route path="/projects/mixed-use" element={<MixedUse />} />
          <Route path="/projects/plot-for-buy" element={<PlotForBuy />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/book-site-visit" element={<BookSiteVisit />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      <Footer />
      <FloatingCTA />
      <MobileBottomCTA />
    </div>
  );
};

export default App;
