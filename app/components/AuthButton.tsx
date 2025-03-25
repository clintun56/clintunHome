'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { FaGoogle, FaSignOutAlt, FaUserPlus, FaSignInAlt, FaFacebookF } from 'react-icons/fa';
import Link from "next/link";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-400
          shadow-lg shadow-gray-500/20"></div>
      </div>
    );
  }

  if (session) {
    return (
      <div className="flex flex-col items-center gap-4 p-6 
        bg-gray-900/95 backdrop-blur-md 
        rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 
        border border-gray-800/50 hover:border-gray-700/50 
        group">
        {session.user?.image ? (
          <div className="relative transform group-hover:scale-110 transition-all duration-300">
            <Image
              src={session.user.image}
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full ring-4 ring-gray-700 p-1 
                transition-all duration-300 group-hover:ring-gray-600
                shadow-lg shadow-black/20"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 
              rounded-full border-2 border-gray-900 
              animate-pulse"></div>
          </div>
        ) : (
          <UserCircleIcon className="w-20 h-20 text-gray-400 
            transition-all duration-300 group-hover:text-gray-300 
            transform group-hover:scale-110" />
        )}
        <p className="font-semibold text-lg text-gray-300
          group-hover:text-white transition-colors duration-300">
          {session.user?.name}
        </p>
        <button
          onClick={() => signOut()}
          className="flex items-center gap-2 rounded-full 
            bg-gradient-to-r from-red-600 to-red-700 
            hover:from-red-700 hover:to-red-800 
            text-white px-6 py-2.5 
            transition-all duration-300 
            shadow-lg hover:shadow-red-900/50 
            transform hover:-translate-y-0.5 hover:scale-105
            border border-red-500/20 hover:border-red-400/50"
        >
          <FaSignOutAlt className="text-xl group-hover:rotate-180 transition-transform duration-300" />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 p-2">
      <button
        onClick={() => signIn("google")}
        className="flex items-center justify-center gap-2 rounded-full 
          bg-gradient-to-r from-gray-800 to-gray-900 
          hover:from-gray-900 hover:to-black 
          text-white px-6 py-2.5 
          transition-all duration-500 
          shadow-lg hover:shadow-black/50 
          transform hover:-translate-y-0.5 hover:scale-105
          border border-gray-700/50 hover:border-gray-600/50"
      >
        <FaGoogle className="text-xl animate-bounce" />
        <span className="font-medium">Sign in with Google</span>
      </button>

      <button
        onClick={() => signIn("facebook")}
        className="flex items-center justify-center gap-2 rounded-full 
          bg-gradient-to-r from-gray-800 to-gray-900 
          hover:from-gray-900 hover:to-black 
          text-white px-6 py-2.5 
          transition-all duration-500 
          shadow-lg hover:shadow-black/50 
          transform hover:-translate-y-0.5 hover:scale-105
          border border-gray-700/50 hover:border-gray-600/50"
      >
        <FaFacebookF className="text-xl animate-pulse" />
        <span className="font-medium">Sign in with Facebook</span>
      </button>

      <Link
        href="/auth/signin"
        className="flex items-center justify-center gap-2 rounded-full 
          bg-gradient-to-r from-gray-800 to-gray-900 
          hover:from-gray-900 hover:to-black 
          text-white px-6 py-2.5 
          transition-all duration-500 
          shadow-lg hover:shadow-black/50 
          transform hover:-translate-y-0.5 hover:scale-105
          border border-gray-700/50 hover:border-gray-600/50"
      >
        <FaSignInAlt className="text-xl animate-pulse" />
        <span className="font-medium">Sign in with Email</span>
      </Link>

      <Link
        href="/auth/signup"
        className="flex items-center justify-center gap-2 rounded-full 
          bg-gradient-to-r from-gray-800 to-gray-900 
          hover:from-gray-900 hover:to-black 
          text-white px-6 py-2.5 
          transition-all duration-500 
          shadow-lg hover:shadow-black/50 
          transform hover:-translate-y-0.5 hover:scale-105
          border border-gray-700/50 hover:border-gray-600/50"
      >
        <FaUserPlus className="text-xl animate-bounce" />
        <span className="font-medium">Sign Up</span>
      </Link>
    </div>
  );
}