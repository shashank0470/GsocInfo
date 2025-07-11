import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Home from './pages/Home'
import WhatIsGsoc from './pages/WhatIsGsoc'
import GettingStarted from './pages/GettingStarted'
import Timeline from './pages/Timeline'
import Projects from './pages/Projects'
import Glossary from './pages/Glossary'
import Faq from './pages/Faq'

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[var(--bg)]">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Header />
          <main className="p-6 md:p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/what-is-gsoc" element={<WhatIsGsoc />} />
              <Route path="/getting-started" element={<GettingStarted />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/glossary" element={<Glossary />} />
              <Route path="/faq" element={<Faq />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App