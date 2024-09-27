export default function Skills() {
    const skills = [
      { name: 'HTML5', logo: 'https://cdn-icons-png.flaticon.com/128/5968/5968267.png' },
      { name: 'CSS3', logo: 'https://cdn-icons-png.flaticon.com/128/5968/5968242.png' },
      { name: 'JavaScript', logo: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png' },
      { name: 'TypeScript', logo: 'https://cdn-icons-png.flaticon.com/128/5968/5968381.png' },
      { name: 'Bootstrap', logo: 'https://cdn-icons-png.flaticon.com/128/5968/5968672.png' },
      { name: 'Tailwind CSS', logo: 'https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png' },
      { name: 'React', logo: 'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png' },
      { name: 'Next.js', logo: 'https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png' },
    ];

    return (
      <section
      id="skills" 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black text-white py-10">
      
      <h2 className="text-4xl font-bold text-center mt-8 mb-8">Skills</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map(skill => (
              <div key={skill.name} className="bg-gray-50 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl flex items-center">
                <img src={skill.logo} alt={`${skill.name} logo`} className=" h-10 w-10 m-10" />
                <p className="text-center text-xl font-semibold text-gray-800">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  