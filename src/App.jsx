// App.jsx
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import About from "./section/About";
import Banner from "./section/Banner";
import Experience from "./section/Experience";
import Projects from "./section/Projects";
import Skills from "./section/Skills";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <Navbar />

        {/* Main Content */}
        <main >
          <section id="banner" className="h-screen px-4 sm:px-8 md:px-16 lg:px-24">
            <Banner />
          </section>

          <section className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24" id="about">
            <About />
          </section>

          <section className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24" id="skills">
            <Skills />
          </section>

          <section className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24" id="projects">
            <Projects />
          </section>

          <section className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24" id="experience">
            <Experience />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;