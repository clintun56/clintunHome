'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function AuthSection() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex flex-col items-center gap-4">
        <Image
          src={session.user?.image ?? ""}
          alt="โปรไฟล์"
          width={64}
          height={64}
          className="rounded-full"
        />
        <p>สวัสดี, {session.user?.name}</p>
        <button
          onClick={() => signOut()}
          className="rounded-full bg-red-500 text-white px-4 py-2"
        >
          ออกจากระบบ
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="rounded-full bg-blue-500 text-white px-4 py-2 flex items-center gap-2"
    >
      <Image
        src="/google.svg"
        alt="Google logo"
        width={20}
        height={20}
      />
      เข้าสู่ระบบด้วย Google
    </button>
  );
}