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
      {/* Sidebar - only show on md+ */}
      <div className="hidden sm:block">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <section
            id="banner"
            className="sm:h-screen px-5 sm:px-12 md:px-16 lg:px-24"
          >
            <Banner />
          </section>

          <section
            id="about"
            className="sm:min-h-screen my-36 sm:my-0 px-5 sm:px-8 md:px-16 lg:px-24"
          >
            <About />
          </section>

          <section
            id="skills"
            className="min-h-screen px-5 sm:px-8 md:px-16 lg:px-24"
          >
            <Skills />
          </section>

          <section
            id="projects"
            className="min-h-screen px-5 sm:px-8 md:px-16 lg:px-24"
          >
            <Projects />
          </section>

          <section
            id="experience"
            className="sm:min-h-screen mt-32 sm:mt-0 px-5 sm:px-8 md:px-16 lg:px-24"
          >
            <Experience />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
