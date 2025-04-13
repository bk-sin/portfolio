import { GlowingEffectDemo } from "@/components/glowing-effect-demo"

export default function GlowingEffectExamplePage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Glowing Effect Demo</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Interactive cards with a glowing border effect that follows your cursor.
          </p>
        </div>

        <div className="mt-12">
          <GlowingEffectDemo />
        </div>
      </div>
    </div>
  )
}

