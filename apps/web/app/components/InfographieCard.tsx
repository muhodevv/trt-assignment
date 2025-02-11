import Image from 'next/image';
import Link from 'next/link';
import { Content } from '@/types/content';

interface InfographieCardProps {
  article: Content;
}

export const InfographieCard = ({ article }: InfographieCardProps) => {
  return (
    <Link href={article.path} className="group block">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/90 transition-colors" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="p-4">
            <h3 className="text-lg font-medium text-white group-hover:text-[#00A8E1] transition-colors line-clamp-2">
              {article.title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}; 