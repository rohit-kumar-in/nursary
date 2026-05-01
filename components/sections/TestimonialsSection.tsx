import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/site";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="container-page section-space">
      <SectionHeading
        eyebrow="Parent Voices"
        title="Why families choose Little Blossoms"
        description="Real experiences from parents who trust us with their children every day."
        align="center"
      />

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <blockquote key={item.name} className="card-soft">
            <p className="text-base leading-relaxed text-slate-700">&ldquo;{item.quote}&rdquo;</p>
            <footer className="mt-4 text-sm font-semibold text-slate-900">{item.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
