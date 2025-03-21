'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { FaGoogle, FaSignOutAlt } from 'react-icons/fa';

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (session) {
    return (
      <div className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all hover:shadow-xl">
        {session.user?.image ? (
          <div className="relative">
            <Image
              src={session.user.image}
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full ring-4 ring-blue-500 p-1"
            />
            <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
          </div>
        ) : (
          <UserCircleIcon className="w-20 h-20 text-blue-500" />
        )}
        <p className="font-semibold text-lg text-gray-800 dark:text-white">
          {session.user?.name}
        </p>
        <button
          onClick={() => signOut()}
          className="flex items-center gap-2 rounded-full bg-red-500 hover:bg-red-600 text-white px-6 py-2 transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          <FaSignOutAlt />
          ออกจากระบบ
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 
        hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 
        transition-all duration-300 shadow-lg hover:shadow-blue-500/50 
        transform hover:scale-105"
    >
      <FaGoogle className="text-xl text-white group-hover:animate-pulse" />
      <span className="font-medium">เข้าสู่ระบบด้วย Google</span>
    </button>
  );
}