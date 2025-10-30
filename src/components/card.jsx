import { ExternalLink, Github } from "./icons/Icons";
import { Tag } from "./tag";

export default function Card({
  title,
  description,
  image,
  links = {},
  tags = [],
}) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 p-4">
      {/* Image */}
      <div className="w-full sm:w-1/3">
        <div className="w-full h-32 bg-gray-200 flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-gray-400 text-sm">No Image</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-brand mt-1">{description}</p>

        {/*  Tags */}
        <div className="flex gap-2 flex-wrap mt-3">
          {tags.map((element, index) => (
            <Tag key={index} color={element?.color} size={element?.size}>
              {element?.text}
            </Tag>
          ))}
        </div>

        {/* Icons */}
        <div className="flex gap-3 mt-3">
          {links.external && (
            <a
              href={links.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black"
            >
              <ExternalLink fill={"none"} />
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black"
            >
              <Github fill={"none"} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
