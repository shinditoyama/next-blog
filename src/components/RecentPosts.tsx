"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RecentPostsCard } from "./RecentPostsCard";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

export function RecentPosts({ posts }: { posts: [IPostNode] }) {
  const customLeftArrow = (
    <div className="absolute left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full transition-all duration-300 w-12 hover:w-14">
      <ArrowLeft color="white" className="w-full" />
    </div>
  );

  const customRightArrow = (
    <div className="absolute right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full transition-all duration-300 w-12 hover:w-14">
      <ArrowRight color="white" className="w-full" />
    </div>
  );

  return (
    <Carousel
      infinite
      customLeftArrow={customLeftArrow}
      customRightArrow={customRightArrow}
      responsive={responsive}
      itemClass="px-2"
    >
      {posts.map((post, index) => (
        <RecentPostsCard key={index} post={post.node} />
      ))}
    </Carousel>
  );
}
