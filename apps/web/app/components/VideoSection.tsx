import { Content } from '@/types/content';
import { VideoCard } from './VideoCard';

interface VideoSectionProps {
  videos: Content[];
}

export const VideoSection = ({ videos }: VideoSectionProps) => {
  if (!videos.length) return null;

  // Limit to 5 videos
  const displayVideos = videos.slice(0, 5);

  return (
    <section className="bg-[#00A8E1] py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">Vidéos</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {displayVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}; 