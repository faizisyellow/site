import { useState } from "react";
import { ArrowDown, File, Github, Linkedin } from "../components/icons/Icons";

function Banner() {
  const [githubFill, setGithubFill] = useState("none");
  const [linkedinFill, setLinkedinFill] = useState("none");
  const [fileFill, setFileFill] = useState("none");

  return (
    <>
      <div className="mt-36">
        <h1 className="text-brand font-extrabold text-4xl md:text-6xl lg:text-7xl flex items-center whitespace-nowrap">
          <span>Faissal Maulana</span>
          <span className="w-[0.5ch] h-[0.8em] bg-secondary animate-blink ml-2"></span>
        </h1>

        <div className="flex flex-col mt-7">
          <p className="text-brand text-sm sm:text-base md:text-lg lg:text-xl">
            I'm a software developer specializing in backend developer.
          </p>
          <p className="text-brand text-sm sm:text-base md:text-lg lg:text-xl">
            I like building tools to increase productivity.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="https://github.com/faizisyellow"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setGithubFill("#4635B1")}
              onMouseLeave={() => setGithubFill("none")}
            >
              <Github fill={githubFill} />
            </a>
            <a
              href="/files/cv.pdf"
              download="Faissal_Maulana_CV.pdf"
              onMouseEnter={() => setFileFill("#4635B1")}
              onMouseLeave={() => setFileFill("none")}
            >
              <File fill={fileFill} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhamat-faissal-m-46a3aa292/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setLinkedinFill("#4635B1")}
              onMouseLeave={() => setLinkedinFill("none")}
            >
              <Linkedin fill={linkedinFill} />
            </a>
          </div>
        </div>
      </div>

      <div className="ml-5 mt-24 animate-bounce">
        <ArrowDown />
      </div>
    </>
  );
}

export default Banner;
