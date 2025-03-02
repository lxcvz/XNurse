import Link from "next/link";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="border-t w-full">
      <div className="max-w-7xl mx-auto py-4 px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <nav
            className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0"
            aria-label="Footer"
          >
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Início
            </Link>
            <Link
              href="/turnos"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Turnos disponíveis
            </Link>
          </nav>
          <div className="flex justify-center space-x-6">
            <Link
              href="https://www.linkedin.com/in/lxcvz"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
            >
              <span className="sr-only">Linkedin</span>
              <FaLinkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/lxcvz"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
            >
              <span className="sr-only">Github</span>
              <FaGithubAlt className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-gray-400 font-staatliches">
          &copy; {new Date().getFullYear()} XNurse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
