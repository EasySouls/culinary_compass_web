import { socials } from "@/constants";
import vercel from "public/vercel.svg";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className='w-screen p-8'>
      <div className=''></div>
      <div className='flex w-full flex-row justify-between items-center'>
        <div className='w-1/6'>
          <Image src={vercel} alt='Logo' width={120} />
        </div>
        <div className='text-center w-2/3'>
          2023 Culinary Compass. All rights reserved
        </div>
        <div className='flex flex-row items-center flex-wrap w-1/6'>
          {socials.map((link) => (
            <Link
              target='_blank'
              key={link.title}
              href={link.url}
              className='mx-2 w-12 h-12'
            >
              <Image
                src={link.image}
                alt={link.title}
                width={40}
                height={40}
                className='object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
