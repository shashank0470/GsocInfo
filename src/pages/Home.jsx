import { Link } from 'react-router-dom'
import ContentCard from '../components/ContentCard'

export default function Home() {

return (
<div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Link to= "./what-is-gsoc">
        <ContentCard title="🌍 What is GSoC?" icon="🌍">
        Google Summer of Code (GSoC) is a global program by Google that gives students and open-source beginners the opportunity to contribute to real-world projects during the summer. You work with open-source organizations, write code, get mentored, and earn a stipend — usually $750, %1,500, $3,000 for small, medium, and large projects..........
        </ContentCard>
    </Link>
 
    <Link to="getting-started">
        <ContentCard title="🚀 Getting Started" icon="🚀">
        Getting started with GSoC begins with understanding how open source works. Start by exploring past organizations on the GSoC website, and look for projects that match your interests — like frontend, backend, Python, machine learning, etc. Begin contributing by finding bugs, fixing errors, improving documentation, or solving beginner issues..........
        </ContentCard>
    </Link>

    <Link to= "timeline">
        <ContentCard title="📆 Timeline Explained" icon="📆">
        The GSoC timeline is the official schedule that outlines all important phases of the program — from the announcement of organizations to the final project submission. It includes key dates for events like organization applications, contributor registrations, proposal submissions, coding periods, evaluations, and result announcements..............
        </ContentCard>
    </Link>

    <Link to="projects">
        <ContentCard title="🏆 Project Archives" icon="🏆">
        In this section, we’re going to explore some of the past projects that were selected in GSoC over the years. By going through these real examples, we’ll try to understand what kind of ideas get accepted, how contributors approach their work, and what organizations expect......
        </ContentCard>
    </Link>

    <Link to="glossary">
        <ContentCard title="📖 GSoC Glossary" icon="📖">
        The Glossary is a quick-reference section where you’ll find the meanings of common terms used in GSoC and open-source development. If you ever feel lost while reading about the program, this section will help you understand the language better and clear your basic doubts......
        </ContentCard>
    </Link>

    <Link to="faq">
        <ContentCard title="💬 Top FAQs" icon="💬">
        The FAQ section is here to clear all the common doubts that students and beginners have when they first hear about GSoC. Whether you're wondering about eligibility, technical skills, proposal writing, or deadlines — this is the place where you'll find quick and simple answers.....
        </ContentCard>
    </Link>

    </div>
    <div className="mt-8 bg-[var(--glass)] border border-dashed border-[#4ade80] p-4 font-mono text-[#4ade80] rounded-lg shadow-[0_0_12px_#4ade8044]">
    $ ./learn-gsoc --start | echo "Become a GSoC wizard today."
    </div>
</div>
)
}