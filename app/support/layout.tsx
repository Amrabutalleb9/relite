import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Product Links — Relite",
  description: "Internal product access links for the Relite support team.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <p className="font-logo text-lg tracking-tight">
            Relite<span className="text-accent-light">.</span>
          </p>
          <p className="text-caption uppercase tracking-widest text-muted">
            Internal · Support
          </p>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-8 md:py-12">{children}</main>
    </div>
  );
}
