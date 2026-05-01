import SectionHeading from "@/components/ui/SectionHeading";
import { programs } from "@/lib/site";

export default function ProgramsSection() {
  return (
    <section id="programs" className="container-page section-space">
      <SectionHeading
        eyebrow="Our Programs"
        title="Age-tailored programs for each growth stage"
        description="A thoughtful curriculum designed around developmental milestones, play, and social learning."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {programs.map((program) => (
          <article
            key={program.title}
            className="card-soft group transition duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-400">
              {program.age}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-slate-800">{program.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{program.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
