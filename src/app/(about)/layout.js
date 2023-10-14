import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "5 Years Completed",
    "98% Client Satisfaction",
    "20K+ Subscribers",
    "Recipient of the Innovative Transport Award 🏆",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
