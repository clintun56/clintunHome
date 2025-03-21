import AuthSection from './components/AuthSection';
import Image from "next/image";
import './animations.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <header className="w-full">
          <nav className="container mx-auto flex justify-between items-center">
            <Image
              className="dark:invert animate-fadeIn"
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
            <AuthSection />
          </nav>
        </header>

        <main className="container mx-auto flex flex-col gap-[32px] items-center">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl w-full animate-fadeIn">
            <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Welcome to Next.js
            </h1>
            
            <ol className="list-inside list-decimal space-y-4 text-gray-700 dark:text-gray-300">
              <li className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                Get started by editing{" "}
                <code className="bg-black/[.05] dark:bg-white/[.06] px-2 py-1 rounded-md font-mono">
                  app/page.tsx
                </code>
              </li>
              <li className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                Save and see your changes instantly.
              </li>
            </ol>

            <div className="flex gap-4 items-center justify-center mt-8 flex-wrap">
              <a
                className="transform hover:scale-105 transition-all duration-200 rounded-full px-6 py-3 bg-blue-600 text-white flex items-center gap-2 hover:bg-blue-700"
                href="https://vercel.com/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/vercel.svg"
                  alt="Vercel"
                  width={20}
                  height={20}
                  className="dark:invert"
                />
                Deploy Now
              </a>
              <a
                className="transform hover:scale-105 transition-all duration-200 rounded-full px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 flex items-center gap-2"
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </div>
          </div>
        </main>

        <footer className="container mx-auto flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </div>
  );
}
