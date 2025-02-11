import { Content } from '@/types/content';
import { HeadlineNews } from './HeadlineNews';
import { FeaturedNewsCard } from './FeaturedNewsCard';

interface FeaturedSectionProps {
  headlineArticle?: Content;
  featuredArticles: Content[];
}

export const FeaturedSection = ({
  headlineArticle,
  featuredArticles,
}: FeaturedSectionProps) => {
  if (!headlineArticle) return null;

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <HeadlineNews article={headlineArticle} />
        </div>
        <div className="bg-[#1A1A1A] rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-800">
            <h2 className="text-xl font-bold text-white">Notre sélection</h2>
          </div>
          <div className="divide-y divide-gray-800">
            {featuredArticles.map((article) => (
              <FeaturedNewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 