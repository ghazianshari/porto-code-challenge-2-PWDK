import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="dark:bg-dark border-t border-gray-200 bg-white dark:border-gray-800">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-primary text-xl font-bold">
              Tukiman&trade;
            </Link>
            <p className="text-secondary mt-2 text-sm">
              © {new Date().getFullYear()} Tukiman.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-6 w-6" />
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaTwitter className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <FaLinkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
