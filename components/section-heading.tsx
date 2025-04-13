interface SectionHeadingProps {
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ title, description, centered = false, className = "" }: SectionHeadingProps) {
  return (
    <div className={`space-y-4 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="section-heading">{title}</h2>
      {description && (
        <p className={`${centered ? "mx-auto" : ""} max-w-[700px] text-muted-foreground md:text-xl`}>{description}</p>
      )}
    </div>
  )
}

