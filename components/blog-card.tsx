import { CalendarDays, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface BlogPostProps {
  title: string
  excerpt: string
  date: string
  image: string
  category: string
  slug: string
}

export function BlogCard({ title, excerpt, date, image, category, slug }: BlogPostProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=200&width=400"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-accent text-accent-foreground hover:bg-accent/80">{category}</Badge>
        </div>
      </div>
      <CardContent className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <CalendarDays className="mr-1 h-4 w-4" />
          <time dateTime={date}>{date}</time>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="text-primary font-medium inline-flex items-center group hover:text-primary-light transition-colors"
        >
          Read More
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  )
}

