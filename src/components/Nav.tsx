"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "public/vercel.svg";
import profileIcon from "public/profile_icon.svg";
import { useState } from "react";
import { signIn, signOut, ClientSafeProvider } from "next-auth/react";
import CustomButton from "./CustomButton";

const Nav = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState<ClientSafeProvider>();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className='flex justify-between items-center w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image src={logo} alt='Logo' width={120} className='object-contain' />
        <h1 className='text-xl'>Culinary Compass</h1>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/recipes/new' className='black-btn'>
              Upload new recipe
            </Link>

            <button
              type='button'
              className='outlined-btn'
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign Out
            </button>

            <Link href='/dashboard'>
              <Image
                src={profileIcon}
                alt='Profile'
                className='object-contain h-10 w-10 mr-4'
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black-btn'
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {isUserLoggedIn ? (
          <div className='flex'>
            <Image
              src={profileIcon}
              alt='Profile'
              className='object-contain h-10 w-10 mr-4'
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className='absolute w-[12rem] top-10 right-5 p-3 flex flex-col text-right bg-slate-100'>
                <Link
                  href='/dashboard'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/recipes/new'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Upload new recipe
                </Link>
                <CustomButton
                  title='Sign Out'
                  styles='mt-4 w-full black-btn'
                  handleClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  btnType='button'
                />
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: ClientSafeProvider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black-btn'
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
