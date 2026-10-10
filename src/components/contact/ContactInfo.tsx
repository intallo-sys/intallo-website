import ActionLink from "@/components/ui/ActionLink";
import { contact } from "@/lib/content";
import { SpotlightCard } from "@/components/ui/Animations";

export default function ContactInfo() {
  const { info } = contact;
  return (
    <SpotlightCard
      spotlightColor="rgba(26, 118, 255, 0.22)"
      className="bg-intallo-navy-deep text-white p-8 md:p-10 rounded-2xl space-y-8 flex flex-col justify-between border border-white/10 shadow-xl"
    >
      <div className="space-y-6">
        <p className="text-intallo-blue font-semibold text-sm">{info.cardLabel}</p>
        <h3 className="text-xl font-bold">{info.subheading}</h3>

        <div className="space-y-6 pt-4">
          {info.items.map((item, i) => (
            <div key={i} className="space-y-1">
              <p className="text-xs font-semibold text-intallo-on-navy uppercase tracking-wider">{item.label}</p>
              <div>
                <ActionLink href={item.href} className="text-white text-base hover:text-intallo-blue transition-colors">
                  {item.value}
                </ActionLink>
              </div>
            </div>
          ))}

          <div className="space-y-1 pt-2">
            <p className="text-xs font-semibold text-intallo-on-navy uppercase tracking-wider">{info.follow.label}</p>
            <div className="flex items-center gap-2 text-sm text-white">
              {info.follow.links.map((link, j) => (
                <span key={j} className="flex items-center gap-2">
                  <ActionLink href={link.href} className="text-white hover:text-intallo-blue">
                    {link.label}
                  </ActionLink>
                  {j < info.follow.links.length - 1 && <span className="text-intallo-on-navy">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
