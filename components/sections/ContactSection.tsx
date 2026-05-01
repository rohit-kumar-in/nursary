import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact" className="container-page section-space">
      <div className="grid gap-7 rounded-3xl bg-white p-7 shadow-soft sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Contact"
          title="Schedule a visit"
          description="We would love to show you around. Share your details and our team will reach out shortly."
        />

        <form className="grid gap-4" aria-label="Contact form">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Parent Name
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input-base"
              required
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Email Address
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="input-base"
              required
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Child Age Group
            <select name="ageGroup" className="input-base" defaultValue="">
              <option value="" disabled>
                Select age group
              </option>
              <option value="infant">Infant</option>
              <option value="toddler">Toddler</option>
              <option value="pre-nursery">Pre-Nursery</option>
            </select>
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Message
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us what you are looking for"
              className="input-base resize-none"
            />
          </label>

          <button type="submit" className="button-primary mt-2 justify-center">
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
