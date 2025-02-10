import { Search as SearchIcon } from 'lucide-react'

export const Search = () => {
  return (
    <button
      className="p-2 text-white hover:text-[#00A8E1] transition-colors"
      aria-label="Search"
    >
      <SearchIcon size={24} />
    </button>
  )
} 