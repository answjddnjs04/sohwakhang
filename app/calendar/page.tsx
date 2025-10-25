'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startingDayOfWeek = firstDay.getDay();
  const daysInMonth = lastDay.getDate();

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const days = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

  // 더미 데이터 (10월 기준)
  const dummyPosts = [
    { id: 1, day: 15, title: '카페에서 책 읽기', emoji: '📚', rating: 4 },
    { id: 2, day: 18, title: '반려동물과 산책', emoji: '🐕', rating: 5 },
    { id: 3, day: 22, title: '맛있는 브런치', emoji: '🥐', rating: 4 },
    { id: 4, day: 25, title: '친구와 수다', emoji: '☕', rating: 5 },
    { id: 5, day: 26, title: '아침 조깅', emoji: '🏃', rating: 3 },
  ];

  const getPostsForDay = (day: number) => {
    return dummyPosts.filter(p => p.day === day && month === 9); // 10월 (0-based)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <header className="border-b border-emerald-100 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <span className="text-3xl">🍀</span>
              <h1 className="text-2xl font-bold text-emerald-800">소확행</h1>
            </Link>
            <nav className="flex gap-4">
              <Link 
                href="/calendar" 
                className="rounded-full bg-emerald-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
              >
                나의 캘린더
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-emerald-900 mb-2">나의 행복 캘린더</h2>
            <p className="text-emerald-600">당신이 쌓아온 소소한 행복들을 확인하세요</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <button
                onClick={goToPreviousMonth}
                className="rounded-lg px-4 py-2 text-emerald-700 transition hover:bg-emerald-50 font-semibold"
              >
                ← 이전
              </button>
              <h3 className="text-2xl font-bold text-emerald-900">
                {year}년 {monthNames[month]}
              </h3>
              <button
                onClick={goToNextMonth}
                className="rounded-lg px-4 py-2 text-emerald-700 transition hover:bg-emerald-50 font-semibold"
              >
                다음 →
              </button>
            </div>

            <div className="mb-2 grid grid-cols-7 gap-2">
              {weekDays.map((day, index) => (
                <div
                  key={day}
                  className={`py-2 text-center text-sm font-semibold ${
                    index === 0 ? 'text-red-500' : index === 6 ? 'text-blue-500' : 'text-gray-600'
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => {
                if (day === null) {
                  return <div key={`empty-${index}`} className="aspect-square" />;
                }

                const posts = getPostsForDay(day);
                const today = new Date();
                const isToday = 
                  day === today.getDate() && 
                  month === today.getMonth() && 
                  year === today.getFullYear();

                return (
                  <div
                    key={day}
                    className={`aspect-square rounded-lg border-2 p-2 transition hover:shadow-md cursor-pointer ${
                      isToday 
                        ? 'border-emerald-500 bg-emerald-50' 
                        : 'border-gray-200 bg-white hover:border-emerald-300'
                    }`}
                  >
                    <div className={`text-sm font-semibold ${isToday ? 'text-emerald-700' : 'text-gray-700'}`}>
                      {day}
                    </div>

                    <div className="mt-1 space-y-1">
                      {posts.map(post => (
                        <div
                          key={post.id}
                          className="cursor-pointer rounded bg-emerald-100 px-1 py-0.5 text-xs text-emerald-800 hover:bg-emerald-200 transition"
                          title={post.title}
                        >
                          <div className="flex items-center gap-1">
                            <span>{post.emoji}</span>
                            <div className="flex">
                              {Array.from({ length: post.rating }).map((_, i) => (
                                <span key={i} className="text-xs">🍀</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-lg">🍀</span>
                <span>행복 점수 (1-5개)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded border-2 border-emerald-500 bg-emerald-50"></div>
                <span>오늘</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="rounded-full bg-emerald-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-emerald-700 shadow-lg">
              + 새로운 소확행 추가
            </button>
          </div>
        </div>
      </main>

      <footer className="border-t border-emerald-100 bg-white/80 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-emerald-600">
          <p>© 2025 소확행. 모든 작은 행복을 응원합니다.</p>
        </div>
      </footer>
    </div>
  );
}
