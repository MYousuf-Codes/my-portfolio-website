import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen p-10 flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mt-8 mb-8">
          About Me
        </h2>
        {/* The card div */}
        <div className="bg-white shadow-lg rounded-lg p-8 sm:p-12 max-w-6xl mx-auto relative">
          {/* Image with shadow */}
          <div className="flex justify-center mb-6">
            <Image
              src="https://static-interactive-resmue.vercel.app/assests/PROFILE.png"
              alt="Profile Picture"
              className="w-48 h-48 object-cover rounded-full shadow-2xl"
              width={192} // Adjust width as needed
              height={192} // Adjust height as needed
            />
          </div>

          <p className="text-lg mb-4">
            Hi there! <br />
            I&apos;m a passionate{" "}
            <span className="text-blue-600 font-semibold">
              Front-End Developer
            </span>{" "}
            👨‍💻 and{" "}
            <span className="text-blue-600 font-semibold">
              Template Designer
            </span>{" "}
            🎨, currently mastering React.js, Next.js, and Tailwind CSS. I
            specialize in building user-friendly websites 🌐 with HTML5, CSS,
            Bootstrap 5, and JavaScript/TypeScript. 💻✨
            <br /> <br />
            I focus on clean, efficient code, and responsive designs that
            enhance user experience. From sleek templates to dynamic components,
            I&apos;m driven by the challenge of turning creative ideas into
            impactful digital experiences and powerful digital solutions. ✨💻
          </p>
          <p className="text-lg">
            I also have a keen interest in{" "}
            <span className="text-blue-600 font-semibold">UX/UI design</span>,
            striving to enhance user experience through intuitive designs.
            I&apos;m always open to connecting with developers, designers, and
            like-minded professionals who are passionate about innovation and
            building great digital products. 🌟
            <br /> <br />
            Are you looking for a front-end developer to create visually
            stunning websites or interfaces? Let&apos;s collaborate and bring
            your ideas to life! 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
