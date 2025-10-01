import KineticTestimonial from "@/components/ui/kinetic-testimonials";

const testimonials = [
  {
    name: "Rahul Mehta",
    handle: "Homeowner",
    review:
      "Purelay is super reliable! The delivery is always on time, and the water quality is crystal clear. Couldn’t ask for better service.",
  },
  {
    name: "Priya Sharma",
    handle: "Restaurant Owner",
    review:
      "We’ve been using Purelay for our restaurant for over 5 years. Bulk deliveries are hassle-free, and the team is very supportive.",
  },
  {
    name: "Amit Verma",
    handle: "Factory Manager",
    review:
      "Handling high-volume supply is not easy, but Purelay makes it seamless. Their compliance and safety standards are top-notch.",
  },
];

export function TestimonialsSection() {
  return (
    <div className="min-h-screen w-full container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <div className="animate-scroll-up animate-scroll-down hidden"></div>

      <KineticTestimonial
        testimonials={testimonials}
        desktopColumns={3}
        tabletColumns={3}
        mobileColumns={2}
        speed={1}
        title="Customer Reviews"
        subtitle="What our users think about our product"
      />
    </div>
  );
}
export default TestimonialsSection;
