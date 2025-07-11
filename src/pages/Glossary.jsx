export default function Glossary() {
  const terms = [
    {
      term: "Open Source",
      definition: "Software for which the original source code is made freely available and may be redistributed and modified."
    },
    {
      term: "Mentor",
      definition: "An experienced developer from the organization who guides the student through the project."
    },
    {
      term: "Proposal",
      definition: "A document submitted by students outlining their project plan for GSoC."
    },
    {
      term: "Stipend",
      definition: "The payment students receive upon successful completion of their project milestones."
    },
    {
      term: "Community Bonding",
      definition: "Period before coding starts where students get familiar with their organization and mentors."
    },
    {
      term: "Evaluation",
      definition: "Periodic assessment of student progress by mentors."
    }
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[var(--primary)]">GSoC Glossary</h2>
      <p className="text-[var(--text-dim)]">
        Key terms and concepts you'll encounter in your GSoC journey.
      </p>
      
      <div className="space-y-4 mt-6">
        {terms.map((item, index) => (
          <div key={index} className="bg-[var(--card-bg)] border border-[var(--glass)] rounded-lg p-4">
            <h3 className="text-lg font-bold text-[var(--primary)]">{item.term}</h3>
            <p className="text-[var(--text-dim)] mt-1">{item.definition}</p>
          </div>
        ))}
      </div>
    </div>
  )
}