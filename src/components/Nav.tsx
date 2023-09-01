"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "public/vercel.svg";
import profileIcon from "public/profile_icon.svg";
import { useState, useEffect } from "react";
import {
  signIn,
  signOut,
  useSession,
  getProviders,
  ClientSafeProvider,
} from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState<ClientSafeProvider>();
  const [toggleDropdown, setToggleDropdown] = useState(true);

  //   useEffect(() => {
  //     const _setProviders = async () => {
  //       const response = await getProviders();
  //       setProviders(response);
  //     };

  //     _setProviders();
  //   }, []);

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
            <Link href='/recipes/new' className='black_btn'>
              Upload new recipe
            </Link>

            <button
              type='button'
              className='outlined_btn'
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign Out
            </button>

            <Link href='/profile'>
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
                  className='black_btn'
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
              <div className='dropdown'>
                <Link
                  href='/profile'
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
                  className='black_btn'
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
