import Card from "../components/card";
import { TagColors, TagSizes } from "../components/tag";
import TitleSection from "../components/titleSection";

const projectsData = [
  {
    title: "Falcon",
    description:
      "Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface.",
    image: "https://cdn-p.smehost.net/sites/005297e5d91d4996984e966fac4389ea/wp-content/uploads/2025/05/Lizzy-McAlpine.png",
    links: { github: "https://github.com/", external: "https://vercel.com/" },
    stacks: [
      {
        text: "Go",
        color: TagColors.BLUE,
        size: TagSizes.SM,
      },
      {
        text: "Go",
        color: TagColors.BLUE,
        size: TagSizes.SM,
      },
      {
        text: "Go",
        color: TagColors.BLUE,
        size: TagSizes.SM,
      },
      {
        text: "Go",
        color: TagColors.BLUE,
        size: TagSizes.SM,
      },
      {
        text: "Go",
        color: TagColors.BLUE,
        size: TagSizes.SM,
      },
    ],
  },
  {
    title: "Soho",
    description:
      "Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface.",
    image: "https://cdn-p.smehost.net/sites/005297e5d91d4996984e966fac4389ea/wp-content/uploads/2025/05/Lizzy-McAlpine.png",
    links: { github: "https://github.com/", external: "https://vercel.com/" },
    stacks: [
      {
        text: "Go",
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
