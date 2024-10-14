import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SocialMediaBar: React.FC = () => {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-white shadow-lg rounded-l-lg">
      <ul className="flex flex-col items-center space-y-6 p-3 ">
        <li>
          <Link href="https://www.linkedin.com/in/MYousuf-codes" target="_blank" rel="noopener noreferrer">
            <Image src="/1.png" alt="Visit LinkedIn Profile" width={40} height={40} className="hover:scale-110 transition-transform duration-200" />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/MYousuf-codes" target="_blank" rel="noopener noreferrer">
            <Image src="/2.png" alt="Visit GitHub Profile" width={40} height={40} className="hover:scale-110 transition-transform duration-200" />
          </Link>
        </li>
        <li>
          <Link href="https://x.com/MYousuf-codes" target="_blank" rel="noopener noreferrer">
            <Image src="/3.png" alt="Visit X Profile" width={40} height={40} className="hover:scale-110 transition-transform duration-200" />
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/MuhammmadYousufMYM" target="_blank" rel="noopener noreferrer">
            <Image src="/4.png" alt="Visit Facebook Profile" width={40} height={40} className="hover:scale-110 transition-transform duration-200" />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/m_yousuf575" target="_blank" rel="noopener noreferrer">
            <Image src="/5.png" alt="Visit Instagram Profile" width={40} height={40} className="hover:scale-110 transition-transform duration-200" />
          </Link>
        </li>
        <li>
          <Link href="https://wa.me/+923012381884" target="_blank" rel="noopener noreferrer">
            <Image src="/6.png" alt="Message on WhatsApp" width={40} height={40} className="hover:scale-110 transition-transform duration-200" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaBar;
