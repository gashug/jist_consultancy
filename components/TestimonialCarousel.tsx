const testimonials = [
  {
    name: "Wanjiku M.",
    role: "Owner, Retail Shop – Thika",
    quote:
      "Jist Consultancy helped us clean up three years of returns and set up simple bookkeeping. We now know exactly what we owe and when."
  },
  {
    name: "Brian K.",
    role: "Director, Construction SME – Nairobi",
    quote:
      "They guided us through KRA compliance, PAYE and payroll. No more guesswork, and our staff are paid on time with proper records."
  },
  {
    name: "Grace N.",
    role: "Freelance Consultant – Ruiru",
    quote:
      "The iTax training showed me exactly how to file on my own. I still retain them for advisory on tricky issues."
  }
];

export default function TestimonialCarousel() {
  return (
    <section className="bg-white border-t">
      <div className="container py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          What Our Clients Say
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border bg-slate-50 p-5 text-sm text-slate-700"
            >
              <p className="italic">“{t.quote}”</p>
              <p className="mt-3 font-semibold text-slate-900">{t.name}</p>
              <p className="text-xs text-slate-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}