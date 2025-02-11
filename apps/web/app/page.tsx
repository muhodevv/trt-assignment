import { ContentService } from '@/services/content.service';
import { FeaturedSection } from './components/FeaturedSection';
import { LatestNewsSection } from './components/LatestNewsSection';
import { VideoSection } from './components/VideoSection';
import { InfographieSection } from './components/InfographieSection';

export default async function Home() {
  const { results } = await ContentService.getContents({ language: 'fr' });
  
  const headlineArticle = results.find((article) => article.section === 'headline');
  const featuredArticles = results.filter((article) => article.section === 'featured');
  const latestArticles = results.filter((article) => article.section === 'news');
  const videoArticles = results.filter((article) => article.type === 'video');
  const infographieArticles = results.filter((article) => article.type === 'infographie');

  return (
    <main>
      <FeaturedSection
        headlineArticle={headlineArticle}
        featuredArticles={featuredArticles}
      />
      <LatestNewsSection articles={latestArticles} />
      <VideoSection videos={videoArticles} />
      <InfographieSection articles={infographieArticles} />
    </main>
  );
}
