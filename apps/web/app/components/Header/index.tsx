import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { Search } from './Search'

export const Header = () => {
  return (
    <header className="bg-[#1A1A1A] border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        <div className="flex items-center space-x-4">
          <Navigation />
          <Search />
        </div>
      </div>
    </header>
  )
}

export * from './Logo'
export * from './Navigation'
export * from './Search' 