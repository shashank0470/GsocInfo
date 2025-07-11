export default function Timeline() {
  const timelineItems = [
    {
      date: "February",
      title: "Organization Applications",
      description: "Open source organizations apply to participate in GSoC."
    },
    {
      date: "March",
      title: "Organization List Announced",
      description: "List of accepted organizations is published. Students can start exploring projects."
    },
    {
      date: "April",
      title: "Student Application Period",
      description: "Students submit proposals to organizations through the GSoC website."
    },
    {
      date: "May",
      title: "Accepted Students Announced",
      description: "List of selected students is published. Community bonding period begins."
    },
    {
      date: "June - August",
      title: "Coding Period",
      description: "Students work on their projects under mentor guidance."
    },
    {
      date: "September",
      title: "Results Announced",
      description: "Final evaluations are completed and results are published."
    }
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[var(--primary)]">GSoC Timeline</h2>
      
      <div className="relative">
        <div className="absolute left-4 h-full w-0.5 bg-[var(--primary)] transform -translate-x-1/2"></div>
        
        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-0 w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center transform -translate-x-1/2">
                <span className="text-[var(--bg)] font-bold">{index + 1}</span>
              </div>
              <div className="bg-[var(--card-bg)] border border-[var(--glass)] rounded-lg p-4">
                <div className="text-sm text-[var(--primary)] font-semibold">{item.date}</div>
                <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                <p className="text-[var(--text-dim)] mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}