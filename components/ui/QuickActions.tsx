import { siteConfig } from "@/lib/site";

export default function QuickActions() {
  return (
    <div className="quick-actions" aria-label="Quick contact actions">
      <a className="quick-action quick-action-call" href={`tel:${siteConfig.phone}`}>
        <span aria-hidden>📞</span>
        <span>Call Now</span>
      </a>
      <a
        className="quick-action quick-action-whatsapp"
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noreferrer"
      >
        <span aria-hidden>💬</span>
        <span>WhatsApp Now</span>
      </a>
    </div>
  );
}
