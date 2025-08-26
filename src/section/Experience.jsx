import List from "../components/list";
import TitleSection from "../components/titleSection";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Sekawan Media",
    type: "Internship",
    period: "Jan 2024 - Jul 2024 · 6 Months",
    location: "Malang, Indonesia",
    description: "Assists main developer when building website.",
  },
];

function Experience() {
    return (
        <>
        <TitleSection title="Experience"/>
        <List items={experiences}/>
        </>
    )
}

export default Experience
