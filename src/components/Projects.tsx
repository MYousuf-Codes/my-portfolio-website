import Link from 'next/link';

const projects = [
  {
    title: "Project 1",
    imageUrl: "https://via.placeholder.com/300",
    link: "https://example.com/project1",
    description: "Hover The Card, project is simply built using HTML and CSS"
  },
  {
    title: "Project 2",
    imageUrl: "https://via.placeholder.com/300",
    link: "https://example.com/project2",
    description: "Another project"
  },
  {
    title: "Project 3",
    imageUrl: "https://via.placeholder.com/300",
    link: "https://example.com/project3",
    description: "Another project"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        
      <h2 className="text-4xl font-bold text-center text-white mt-8 mb-8">My Projects</h2>
        {/* The background card for the entire section */}
        <div className="bg-white shadow-lg rounded-lg p-8 sm:p-12 max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-200 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                <Link href={project.link} passHref>
                  <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover cursor-pointer" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold cursor-pointer text-black">{project.title}</h3>
                    <p className="text-m text-black font-semibold">{project.description}</p>
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
