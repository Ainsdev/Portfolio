"use client"

export default function SimplePage() {
  return (
    <main className="flex h-max w-full flex-col items-center justify-center pt-20">
      <section className="relative h-36 w-1/2 overflow-hidden rounded-xl border border-slate-800 p-[1px] backdrop-blur-3xl">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-secondary px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <h1 className="text-xl font-bold text-primary">
            WHAT I CANNOT CREATE, I DO NOT UNDERSTAND
          </h1>
          <p className="text-sm font-semibold text-primary">
            - Richard Feynman
          </p>
        </div>
      </section>
    </main>
  )
}
