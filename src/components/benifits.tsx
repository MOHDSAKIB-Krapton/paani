const benefits = [
  {
    title: "Enhances Brand Recall",
    description:
      "Custom branded bottles ensure your brand stays top-of-mind with clients, customers, and guests, boosting recognition, loyalty, and repeat engagement.",
  },
  {
    title: "Professional & Premium Guest Experience",
    description:
      "Deliver hygienic, mineral-rich water in elegantly branded bottles, providing a high-end, memorable experience that reinforces your brand’s premium image.",
  },
  {
    title: "Unique Identity in the Market",
    description:
      "Differentiate your brand with distinctive, eye-catching bottle designs that leave a lasting impression and position your business as a market leader.",
  },
  {
    title: "Marketing That Travels with Customers",
    description:
      "Every bottle becomes a mobile marketing tool, extending brand visibility wherever your customers go, effectively turning hydration into subtle yet powerful advertising.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      {/* Hero */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Why Choose <span className="text-primary">Customized Bottles?</span>
        </h2>
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
          Discover how personalized bottled water can elevate your brand, create
          memorable guest experiences, and generate lasting marketing impact for
          events, hospitality, and retail.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold mb-3 text-primary">
              {benefit.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
