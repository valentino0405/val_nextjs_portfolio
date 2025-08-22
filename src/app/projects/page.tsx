import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Healthify",
      description: "Full-stack AI health assistant using Next.js, React, Tailwind CSS, and Gemini Flash 2.0 API for personalized medical insights.",
      technologies: "Next.js + NeonDB + ShadCN + Tailwind CSS",
      image: "/heath.png",
      githubLink: "https://github.com/valentino0405/healthify",
      deploymentLink: "https://healthify-valentino.vercel.app"
    },
    {
      id: 2,
      title: "WhatsApp Clone",
      description: "Real-time messaging application with video calling capabilities built using MERN stack and Socket.io",
      technologies: "MERN Stack + Socket.io",
      image: "/whatsapp.png",
      githubLink: "https://github.com/valentino0405/whatsapp-clone",
      deploymentLink: null
    },
    {
      id: 3,
      title: "Fashion MSNIT",
      description: "Modern fashion e-commerce platform with elegant design and seamless user experience",
      technologies: "React + Node.js + MongoDB",
      image: "/fashion.png",
      githubLink: "https://github.com/valentino0405/fashion-msnit",
      deploymentLink: "https://fashion-msnit.vercel.app"
    },
    {
      id: 4,
      title: "Movie Recommendation System",
      description: "AI-powered movie recommendation system using machine learning algorithms",
      technologies: "Python + Machine Learning + Flask",
      image: "/movie.png",
      githubLink: "https://github.com/valentino0405/movie-recommendation",
      deploymentLink: "https://movie-rec-valentino.herokuapp.com"
    },
    {
      id: 5,
      title: "AI Desktop Assistant",
      description: "Desktop Virtual Assistant powered by Python and Gemini Flash 2.0 API for hands-free productivity",
      technologies: "Python + Gemini API + Desktop UI",
      image: "/assistant.png",
      githubLink: "https://github.com/valentino0405/ai-assistant",
      videoLink: "https://drive.google.com/your-video-link"
    },
    {
      id: 6,
      title: "AI Algorithmic Trading",
      description: "Intelligent trading system using AI algorithms for financial market analysis",
      technologies: "Python + AI/ML + Financial APIs",
      image: "/finance.png",
      githubLink: "https://github.com/valentino0405/ai-trading",
      deploymentLink: null
    },
    {
      id: 7,
      title: "LangChain Project",
      description: "Advanced language model application using LangChain framework for intelligent text processing",
      technologies: "Python + LangChain + OpenAI",
      image: "/langchain.png",
      githubLink: "https://github.com/valentino0405/langchain-project",
      deploymentLink: null
    }
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
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
              My Projects
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in full-stack development, AI, and modern web technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Project Image */}
                <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center">
                  <div className="text-white/50 text-sm">
                    {project.image}
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-purple-300 font-medium">
                    {project.technologies}
                  </p>
                  
                  <p className="text-white/70 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      GitHub
                    </a>
                    
                    {project.deploymentLink && (
                      <a
                        href={project.deploymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                      >
                        Live Demo
                      </a>
                    )}
                    
                    {project.videoLink && (
                      <a
                        href={project.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                      >
                        Video Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
