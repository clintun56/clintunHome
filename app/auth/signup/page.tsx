'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaUser, FaEnvelope, FaLock, FaShieldAlt } from 'react-icons/fa';

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("รหัสผ่านไม่ตรงกัน");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });

      if (res.ok) {
        router.push('/auth/signin?success=Account created successfully');
      } else {
        const data = await res.json();
        setError(data.message || "เกิดข้อผิดพลาด");
      }
    } catch (err) {
      setError("เกิดข้อผิดพลาดในการสมัครสมาชิก");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl w-96 
        border border-gray-100 hover:border-gray-200 transition-all duration-300">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center 
          bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          สมัครสมาชิก
        </h2>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-3 
            rounded-lg mb-4 text-sm animate-pulse">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-gray-700 block mb-2 text-sm font-medium">ชื่อ</label>
            <div className="relative group">
              <FaUser className="absolute left-3 top-3 text-gray-400 
                group-hover:text-blue-500 transition-colors duration-300" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full pl-10 p-2.5 rounded-lg bg-gray-50 text-gray-800 
                  border border-gray-200 focus:border-blue-500 focus:ring-4 
                  focus:ring-blue-500/20 hover:border-gray-300 transition-all"
                required
              />
            </div>
          </div>

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

          <div>
            <label className="text-gray-700 block mb-2 text-sm font-medium">ยืนยันรหัสผ่าน</label>
            <div className="relative group">
              <FaShieldAlt className="absolute left-3 top-3 text-gray-400 
                group-hover:text-blue-500 transition-colors duration-300" />
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
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
                <div className="animate-spin rounded-full h-5 w-5 
                  border-2 border-white border-t-transparent"></div>
                <span>กำลังสมัครสมาชิก...</span>
              </div>
            ) : (
              "สมัครสมาชิก"
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600 text-sm">
          มีบัญชีอยู่แล้ว?{" "}
          <Link href="/auth/signin" 
            className="text-blue-500 hover:text-blue-600 font-medium hover:underline">
            เข้าสู่ระบบ
          </Link>
        </div>
      </div>
    </div>
  );
}