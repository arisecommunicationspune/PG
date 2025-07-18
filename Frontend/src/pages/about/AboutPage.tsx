import { useState } from "react";
import AboutSidebar from "../about/AboutSidebar";
import AboutContent from "../about/AboutContent";
import Navbar from "../../components/navbar/navbar";
import FooterTop from "../../components/footer-top";
import Footer from "../../components/footer";

interface Section {
  id: string;
  title: string;
}

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState<string>("about");

  const sections: Section[] = [
    { id: "about", title: "About Us" },
    { id: "owners", title: "Our Owners" },
    { id: "team", title: "Our Team" },
    { id: "faq", title: "FAQ" },
  ];

  return (
    <>
    <Navbar transparent={false}/>
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <AboutSidebar
            sections={sections}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
        <div className="col-md-8">
          <AboutContent activeSection={activeSection} />
        </div>
      </div>
    </div>
    <FooterTop bg="theme-bg"/>
    <Footer />
    </>
  );
}
