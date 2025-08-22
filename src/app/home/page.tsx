export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced Purple gradient background - Multiple layers for depth */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/30 via-black via-50% to-blue-900/20 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-tr from-transparent via-purple-800/10 to-transparent pointer-events-none"></div>
      
      {/* Glowing orbs for ambient lighting */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-purple-600/20 via-purple-800/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-purple-700/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 animate-pulse"></div>
      <div className="fixed top-1/2 left-1/3 w-[400px] h-[400px] bg-gradient-radial from-purple-500/15 to-transparent rounded-full blur-2xl animate-pulse delay-700"></div>
      <div className="fixed bottom-1/4 left-0 w-[300px] h-[300px] bg-gradient-radial from-indigo-600/15 to-transparent rounded-full blur-2xl transform -translate-x-1/3 animate-pulse delay-1000"></div>
      
      {/* Subtle grid overlay for tech feel */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Content */}
      <div className="relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center pt-8">
          <div className="text-center space-y-8 p-8 max-w-4xl">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Hi, I'm Valentino Gomes
              </h1>
              <h2 className="text-2xl font-light text-white/80">
                Full Stack Developer & AI Engineer
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                Welcome to my portfolio! I'm a passionate Computer Engineering student at St. Francis Institute of Technology with a CGPA of 9.28. 
                I specialize in creating innovative web applications and AI-powered solutions using cutting-edge technologies like Next.js, React, Node.js, and Python.
              </p>
              <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                From building full-stack health assistants to developing desktop AI companions, I love turning complex ideas into elegant digital experiences. 
                Currently serving as Head of Graphics at Code x SFIT and gaining real-world experience as an AI Engineer and Frontend Developer intern at Quickyearning Pvt Ltd.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <a 
                href="/projects" 
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Projects
              </a>
              <a 
                href="/contacts" 
                className="px-8 py-3 border border-white/20 hover:border-white/40 rounded-full font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
