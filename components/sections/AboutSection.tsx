import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  "CCTV monitored secure campus and verified staff",
  "Daily activity updates and transparent parent communication",
  "Balanced routine of learning, rest, nutrition, and play",
];

export default function AboutSection() {
  return (
    <section id="about" className="container-page section-space">
      <div className="grid gap-7 lg:grid-cols-[1fr_1fr] lg:items-start">
        <SectionHeading
          eyebrow="About Us"
          title="A nurturing foundation families can trust"
          description="We support emotional, cognitive, and social growth through compassionate teaching and consistent routines."
        />

        <div className="card-soft space-y-4">
          {values.map((value) => (
            <p key={value} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
              <span
                aria-hidden
                className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-rose-300"
              />
              {value}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
