import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="container-page pt-12 pb-14 sm:pt-16 sm:pb-20">
      <div className="grid gap-8 rounded-3xl bg-white p-7 shadow-soft sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">
            Trusted by modern families
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl">
            Premium daycare for your child&apos;s best early years
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            We blend nurturing care, structured learning, and safe spaces to help every
            child thrive with confidence.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="#contact" className="button-primary justify-center">
              Book a Tour
            </Link>
            <Link href="#programs" className="button-secondary justify-center">
              Explore Programs
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-[#FFE8DD] via-[#FBD5E5] to-[#DFF5E9] p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-soft">
              <p className="text-2xl font-semibold text-slate-800">1:5</p>
              <p className="mt-1 text-sm text-slate-600">Teacher-child ratio</p>
            </div>
            <div className="card-soft">
              <p className="text-2xl font-semibold text-slate-800">9+ yrs</p>
              <p className="mt-1 text-sm text-slate-600">Average staff experience</p>
            </div>
            <div className="card-soft sm:col-span-2">
              <p className="text-2xl font-semibold text-slate-800">500+ families</p>
              <p className="mt-1 text-sm text-slate-600">
                Trusted by parents across our community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
