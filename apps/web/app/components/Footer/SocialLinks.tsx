import Link from 'next/link';
import { Youtube, Twitter, Facebook, Instagram } from 'lucide-react';

export const SocialLinks = () => {
  const socialLinks = [
    { icon: Youtube, href: 'https://youtube.com/trtfrancais', label: 'Youtube' },
    { icon: Twitter, href: 'https://twitter.com/trtfrancais', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/trtfrancais', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/trtfrancais', label: 'Instagram' },
  ];

  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#00A8E1] transition-colors"
          aria-label={social.label}
        >
          <social.icon className="w-6 h-6" />
        </Link>
      ))}
    </div>
  );
}; 