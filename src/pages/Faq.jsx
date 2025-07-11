export default function Faq() {
  const faqs = [
    {
      question: "Can first-year students apply for GSoC?",
      answer: "Yes, first-year students can apply as long as they meet all other eligibility criteria."
    },
    {
      question: "Is GSoC only for computer science students?",
      answer: "No, students from any discipline can apply as long as they have the required technical skills."
    },
    {
      question: "How competitive is GSoC?",
      answer: "GSoC is quite competitive with thousands of applicants each year. Strong open source contributions before applying significantly increase your chances."
    },
    {
      question: "Can I apply with multiple proposals?",
      answer: "Yes, you can submit up to 3 proposals to different organizations, but you can only be accepted for one."
    },
    {
      question: "What makes a good proposal?",
      answer: "A good proposal clearly outlines the project goals, timeline, deliverables, and demonstrates your understanding of the codebase."
    }
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[var(--primary)]">Frequently Asked Questions</h2>
      
      <div className="space-y-4 mt-6">
        {faqs.map((item, index) => (
          <div key={index} className="bg-[var(--card-bg)] border border-[var(--glass)] rounded-lg p-4">
            <h3 className="text-lg font-bold text-[var(--primary)]">{item.question}</h3>
            <p className="text-[var(--text-dim)] mt-2">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}