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
