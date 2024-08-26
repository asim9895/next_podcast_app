"use client";

import PodcastCard from "@/components/podcast_card/PodcastCard";
import { PodcastDetail, podcast_data } from "@/constants/podcast_data";
import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Home = () => {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap5">
        <h1 className="text-20 font-bold text-white-1 pb-5">
          Trending Podcasts
        </h1>
        {tasks?.map(({ _id, text }: { _id: string; text: string }) => (
          <div key={_id} style={{ color: "white" }}>
            {text}
          </div>
        ))}
        <div className="podcast_grid">
          {podcast_data.map((podcast: PodcastDetail) => {
            return <PodcastCard podcast={podcast} key={podcast.id} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
