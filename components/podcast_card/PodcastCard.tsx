import { PodcastDetail } from "@/constants/podcast_data";
import Image from "next/image";
import React from "react";

interface PodcastCardProps {
  podcast: PodcastDetail;
}

const PodcastCard: React.FC<PodcastCardProps> = ({ podcast }) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image
          src={podcast.imgURL}
          width={174}
          height={174}
          alt={podcast.title}
          className="aspect-square h-fit w-full rounded-xl "
        />
        <div className="flex flex-col">
          <h1 className="text-16 font-bold text-white-1 truncate">
            {podcast.title}
          </h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            {podcast.description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
