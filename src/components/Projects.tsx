import Link from 'next/link';
import Image from 'next/image';

type Project = {
  title: string;
  imageUrl: string;
  link: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Share Sphere",
    imageUrl: "/1.png",
    link: "https://my-share-sphere.vercel.app/",
    description: "Landing Page for a Mobile App | Figma Design to responsive Website",
  },
  {
    title: "Dynamic Resume Builder",
    imageUrl: "/2.png",
    link: "https://static-interactive-resmue.vercel.app/",
    description: "Build Your Editable and Customizable Resume with just one click",
  },
  {
    title: "Project 3",
    imageUrl: "https://via.placeholder.com/300",
    link: "https://example.com/project3",
    description: "Another project",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center bg-gradient-to-r from-black via-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mt-8 mb-8">
          My Projects
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-8 sm:p-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
              >
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <div>
                    {/* Set width and height properties directly on the Image component */}
                    <div className="relative w-[350px] h-[200px]">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="cursor-pointer"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold cursor-pointer text-black">
                        {project.title}
                      </h3>
                      <p className="text-m text-black font-semibold">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
