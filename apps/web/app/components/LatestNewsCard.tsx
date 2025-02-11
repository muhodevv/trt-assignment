import Image from 'next/image';
import Link from 'next/link';
import { Content } from '@/types/content';

interface LatestNewsCardProps {
  article: Content;
}

export const LatestNewsCard = ({ article }: LatestNewsCardProps) => {
  return (
    <Link href={article.path} className="group block bg-[#1A1A1A] rounded-lg overflow-hidden">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-white group-hover:text-[#00A8E1] transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-gray-400 line-clamp-2">
          {article.description}
        </p>
        <div className="mt-3 flex items-center text-sm text-gray-500">
          <time dateTime={article.published_date}>
            {new Date(article.published_date).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </time>
        </div>
      </div>
    </Link>
  );
}; 