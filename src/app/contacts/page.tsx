export default function Contacts() {
  const contactInfo = [
    {
      type: "Phone",
      value: "9029772251",
      icon: "📞",
      href: "tel:+919029772251",
      display: "+91 9029772251"
    },
    {
      type: "Email",
      value: "gomesvalentino742@gmail.com",
      icon: "📧",
      href: "mailto:gomesvalentino742@gmail.com",
      display: "gomesvalentino742@gmail.com"
    },
    {
      type: "GitHub",
      value: "https://github.com/valentino0405",
      icon: "🐙",
      href: "https://github.com/valentino0405",
      display: "github.com/valentino0405"
    },
    {
      type: "LinkedIn",
      value: "https://www.linkedin.com/in/valentino-gomes-91318423b/",
      icon: "💼",
      href: "https://www.linkedin.com/in/valentino-gomes-91318423b/",
      display: "linkedin.com/in/valentino-gomes"
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
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((contact) => (
              <a
                key={contact.type}
                href={contact.href}
                target={contact.type === "Phone" || contact.type === "Email" ? "_self" : "_blank"}
                rel={contact.type === "Phone" || contact.type === "Email" ? undefined : "noopener noreferrer"}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl block"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                      {contact.type}
                    </h3>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors break-all">
                      {contact.display}
                    </p>
                  </div>
                  <div className="text-white/40 group-hover:text-white/60 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Whether you're looking for a developer to join your team, neeed  help with a project, or want to collaborate on something innovative, 
              I'd love to hear from you. I'm particularly interested in AI, full-stack development, and cutting-edge web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:gomesvalentino742@gmail.com?subject=Let's%20Collaborate&body=Hi%20Valentino,%0A%0AI%20would%20like%20to%20discuss..."
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/valentino-gomes-91318423b/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-white/20 hover:border-white/40 rounded-full font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Response Time */}
          <div className="text-center mt-8">
            <p className="text-white/50 text-sm">
              ⚡ I typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
