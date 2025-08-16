

import { Button } from "@/components/ui/button";

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
        {/* Home Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-8">
        <div className="text-center space-y-8 p-8 max-w-4xl">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Hi, this is Valentino 
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Welcome to my portfolio! I'm a developer passionate about creating amazing digital experiences with modern technologies.
            </p>
          </div>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg">
              Get Started
            </Button>
            <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-900/20 px-8 py-3 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="min-h-screen flex flex-col items-center justify-center p-8 relative">
        <div className="text-center space-y-6 relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            #works
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Here are some of my featured projects and works that showcase my skills and creativity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Project cards will go here */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-xl hover:bg-white/10 transition-all duration-300">
              <div className="w-full h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-sm text-gray-400">Project Preview</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Project 1</h3>
              <p className="text-gray-400">Description of your first project with modern technologies</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-xl hover:bg-white/10 transition-all duration-300">
              <div className="w-full h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-sm text-gray-400">Project Preview</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Project 2</h3>
              <p className="text-gray-400">Another amazing project showcasing your skills</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-xl hover:bg-white/10 transition-all duration-300">
              <div className="w-full h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-sm text-gray-400">Project Preview</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Project 3</h3>
              <p className="text-gray-400">Creative solution demonstrating your expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="min-h-screen flex flex-col items-center justify-center p-8 relative">
        <div className="text-center space-y-6 max-w-4xl relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            #about-me
          </h2>
          <p className="text-lg text-gray-300">
            I'm a passionate developer with experience in modern web technologies. 
            I love creating beautiful, functional, and user-friendly applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-white">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-white">Experience</h3>
              <p className="text-gray-400">
                Details about your professional experience and background in creating innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="min-h-screen flex flex-col items-center justify-center p-8 relative">
        <div className="text-center space-y-6 max-w-2xl relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            #contacts
          </h2>
          <p className="text-lg text-gray-300">
            I'm always interested in hearing about new opportunities and projects. 
            Let's get in touch!
          </p>
          <div className="space-y-4">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-xl hover:bg-white/10 transition-all duration-300">
              <p className="text-gray-300">📧 Email: valentino@example.com</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-xl hover:bg-white/10 transition-all duration-300">
              <p className="text-gray-300">💼 LinkedIn: /in/valentino-portfolio</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-xl hover:bg-white/10 transition-all duration-300">
              <p className="text-gray-300">🔗 GitHub: /valentino0405</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
