export default function Projects() {
  const sampleProjects = [
    {
      year: 2023,
      org: "TensorFlow",
      title: "Improving Model Performance Visualization",
      student: "Jane Doe",
      description: "Developed new visualization tools for TensorFlow model performance metrics."
    },
    {
      year: 2022,
      org: "GNOME",
      title: "Accessibility Improvements",
      student: "John Smith",
      description: "Enhanced screen reader support across multiple GNOME applications."
    },
    {
      year: 2021,
      org: "KDE",
      title: "Plasma Mobile Enhancements",
      student: "Alex Johnson",
      description: "Implemented new features for KDE's mobile interface."
    }
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[var(--primary)]">Project Archives</h2>
      <p className="text-[var(--text-dim)]">
        Browse through successful projects from past GSoC editions to get inspiration for your own application.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {sampleProjects.map((project, index) => (
          <div key={index} className="bg-[var(--card-bg)] border border-[var(--glass)] rounded-xl p-6 hover:border-[var(--primary)] transition-colors">
            <div className="flex justify-between items-start">
              <span className="text-sm text-[var(--primary)]">{project.year}</span>
              <span className="text-xs bg-[var(--glass)] px-2 py-1 rounded">{project.org}</span>
            </div>
            <h3 className="text-lg font-bold mt-2">{project.title}</h3>
            <p className="text-sm text-[var(--text-dim)] mt-1">by {project.student}</p>
            <p className="text-[var(--text-dim)] mt-3">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}