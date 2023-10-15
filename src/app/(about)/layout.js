import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "3 month Completed",
    "98% Client Satisfaction",
    "150+ Subscribers",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
