import useSmoothScroll from "../hooks/useSmoothScroll";

function Navbar() {
  const { handleSmoothClick } = useSmoothScroll();

  return (
    <nav className="bg-brand-bg px-8 py-5 sticky top-0 z-50">
      <div className="flex justify-end items-center">
        <div className="flex gap-8">
          <a
            href="#about"
            onClick={handleSmoothClick("about")}
            className="text-brand hover:text-secondary hover:underline transition-colors font-medium"
          >
            ABOUT
          </a>
          <a
            href="#skills"
            onClick={handleSmoothClick("skills")}
            className="text-brand hover:text-secondary hover:underline transition-colors font-medium"
          >
            SKILLS
          </a>
          <a
            href="#projects"
            onClick={handleSmoothClick("projects")}
            className="text-brand hover:text-secondary hover:underline transition-colors font-medium"
          >
            PROJECTS
          </a>
          <a
            href="#experience"
            onClick={handleSmoothClick("experience")}
            className="text-brand hover:text-secondary hover:underline transition-colors font-medium"
          >
            EXPERIENCE
          </a>
          <a
            href="#resume"
            className="text-brand hover:text-secondary hover:underline transition-colors font-medium"
          >
            RESUME
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
