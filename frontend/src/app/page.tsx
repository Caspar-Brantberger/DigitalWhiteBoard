import Link from "next/link";

const columns = [
  {
    title: "Backlog",
    cards: ["Invite teammates", "Draft board templates"],
  },
  {
    title: "In progress",
    cards: ["Design onboarding", "Connect API"],
  },
  {
    title: "Done",
    cards: ["Create project structure", "Set up database"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] text-[#1f2933]">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-12">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold">
            DigitalWhiteBoard
          </Link>
          <div className="flex items-center gap-3 text-sm font-medium">
            <Link
              href="/login"
              className="rounded-md px-3 py-2 text-[#364152] transition hover:bg-white"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="rounded-md bg-[#1f2933] px-4 py-2 text-white transition hover:bg-[#111827]"
            >
              Get started
            </Link>
          </div>
        </nav>

        <div className="grid items-center gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5b7c74]">
              Simple project planning
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl">
              Turn ideas into clear boards and steady progress.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#4b5563]">
              DigitalWhiteBoard gives small teams a focused place to create
              boards, arrange columns, and move cards from first thought to
              finished work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex h-11 items-center justify-center rounded-md bg-[#2f5d50] px-5 text-sm font-semibold text-white transition hover:bg-[#24483e]"
              >
                Create account
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex h-11 items-center justify-center rounded-md border border-[#c9d2ca] bg-white px-5 text-sm font-semibold text-[#1f2933] transition hover:border-[#9fb0a7]"
              >
                View dashboard
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-[#d9ded6] bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between border-b border-[#edf0eb] pb-4">
              <div>
                <p className="text-sm font-semibold text-[#111827]">
                  Product launch
                </p>
                <p className="text-xs text-[#667085]">3 columns / 6 cards</p>
              </div>
              <span className="rounded-md bg-[#edf7f1] px-3 py-1 text-xs font-semibold text-[#2f5d50]">
                Active
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {columns.map((column) => (
                <section
                  key={column.title}
                  className="min-h-52 rounded-md bg-[#f4f6f1] p-3"
                >
                  <h2 className="text-sm font-semibold text-[#344054]">
                    {column.title}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {column.cards.map((card) => (
                      <div
                        key={card}
                        className="rounded-md border border-[#e2e7df] bg-white p-3 text-sm text-[#344054] shadow-sm"
                      >
                        {card}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
