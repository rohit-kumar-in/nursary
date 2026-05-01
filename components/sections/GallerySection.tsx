import SectionHeading from "@/components/ui/SectionHeading";

const galleryItems = [
  "Creative Arts",
  "Outdoor Play",
  "Circle Time",
  "Story Corner",
];

export default function GallerySection() {
  return (
    <section className="container-page section-space">
      <SectionHeading
        eyebrow="Our Space"
        title="A warm environment designed for discovery"
        description="Purposeful spaces that encourage imagination, movement, and collaborative play."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {galleryItems.map((item, index) => (
          <article
            key={item}
            className="group relative min-h-44 overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-br from-[#DCEBFF] via-[#FDF2F8] to-[#DFF5E9] p-6 transition duration-300 hover:shadow-soft"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-600">
              {`0${index + 1}`}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-800">{item}</h3>
            <p className="mt-2 text-sm text-slate-700">Premium, safe, and child-centric zones.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
