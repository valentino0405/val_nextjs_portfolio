export default function About() {
  const skills = [
    { name: "JavaScript", icon: "🟨" },
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🐬" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "NeonDB", icon: "⚡" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "Git", icon: "📝" },
    { name: "Canva", icon: "🎭" }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/30 via-black via-50% to-blue-900/20 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-tr from-transparent via-purple-800/10 to-transparent pointer-events-none"></div>
      
      {/* Glowing orbs */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-purple-600/20 via-purple-800/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-purple-700/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
              About Me
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Get to know more about my background, skills, and experience in software development.
            </p>
          </div>

          <div className="space-y-16">
            {/* Education Section */}
            <section className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                🎓 Education
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-300">
                    St. Francis Institute Of Technology, University Of Mumbai
                  </h3>
                  <p className="text-white/80">B.E. Computer Engineering</p>
                  <p className="text-white/70">CGPA: 9.28 | August 2023 – Present</p>
                  <p className="text-white/60">Mumbai, Maharashtra</p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                💻 Technical Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <p className="text-white/90 font-medium text-sm">{skill.name}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience Section */}
            <section className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                💼 Experience
              </h2>
              
              {/* Internship */}
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">
                    AI Engineer & Frontend Developer Intern
                  </h3>
                  <p className="text-white/80 font-medium mb-2">Quickyearning Pvt Ltd</p>
                  <ul className="text-white/70 space-y-2 list-disc list-inside">
                    <li>Fixed the superchart section and enhanced navigation for the QuickYearning website</li>
                    <li>Developed UI/UX Next.js based components for the navigation menu</li>
                    <li>Developing a replica of the TradingView website</li>
                    <li>Successfully migrated the SuperCharts section to Next.js on DiamondRock.in</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Activities Section */}
            <section className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                🏆 Activities and Leadership
              </h2>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">
                  Head of Graphics
                </h3>
                <p className="text-white/80 font-medium mb-2">Code x SFIT | May 2025 – Present</p>
                <ul className="text-white/70 space-y-2 list-disc list-inside">
                  <li>Leading a 4-member team, coordinating with core members to ensure smooth execution</li>
                  <li>Directed and delivered all graphical design work for the Node.js workshop</li>
                  <li>Managed design assets for Bug Bounty game release</li>
                </ul>
              </div>
            </section>

            {/* Certifications */}
            <section className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                📜 Certifications & Projects
              </h2>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <h4 className="font-semibold text-purple-300 mb-2">WhatsApp Clone + Video</h4>
                    <p className="text-white/70 text-sm">MERN + Socket.io for real-time chatting</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <h4 className="font-semibold text-purple-300 mb-2">FlipKart Clone</h4>
                    <p className="text-white/70 text-sm">MERN + Payment Gateway (Paytm)</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <h4 className="font-semibold text-purple-300 mb-2">Virtual Assistant</h4>
                    <p className="text-white/70 text-sm">Python + Gemini API (Collaborated with Dhaval Suthar)</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
