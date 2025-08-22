import List from "../components/list";
import TitleSection from "../components/titleSection";

const experiences = [
  {
    role: "Backend Developer",
    company: "Another Company",
    type: "Full-time",
    period: "Aug 2023 - Dec 2023 · 5 Months",
    location: "Remote",
    description: "Worked on building APIs and database schemas.",
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