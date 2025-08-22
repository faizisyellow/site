import { Tag, TagColors } from "../components/tag";
import TitleSection from "../components/titleSection";

const skillsData = {
  languages: {
    color: TagColors.GREEN,
    items: ["Go", "Typescript", "Javascript"],
  },
  "frameworks/libraries": {
    color: TagColors.BLUE,
    items: ["Chi", "Cobra"],
  },
  databases: {
    color: TagColors.PURPLE,
    items: ["Sql", "Mysql"],
  },
  tools: {
    color: TagColors.ORANGE,
    items: ["Git", "Swagger", "Docker"],
  },
};

function Skills() {
  return (
    <>
      <TitleSection title="Skills" />
      <div className="space-y-8 mx-4">
        {Object.entries(skillsData).map(([category, { color, items }]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-lg font-semibold text-brand capitalize">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, index) => (
                <Tag key={index} color={color}>
                  {skill}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
