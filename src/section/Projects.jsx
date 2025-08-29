import Card from "../components/card";
import { TagColors, TagSizes } from "../components/tag";
import TitleSection from "../components/titleSection";

const projectsData = [
  {
    title: "Falcon",
    description:
      "Falcon is a CLI tool for generating Go REST API blueprints. It lets you choose the router library and database for your project. The blueprint already includes Authentication, Swagger documentation, Zap logger, and follows the Handler–Service–Repository pattern.",
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
    title: "SoHo",
    description:
      "SoHo is a CLI tool that assists in REST API development by generating CRUD files. It is designed to be compatible with projects that generate by the FALCON CLI.",
    image: "/images/soho.png",
    links: { github: "https://github.com/faizisyellow/soho"},
    stacks: [
      {
        text: "Go",
        color: TagColors.PURPLE,
        size: TagSizes.SM,
      },
      {
        text: "Cobra",
        color: TagColors.PURPLE,
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
        <div className="mt-4"  key={i}>
          <Card
            title={element.title}
            description={element.description}
            image={element.image}
            links={element.links}
            tags={element.stacks}    
          />
        </div>
      ))}
    </>
  );
}

export default Projects;
