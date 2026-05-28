'use client'

export default function Navbar() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-screen-2xl mx-auto px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <div className="w-9 h-9 bg-white rounded-2xl flex items-center justify-center">
            <span className="text-[#0A0A0F] font-bold text-3xl tracking-[-3px]">V</span>
          </div>
          <span className="font-semibold text-2xl tracking-tighter">Vertron</span>
        </div>

        <div className="hidden md:flex items-center gap-x-10 text-sm font-medium">
          <button onClick={() => scrollTo('capabilities')} className="hover:text-[#67e8f9] transition-colors">Capabilities</button>
          <button onClick={() => scrollTo('process')} className="hover:text-[#67e8f9] transition-colors">Process</button>
          <button onClick={() => scrollTo('why')} className="hover:text-[#67e8f9] transition-colors">Why Vertron</button>
        </div>

        <div className="flex items-center gap-x-3">
          <button onClick={() => scrollTo('contact')} className="px-6 py-3 text-sm font-semibold border border-white/20 hover:bg-white hover:text-[#0A0A0F] transition-all rounded-3xl">Book Call</button>
          <button onClick={() => scrollTo('contact')} className="px-7 py-3.5 bg-white text-[#0A0A0F] font-semibold rounded-3xl text-sm hover:bg-[#67e8f9] transition-all">Start Project</button>
        </div>
      </div>
    </nav>
  )
}


---

File 5: components/SectionHeader.tsx

Filename: components/SectionHeader.tsx

export default function SectionHeader({ 
  label, 
  title, 
  className = "" 
}: { 
  label: string; 
  title: string; 
  className?: string 
}) {
  return (
    <div className={className}>
      <div className="text-[#67e8f9] text-xs font-semibold tracking-[3px]">{label}</div>
      <h2 className="font-display text-6xl tracking-tighter mt-3">{title}</h2>
    </div>
  )
}
