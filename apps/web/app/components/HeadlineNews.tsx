import Image from 'next/image';
import Link from 'next/link';
import { Content } from '@/types/content';

interface HeadlineNewsProps {
  article: Content;
}

export const HeadlineNews = ({ article }: HeadlineNewsProps) => {
  return (
    <Link href={article.path} className="group relative block aspect-[16/9] w-full overflow-hidden">
      <Image
        src={article.image}
        alt={article.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="inline-block px-2 py-1 bg-[#00A8E1] text-white text-sm font-medium rounded mb-3">
          À la Une
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-[#00A8E1] transition-colors">
          {article.title}
        </h2>
        <p className="mt-2 text-gray-200 line-clamp-2 max-w-3xl">
          {article.description}
        </p>
      </div>
    </Link>
  );
}; 