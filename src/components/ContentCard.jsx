export default function ContentCard({ title, children, icon }) {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--primary)] rounded-xl p-6 shadow-lg shadow-[#00f5c325] backdrop-blur-sm transition-all hover:translate-y-[-6px] hover:border-[#0ff] hover:shadow-[0_0_40px_#00f5c360]">
      <h3 className="text-xl font-semibold text-[#0ff] mb-3 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h3>
      <div className="text-[var(--text-dim)]">{children}</div>
    </div>
  )
}