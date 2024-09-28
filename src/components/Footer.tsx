import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-900 flex items-center justify-center text-white py-6">
      <div className="container mx-auto">
        <Link href="#" className=" flex items-center justify-center text-lg font-bold hover:text-gray-400">M Y</Link><br />

        <div className="space-x-4 mb-4 flex items-center justify-center">
          <Link href="#home" className="hover:text-gray-400">Home</Link>
          <Link href="#about" className="hover:text-gray-400">About</Link>
          <Link href="#skills" className="hover:text-gray-400">Skills</Link>
          <Link href="#projects" className="hover:text-gray-400">Projects</Link>
          <Link href="#contact" className="hover:text-gray-400">Contact</Link>
        </div>
        <p className=" flex items-center justify-center text-sm text-gray-500">&copy; 2024 Muhammad Yousuf. All rights reserved.</p>
      </div>
    </footer>
  );
}
