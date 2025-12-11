import React from "react";
import { Noto_Sans } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import ProfileImage from "@/public/profile-card/profile.png";
import Link from "next/link";
import GitHubIcon from "@/public/icons/github-fill.svg";
import LinkedInIcon from "@/public/icons/linkedin-box-fill.svg";
import InstagramIcon from "@/public/icons/instagram-fill.svg";
import TwitterIcon from "@/public/icons/twitter-x-fill.svg";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const data = {
  img: ProfileImage,
  name: "Sarah Dole",
  position: "Front End Engineer",
  company: "Microsoft",
  about:
    "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
  email: "mailto:anrpunzalan@gmail.com",
  github: "https://github.com/PUP-Punzalan",
  linkedin: "https://www.linkedin.com/in/anrpunzalan",
  instagram: "https://www.instagram.com/anrpunzalan",
  twitter: "https://x.com/PixelreiART",
};

const socials = [
  { icon: GitHubIcon, link: data.github },
  { icon: LinkedInIcon, link: data.linkedin },
  { icon: InstagramIcon, link: data.instagram },
  { icon: TwitterIcon, link: data.twitter },
];

const ProfileCard = () => {
  return (
    <div
      className={`${notoSans.className} bg-gradient flex min-h-screen flex-col items-center pt-[200px]`}
    >
      <ProfileCardComponent data={data} />
    </div>
  );
};

interface ProfileCardData {
  img: StaticImageData;
  name: string;
  position: string;
  company: string;
  about: string;
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  twitter: string;
}

const ProfileCardComponent: React.FC<{ data: ProfileCardData }> = ({
  data,
}) => {
  return (
    <div
      className="text-primary shadow-subtle flex w-[340px] flex-col gap-10 overflow-hidden rounded-lg bg-white px-4 py-6"
      id="profile-card"
    >
      <div className="flex flex-col items-center gap-6" id="details">
        <div className="" id="profile-img">
          <Image
            src={data.img}
            alt={data.name}
            className="size-16 aspect-square"
          />
        </div>
        <div
          className="flex flex-col gap-1 items-center justify-center"
          id="name-username"
        >
          <p className="text-xl font-medium text-center">{data.name}</p>
          <p className="text-sm text-secondary text-center">
            {data.position} @ {data.company}
          </p>
        </div>
        <p className="text-secondary text-base text-center">{data.about}</p>
      </div>
      <div className="flex flex-col gap-6" id="actions">
        <Button link={data.email} />
        <div className="flex items-center justify-center gap-4" id="socials">
          {socials.map((social, index) => (
            <ButtonIcon src={social.icon} link={social.link} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Button: React.FC<{ link: string; disabled?: boolean }> = ({
  link,
  disabled = false,
}) => {
  return disabled ? (
    <span className="flex w-fit items-center gap-1.5 rounded text-base leading-6 font-medium text-gray-400 cursor-not-allowed">
      Contact me
    </span>
  ) : (
    <Link
      href={link}
      className="bg-primary flex items-center justify-center gap-1.5 rounded-sm px-4 py-2.5 text-center text-base font-medium text-white"
    >
      Contact me
    </Link>
  );
};

const ButtonIcon = ({ src, link }: { src: StaticImageData; link: string }) => {
  return (
    <a
      href={link}
      className="flex items-center justify-center p-2 cursor-pointer"
      target="_blank"
      rel="noreferrer"
    >
      <Image src={src} alt="social icon" className="" />
    </a>
  );
};

export default ProfileCard;
