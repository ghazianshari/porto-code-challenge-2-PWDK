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
            <a
              href="https://github.com/"
              target="_blank"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
