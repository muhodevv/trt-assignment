import Link from 'next/link'

const navigationItems = [
  { label: 'Actualités', href: '/actualites' },
  { label: 'Débats', href: '/debats' },
  { label: 'Société', href: '/societe' },
  { label: 'Sport', href: '/sport' },
  { label: 'Infographie', href: '/infographie' },
  { label: 'Vidéos', href: '/videos' },
]

export const Navigation = () => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-white hover:text-[#00A8E1] transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
} 