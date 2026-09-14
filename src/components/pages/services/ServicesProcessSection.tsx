import { DirectionalReveal } from "@/components/motion/DirectionalReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Connect",
    text: "Email or call with your brand, campaign goals, and the message you want listeners to hear. Share timing, regions you care about, and any questions about fit.",
  },
  {
    step: "02",
    title: "Plan",
    text: "We discuss placement options that suit The Ocean Radio’s relaxed format — audio length, frequency, and how your spot should sound. You receive clear terms before anything goes live.",
  },
  {
    step: "03",
    title: "Launch",
    text: "Once approved, your promotion airs within the station’s online stream. We stay available for adjustments or follow-up campaigns when you are ready.",
  },
];

export function ServicesProcessSection() {
  return (
    <section className="relative bg-deep-ocean py-20 md:py-28" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <DirectionalReveal direction="top">
          <SectionHeading
            id="process-heading"
            eyebrow="How It Works"
            title="A Simple Partnership Path"
            description="Online radio advertising with The Ocean Radio is designed to be straightforward — clear communication from first contact to on-air promotion."
            align="center"
          />
        </DirectionalReveal>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((item, i) => (
            <DirectionalReveal
              key={item.step}
              direction={i === 0 ? "left" : i === 2 ? "right" : "top"}
              delay={i * 0.08}
            >
              <li className="relative h-full rounded-2xl border border-aqua/10 bg-dark-ocean/60 p-6 md:p-8">
                <span className="font-display text-4xl font-bold text-aqua/25">{item.step}</span>
                <h3 className="mt-4 font-display text-xl font-bold text-foam">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foam/70">{item.text}</p>
              </li>
            </DirectionalReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
