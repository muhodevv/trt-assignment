import { Content } from '@/types/content';
import { InfographieCard } from './InfographieCard';

interface InfographieSectionProps {
  articles: Content[];
}

export const InfographieSection = ({ articles }: InfographieSectionProps) => {
  if (!articles.length) return null;

  // Limit to 4 articles
  const displayArticles = articles.slice(0, 4);

  return (
    <section className="bg-[#00A8E1] py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">Infographie</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayArticles.map((article) => (
            <InfographieCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}; 