import { Content } from '@/types/content';
import { LatestNewsCard } from './LatestNewsCard';

interface LatestNewsSectionProps {
  articles: Content[];
}

export const LatestNewsSection = ({ articles }: LatestNewsSectionProps) => {
  if (!articles.length) return null;

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">Dernières actualités</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <LatestNewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}; 