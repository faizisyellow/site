import Card from "../components/card";
import { TagColors, TagSizes } from "../components/tag";
import TitleSection from "../components/titleSection";

const projectsData = [
  {
    title: "Falcon",
    description:
      "Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface.",
    image: "/images/falcon.png",
    links: { github: "https://github.com/faizisyellow/falcon",  },
    stacks: [
      {
        text: "Go",
        color: TagColors.BLUE,
        size: TagSizes.SM,
      },
      {
        text: "Cobra",
        color: TagColors.BLUE,
        size: TagSizes.SM,
      },
      {
        text: "Bubbletea",
        color: TagColors.BLUE,
        size: TagSizes.SM,
      },
    ],
  },
  {
    title: "Soho",
    description:
      "Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface.",
    image: "/images/soho.png",
    links: { github: "https://github.com/faizisyellow/soho"},
    stacks: [
      {
        text: "Go",
        color: TagColors.BLUE,
        size: TagSizes.SM,
      },
      {
        text: "Cobra",
        color: TagColors.BLUE,
        size: TagSizes.SM,
      },
    ],
  },
];

function Projects() {
  return (
    <>
      <TitleSection title="Projects" />

      {projectsData.map((element,i) => (
        <div className="mt-4">
          <Card
            title={element.title}
            description={element.description}
            image={element.image}
            links={element.links}
            tags={element.stacks}
            key={i}
          />
        </div>
      ))}
    </>
  );
}

export default Projects;
