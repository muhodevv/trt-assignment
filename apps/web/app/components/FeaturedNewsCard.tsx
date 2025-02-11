import Image from 'next/image';
import Link from 'next/link';
import { Content } from '@/types/content';

interface FeaturedNewsCardProps {
  article: Content;
}

export const FeaturedNewsCard = ({ article }: FeaturedNewsCardProps) => {
  return (
    <Link href={article.path} className="group flex items-center gap-4 p-4 hover:bg-gray-900 transition-colors">
      <div className="relative w-24 h-24 flex-shrink-0">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover rounded"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-base font-medium text-white group-hover:text-[#00A8E1] transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-gray-400 mt-1 line-clamp-2">
          {article.description}
        </p>
      </div>
    </Link>
  );
}; 