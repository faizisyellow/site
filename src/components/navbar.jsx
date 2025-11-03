import { useState, useEffect } from "react";
import useSmoothScroll from "../hooks/useSmoothScroll";
import {
  Menu as MenuIcon,
  CloseX,
  File,
  Github,
  Linkedin,
} from "./icons/Icons";

function Navbar() {
  const { handleSmoothClick } = useSmoothScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [githubFill, setGithubFill] = useState("none");
  const [linkedinFill, setLinkedinFill] = useState("none");
  const [fileFill, setFileFill] = useState("none");

  // lock body scroll when overlay is open (mobile only)
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  // helper to close overlay then smooth-scroll
  const go = (id) => (e) => {
    setIsOpen(false);
    handleSmoothClick(id)(e);
  };

  return (
    <>
      <nav className="bg-brand-bg px-8 py-5 sticky top-0 z-50 hidden sm:block">
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
              href="/resume/resume.pdf"
              className="text-brand hover:text-secondary hover:underline transition-colors font-medium"
            >
              RESUME
            </a>
          </div>
        </div>
      </nav>

      {/* ===== MOBILE TOP BAR  ===== */}
      <div className="sm:hidden bg-brand-bg px-4 py-4 flex justify-between items-center sticky top-0 z-50">
        <a
          href="#banner"
          className="font-bold text-lg"
          onClick={handleSmoothClick("banner", 200)}
        >
          FM
        </a>
        <div className="flex items-center gap-4">
          <a
            href="/files/cv.pdf"
            download="Faissal_Maulana_CV.pdf"
            aria-label="Download CV"
            onMouseEnter={() => setFileFill("#4635B1")}
            onMouseLeave={() => setFileFill("none")}
          >
            <File fill={fileFill} />
          </a>
          <a
            href="https://github.com/faizisyellow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            onMouseEnter={() => setGithubFill("#4635B1")}
            onMouseLeave={() => setGithubFill("none")}
          >
            <Github fill={githubFill} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhamat-faissal-m-46a3aa292/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            onMouseEnter={() => setLinkedinFill("#4635B1")}
            onMouseLeave={() => setLinkedinFill("none")}
          >
            <Linkedin fill={linkedinFill} />
          </a>
          <button
            className="hover:cursor-pointer"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <CloseX /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* ===== MOBILE OVERLAY MENU ===== */}
      {isOpen && (
        <div className="sm:hidden fixed inset-0 bg-brand-bg/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 text-3xl font-bold z-40">
          <a href="#about" onClick={go("about")} className="mobile-link">
            ABOUT
          </a>
          <a href="#skills" onClick={go("skills")} className="mobile-link">
            SKILLS
          </a>
          <a href="#projects" onClick={go("projects")} className="mobile-link">
            PROJECTS
          </a>
          <a
            href="#experience"
            onClick={go("experience")}
            className="mobile-link"
          >
            EXPERIENCE
          </a>
          <a
            href="/files/cv.pdf"
            download="Faissal_Maulana_CV.pdf"
            onClick={() => setIsOpen(false)}
            className="mobile-link"
          >
            RESUME
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;
