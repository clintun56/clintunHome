'use client';

import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { FaGoogle, FaEnvelope, FaLock, FaFacebookF, FaArrowLeft } from 'react-icons/fa';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false
      });

      if (result?.error) {
        setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
      } else {
        window.location.href = "/";
      }
    } catch (err) {
      setError("เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
     <Link
  href="/"
  className="absolute top-6 left-6 flex items-center gap-3 px-4 py-2.5
    bg-gray-900/90 backdrop-blur-md rounded-full
    border border-gray-800/50 hover:border-gray-700/50
    shadow-lg hover:shadow-xl shadow-black/20 hover:shadow-black/30
    text-gray-300 hover:text-white
    transform hover:-translate-x-2
    transition-all duration-500 ease-out group
    hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900"
>
  <FaArrowLeft className="text-lg relative
    group-hover:-translate-x-1 
    transition-transform duration-500
    after:content-[''] after:absolute after:inset-0
    after:bg-white/10 after:rounded-full after:scale-0
    group-hover:after:scale-150 after:transition-transform after:duration-500" 
  />
 
</Link>

      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl w-96 
        border border-gray-100 hover:border-gray-200 transition-all duration-300">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center 
          bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          เข้าสู่ระบบ
        </h2>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-3 
            rounded-lg mb-4 text-sm animate-pulse">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-gray-700 block mb-2 text-sm font-medium">อีเมล</label>
            <div className="relative group">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400 
                group-hover:text-blue-500 transition-colors duration-300" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full pl-10 p-2.5 rounded-lg bg-gray-50 text-gray-800 
                  border border-gray-200 focus:border-blue-500 focus:ring-4 
                  focus:ring-blue-500/20 hover:border-gray-300 transition-all"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="text-gray-700 block mb-2 text-sm font-medium">รหัสผ่าน</label>
            <div className="relative group">
              <FaLock className="absolute left-3 top-3 text-gray-400 
                group-hover:text-blue-500 transition-colors duration-300" />
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full pl-10 p-2.5 rounded-lg bg-gray-50 text-gray-800 
                  border border-gray-200 focus:border-blue-500 focus:ring-4 
                  focus:ring-blue-500/20 hover:border-gray-300 transition-all"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 
              hover:from-blue-600 hover:to-purple-600 text-white py-2.5 rounded-lg 
              transition-all duration-300 disabled:opacity-50 font-medium 
              transform hover:scale-[1.02] hover:-translate-y-0.5
              shadow hover:shadow-lg"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                <span>กำลังเข้าสู่ระบบ...</span>
              </div>
            ) : (
              "เข้าสู่ระบบ"
            )}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">หรือ</span>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <button
              onClick={() => signIn("google")}
              className="w-full flex items-center justify-center gap-2 
                bg-gradient-to-r from-[#4285f4] to-[#34a853] 
                hover:from-[#34a853] hover:to-[#4285f4] 
                text-white py-2.5 rounded-lg transition-all duration-300 
                shadow hover:shadow-lg transform hover:scale-[1.02] hover:-translate-y-0.5"
            >
              <FaGoogle className="text-xl animate-bounce" />
              <span className="font-medium">เข้าสู่ระบบด้วย Google</span>
            </button>

            <button
              onClick={() => signIn("facebook")}
              className="w-full flex items-center justify-center gap-2 
                bg-gradient-to-r from-[#1877F2] to-[#3b5998] 
                hover:from-[#0d6efd] hover:to-[#324d8a] 
                text-white py-2.5 rounded-lg transition-all duration-300 
                shadow hover:shadow-lg transform hover:scale-[1.02] hover:-translate-y-0.5"
            >
              <FaFacebookF className="text-xl animate-pulse" />
              <span className="font-medium">เข้าสู่ระบบด้วย Facebook</span>
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-600 text-sm">
          ยังไม่มีบัญชี?{" "}
          <Link href="/auth/signup" 
            className="text-blue-500 hover:text-blue-600 font-medium hover:underline">
            สมัครสมาชิก
          </Link>
        </div>
      </div>
    </div>
  );
}