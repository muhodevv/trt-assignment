import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { Content } from '@/types/content';

interface VideoCardProps {
  video: Content;
}

export const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <Link href={video.path} className="group block relative">
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg">
        <Image
          src={video.image}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:via-black/50 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#00A8E1]/80 transition-colors">
            <Play className="w-7 h-7 text-white fill-white" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="bg-white p-4 rounded-b-lg">
            <h3 className="text-base font-medium text-gray-900 group-hover:text-[#00A8E1] transition-colors line-clamp-2">
              {video.title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}; 