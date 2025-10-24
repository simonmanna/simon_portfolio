const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Senior Dev, Stripe',
    text: "BeanCode's Arabica keeps me in flow for 10-hour sprints. No jitters, just focus.",
    rating: 5,
  },
  {
    name: 'Sarah Kim',
    role: 'CTO, Startup',
    text: 'The Specialty Blend is now part of our onboarding kit. Devs love it.',
    rating: 5,
  },
  {
    name: 'Mike Torres',
    role: 'Freelancer',
    text: 'Finally, coffee that understands late-night debugging sessions.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-coffee-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-coffee-900">
          What <span className="text-coffee-700">Developers</span> Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">Star</span>
                ))}
              </div>
              <p className="text-coffee-700 italic mb-4">"{t.text}"</p>
              <div>
                <p className="font-bold text-coffee-900">{t.name}</p>
                <p className="text-sm text-coffee-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}