import { Logo } from './Logo';
import { SocialLinks } from './SocialLinks';
import Link from 'next/link';

const footerLinks = {
  'Notre équipe': [
    { label: 'Nous contacter', href: '/nous-contacter' },
    { label: 'Qui sommes-nous?', href: '/qui-sommes-nous' },
  ],
  'Mentions Légales': [
    { label: "Conditions d'utilisation", href: '/conditions-utilisation' },
    { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { label: 'Politique relative aux cookies', href: '/politique-cookies' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Copyright */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-gray-400">
              Copyright © {new Date().getFullYear()} TRT Français
            </p>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-medium mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#00A8E1] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Suivez-nous</h3>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}; 