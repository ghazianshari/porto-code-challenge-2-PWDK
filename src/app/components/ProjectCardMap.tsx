import { projects } from "@/contents/projects";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type ProjectCardMapProps = {
  start: number;
  end: number;
};

const handleCardAnimation = (index: number) => {
  if (index === 0) return "fade-right";
  if (index === 1) return "zoom-in";
  if (index === 2) return "fade-left";
  return "fade-up";
};

const ProjectCardMap = ({ start, end }: ProjectCardMapProps) => {
  return (
    <>
      {projects
        .map((project, index) => (
          <div
            key={project.title}
            data-aos={handleCardAnimation(index)}
            data-aos-delay={index * 250}
            className="h-full"
          >
            <motion.article
              className="dark:bg-dark/50 h-full rounded-lg bg-white p-6 shadow-md"
              variants={fadeInUp}
              // {...cardHoverSmall}
            >
              <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <motion.h3
                className="mb-2 cursor-pointer text-xl font-semibold"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link target="_blank" href={project.link}>
                  {project.title}
                </Link>
              </motion.h3>
              <motion.p
                className="mb-4 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>
              <motion.div
                className="mb-4 flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary flex items-center gap-2 transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="h-5 w-5" />
                  <span>Code</span>
                </motion.a>
                <motion.div
                  // href={`/projects/${project.slug}`}
                  // rel="noopener noreferrer"
                  className="text-secondary hover:text-primary flex items-center gap-2 transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="h-5 w-5" />
                  <Link href={project.link} target="_blank">
                    Visit
                  </Link>
                </motion.div>
              </motion.div>
            </motion.article>
          </div>
        ))
        .slice(start, end)}
    </>
  );
};

export default ProjectCardMap;
