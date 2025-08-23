import { useState } from "react";
import useSmoothScroll from "../hooks/useSmoothScroll";
import { File, Github, Linkedin } from "./icons/Icons";

function Sidebar() {
  const { handleSmoothClick } = useSmoothScroll(200);
  const [githubFill, setGithubFill] = useState("none");
  const [linkedinFill, setLinkedinFill] = useState("none");
  const [fileFill, setFileFill] = useState("none");

  return (
    <div className="w-16 flex flex-col items-center py-4 sticky top-0 h-screen mr-2 sm:mr-0">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-8 h-8 text-brand rounded flex items-center justify-center text-md font-bold">
          <a
            href="#banner"
            className="text-[18px] sm:text-2xl"
            onClick={handleSmoothClick("banner")}
          >
            FM
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-col gap-6">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <a
            href="https://github.com/faizisyellow"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setGithubFill("#4635B1")}
            onMouseLeave={() => setGithubFill("none")}
          >
            <Github fill={githubFill} />
          </a>
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <a
            href="/files/cv.pdf"
            download="Faissal_Maulana_CV.pdf"
            onMouseEnter={() => setFileFill("#4635B1")}
            onMouseLeave={() => setFileFill("none")}
          >
            <File fill={fileFill} />
          </a>
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <a
            href="https://www.linkedin.com/in/muhamat-faissal-m-46a3aa292/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setLinkedinFill("#4635B1")}
            onMouseLeave={() => setLinkedinFill("none")}
          >
            <Linkedin fill={linkedinFill} />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
