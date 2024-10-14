import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <Link href="#" className="text-lg font-bold hover:text-gray-400">M Y</Link>
        <br />
        
        <div className="space-x-4 my-4">
          <Link href="#home" className="hover:text-gray-400">Home</Link>
          <Link href="#about" className="hover:text-gray-400">About</Link>
          <Link href="#skills" className="hover:text-gray-400">Skills</Link>
          <Link href="#projects" className="hover:text-gray-400">Projects</Link>
          <Link href="#contact" className="hover:text-gray-400">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 my-4">
          <Link href="https://www.linkedin.com/in/MYousuf-codes" target="_blank" rel="noopener noreferrer">
            <Image src="/1.png" alt="LinkedIn" width={40} height={40} className="hover:scale-110 transition-transform duration-200" />
          </Link>
          <Link href="https://github.com/MYousuf-codes" target="_blank" rel="noopener noreferrer">
            <Image src="/2.png" alt="GitHub" width={40} height={40} className="hover:scale-110 transition-transform duration-200" />
          </Link>
          <Link href="https://x.com/MYousuf-codes" target="_blank" rel="noopener noreferrer">
            <Image src="/3.png" alt="X" width={40} height={40} className="hover:scale-110 transition-transform duration-200" />
          </Link>
          <Link href="https://www.facebook.com/MuhammmadYousufMYM" target="_blank" rel="noopener noreferrer">
            <Image src="/4.png" alt="Facebook" width={40} height={40} className="hover:scale-110 transition-transform duration-200" />
          </Link>
          <Link href="https://www.instagram.com/m_yousuf575" target="_blank" rel="noopener noreferrer">
            <Image src="/5.png" alt="Instagram" width={40} height={40} className="hover:scale-110 transition-transform duration-200" />
          </Link>
          <Link href="https://wa.me/+923012381884" target="_blank" rel="noopener noreferrer">
            <Image src="/6.png" alt="WhatsApp" width={40} height={40} className="hover:scale-110 transition-transform duration-200" />
          </Link>
        </div>

        <p className="text-sm text-gray-500">&copy; 2024 Muhammad Yousuf. All rights reserved.</p>
      </div>
    </footer>
  );
}
