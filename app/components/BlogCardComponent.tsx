import Image from "next/image";
import React from "react";
import RightArrow from "@/public/icons/arrow-right-line.svg";
import Link from "next/link";

interface BlogCardProps {
  img: string;
  tag: string;
  title: string;
  description: string;
  link: string;
}

const BlogCardComponent: React.FC<BlogCardProps> = ({
  img,
  tag,
  title,
  description,
  link,
}) => {
  return (
    <div className="shadow-subtle w-[340px] overflow-hidden rounded-lg bg-white">
      <Image
        src={img}
        alt={title}
        width={340}
        height={288}
        className="object-cover"
        style={{ height: "288px", width: "100%" }}
      />

      <div className="flex flex-col gap-3 px-4 py-6" id="content">
        <div id="header" className="flex flex-col gap-2">
          <Badge>{tag}</Badge>
          <h1 className="text-lg leading-7 font-semibold text-neutral-900">
            {title}
          </h1>
        </div>
        <div id="text" className="flex flex-col gap-6">
          <p className="text-base leading-6 font-medium text-neutral-600">
            {description}
          </p>
          <Button link={link} />
        </div>
      </div>
    </div>
  );
};

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex w-fit items-center justify-center rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-center text-sm leading-5 text-green-700">
      {children}
    </div>
  );
};

const Button: React.FC<{ link: string; disabled?: boolean }> = ({
  link,
  disabled = false,
}) => {
  return disabled ? (
    <span className="flex w-fit items-center gap-1.5 rounded text-base leading-6 font-medium text-gray-400 cursor-not-allowed">
      Read more
      <Image src={RightArrow} alt="Right Arrow" className="size-5 opacity-70" />
    </span>
  ) : (
    <Link
      href={link}
      className="flex w-fit cursor-pointer items-center justify-center gap-1.5 rounded text-base leading-6 font-medium text-indigo-700 hover:text-indigo-800 focus:shadow-[0_0_0_4px_rgba(68,76,231,.12)] focus:outline-none"
    >
      Read more
      <Image src={RightArrow} alt="Right Arrow" className="size-5" />
    </Link>
  );
};

export default BlogCardComponent;
