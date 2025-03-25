import AuthButton from './components/AuthButton';
import { BiAperture } from "react-icons/bi";
import { 
  FaDocker, 
  FaGithub, 
  FaPhp, 
  FaCode,
  FaLinkedin,
  FaNode, 
  FaDatabase,
  FaLayerGroup 
} from 'react-icons/fa';
import { 
  SiPrisma, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiMysql, 
  SiPostgresql,
  SiDart,
  SiFlutter 
} from 'react-icons/si';
import './animations.css';

export default function Home() {
  const technologies = [
   
    { icon: <SiNextdotjs className="text-4xl text-black" />, name: "Next.js", description: "React Framework" },
    { icon: <FaNode className="text-4xl text-blue-400" />, name: "Node.js", description: "Node.js lets developers use JavaScript" },
    { icon: <FaPhp className="text-4xl text-purple-600" />, name: "PHP", description: "Backend Development" },
    { icon: <SiJavascript className="text-4xl text-yellow-400" />, name: "JavaScript", description: "Web Development" },
    { icon: <SiTypescript className="text-4xl text-blue-600" />, name: "TypeScript", description: "Type-safe JavaScript" },
    { icon: <FaDocker className="text-4xl text-blue-500" />, name: "Docker", description: "Containerization & Deployment" },
    { icon: <SiPrisma className="text-4xl text-slate-800" />, name: "Prisma", description: "Next-gen ORM for Node.js" },
    { icon: <FaGithub className="text-4xl text-gray-800" />, name: "GitHub", description: "Version Control & CI/CD" },
    { 
      icon: <FaLayerGroup className="text-4xl text-green-600" />, 
      name: "MVC Architecture", 
      description: "Model-View-Controller Pattern" 
    },
    { icon: <SiMysql className="text-4xl text-blue-700" />, name: "MySQL", description: "Relational Database" },
    { icon: <SiPostgresql className="text-4xl text-blue-400" />, name: "PostgreSQL", description: "Advanced SQL Database" },
    { 
      icon: <SiDart className="text-4xl text-blue-500" />, 
      name: "Dart", 
      description: "Modern Programming Language" 
    },
    { 
      icon: <SiFlutter className="text-4xl text-cyan-400" />, 
      name: "Flutter", 
      description: "Cross-Platform Development" 
    },


  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <header className="w-full">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
              <BiAperture className="text-3xl text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Clin Tun</h1>
            </div>
            <AuthButton/>
          </nav>
        </header>

        <main className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Fuเ ตั้นหล่อ Development Solutions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Specializing in Modern Web Technologies & Cloud Infrastructure
          </p>

          {/* Tech Stack Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{tech.icon}</div>
                <h3 className="font-semibold text-gray-800 dark:text-white">{tech.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>

          {/* Projects Section */}
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Docker Microservices</h3>
              <p className="text-gray-600 dark:text-gray-300">Containerized application architecture with Docker and Kubernetes</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Next.js + Prisma App</h3>
              <p className="text-gray-600 dark:text-gray-300">Full-stack TypeScript application with Prisma ORM</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-4">PHP API Gateway</h3>
              <p className="text-gray-600 dark:text-gray-300">Modern PHP microservices with Laravel</p>
            </div>
          </div>
        </main>

        <footer className="w-full text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="text-3xl text-gray-600 hover:text-blue-600 transition-colors">
              <FaGithub />
            </a>
            <a href="#" className="text-3xl text-gray-600 hover:text-blue-600 transition-colors">
              <FaLinkedin />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-300">© 2024 Full Stack Developer. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
