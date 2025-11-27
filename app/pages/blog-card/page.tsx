import BlogCardComponent from "@/app/components/BlogCardComponent";
import React from "react";
import BlogCardImage from "@/public/blog-card/spacejoy-YqFz7UMm8qE-unsplash.jpg";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const BlogCard = () => {
  const data = {
    img: BlogCardImage.src,
    tag: "Interior",
    title: "Top 5 Living Room Inspirations",
    description:
      "Curated vibrants colors for your living, make it pop & calm in the same time.",
    link: "/",
  };
  return (
    <div
      className={`${notoSans.className} bg-gradient flex min-h-svh flex-col items-center pt-[120px] text-neutral-900`}
    >
      <BlogCardComponent {...data} />
    </div>
  );
};

export default BlogCard;
