import TitleSection from "../components/titleSection";

function About() {
  return (
    <div>
      <TitleSection title="About Me" />

      <p className="text-brand text-lg text-pretty leading-relaxed min-h-[4.875rem]">
       Hi! My name is Faissal Maulana. I’m a Backend developer passionate about building robust and scalable web services. I follow best practices and design patterns to ensure reliability. I’m also interested in terminals and CLI tools, and I like creating CLI tools to reduce repetitive tasks so I can focus on solving problems, implementing business logic, and speeding up development.
      </p>
    </div>
  );
}

export default About;
