const members = [
  {
    name: "S. V. Anand",
    role: "Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80",
  },
  {
    name: "Mr. Murugan",
    role: "Support Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80",
  },
  {
    name: "Parvin Begum",
    role: "Secretary Treasurer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80",
  },
  {
    name: "Vairamani",
    role: "President",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80",
  },
  {
    name: "Thanigaivelan",
    role: "Vice President",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&q=80",
  },
  {
    name: "Duraikannu",
    role: "Coordinator",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=900&q=80",
  },
];

export default function ChapterMembers() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full bg-[#E63946]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E63946]">
            Leadership Team
          </span>

          <h2 className="mt-5 text-4xl font-black text-[#1F2A5A] md:text-6xl">
            Meet Our
            <span className="block text-[#E63946]">
              Chapter Members
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[30px] bg-white shadow-[0_15px_50px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(15,23,42,0.14)]"
            >
              
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A5A] via-[#1F2A5A]/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-black text-white">
                  {member.name}
                </h3>

                <div className="mt-4 inline-flex rounded-full bg-[#E63946] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
                  {member.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-[32px] bg-[#1F2A5A] px-6 py-16 text-center md:px-12">
          <h3 className="text-4xl font-black leading-tight text-white md:text-6xl">
            Your Network Is Your
            <span className="block text-[#E63946]">
              Networth
            </span>
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build strong business relationships and unlock powerful growth
            opportunities through BusiHunt.
          </p>

          <button className="mt-10 rounded-2xl bg-[#E63946] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:scale-105 hover:bg-[#d62f3f]">
            Join BusiHunt
          </button>
        </div>
      </div>
    </section>
  );
}