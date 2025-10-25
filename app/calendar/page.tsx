'use client';
import { useState } from 'react';
import Link from 'next/link';
interface HappinessPost {
id: number;day: number;title: string;emoji: string;rating: number;content: string;image?: string;hashtags: string[];
}
export default function CalendarPage() {
const [currentDate, setCurrentDate] = useState(new Date());
const [selectedDay, setSelectedDay] = useState<number | null>(null);
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const firstDay = new Date(year, month, 1);
const lastDay = new Date(year, month + 1, 0);
const startingDayOfWeek = firstDay.getDay();
const daysInMonth = lastDay.getDate();
const goToPreviousMonth = () => {setCurrentDate(new Date(year, month - 1, 1));setSelectedDay(null);};
const goToNextMonth = () => {setCurrentDate(new Date(year, month + 1, 1));setSelectedDay(null);};
const days = [];
for (let i = 0; i < startingDayOfWeek; i++) {days.push(null);}
for (let day = 1; day <= daysInMonth; day++) {days.push(day);}
const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
const dummyPosts: HappinessPost[] = [
{id:1,day:15,title:'카페에서 책 읽기',emoji:'📚',rating:4,content:'오늘 동네 카페에서 따뜻한 라떼와 함께 책을 읽었어요. 창밖으로 보이는 가을 풍경이 너무 좋았습니다.',image:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',hashtags:['#카페','#독서','#힐링']},
{id:2,day:18,title:'반려동물과 산책',emoji:'🐕',rating:5,content:'강아지와 함께 공원을 산책했어요! 날씨도 좋고 강아지가 너무 좋아해서 행복했습니다',image:'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',hashtags:['#반려동물','#산책','#공원']},
{id:3,day:22,title:'맛있는 브런치',emoji:'🥐',rating:4,content:'주말 아침, 좋아하는 브런치 카페에서 여유로운 시간을 보냈어요. 크루아상이 정말 맛있었습니다!',image:'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800',hashtags:['#브런치','#주말','#맛집']},
];
const getPostsForDay = (day: number) => {return dummyPosts.filter(p => p.day === day && month === 9);};
const selectedPosts = selectedDay ? getPostsForDay(selectedDay) : [];
return (
<div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
<header className="border-b border-emerald-100 bg-white/80 backdrop-blur-sm"><div className="container mx-auto px-4 py-4"><div className="flex items-center justify-between"><Link href="/" className="flex items-center gap-2 hover:opacity-80 transition"><span className="text-3xl">🍀</span><h1 className="text-2xl font-bold text-emerald-800">소확행</h1></Link></div></div></header>
<main className="container mx-auto px-4 py-8"><div className="mb-6 text-center"><h2 className="text-3xl font-bold text-emerald-900 mb-2">나의 행복 캘린더</h2><p className="text-emerald-600">날짜를 클릭하여 소확행을 확인하세요</p></div>
<div className="flex gap-6">
<div className={selectedDay?'w-2/3 transition-all duration-300':'w-full transition-all duration-300'}><div className="rounded-2xl bg-white p-6 shadow-lg"><div className="mb-6 flex items-center justify-between"><button onClick={goToPreviousMonth} className="rounded-lg px-4 py-2 text-emerald-700 transition hover:bg-emerald-50 font-semibold">← 이전</button><h3 className="text-2xl font-bold text-emerald-900">{year}년 {monthNames[month]}</h3><button onClick={goToNextMonth} className="rounded-lg px-4 py-2 text-emerald-700 transition hover:bg-emerald-50 font-semibold">다음 →</button></div>
<div className="mb-2 grid grid-cols-7 gap-2">{weekDays.map((day,index)=>(<div key={day} className={'py-2 text-center text-sm font-semibold '+(index===0?'text-red-500':index===6?'text-blue-500':'text-gray-600')}>{day}</div>))}</div>
<div className="grid grid-cols-7 gap-2">{days.map((day,index)=>{if(day===null)return <div key={'empty-'+index} className="aspect-square"/>;const posts=getPostsForDay(day);const isSelected=day===selectedDay;return(<div key={day} onClick={()=>setSelectedDay(day)} className={'aspect-square rounded-lg border-2 p-2 transition hover:shadow-md cursor-pointer '+(isSelected?'border-emerald-600 bg-emerald-100 shadow-lg':'border-gray-200 bg-white hover:border-emerald-300')}><div className={'text-sm font-semibold '+(isSelected?'text-emerald-800':'text-gray-700')}>{day}</div><div className="mt-1 space-y-1">{posts.map(post=>(<div key={post.id} className="rounded bg-emerald-100 px-1 py-0.5 text-xs"><span>{post.emoji}</span></div>))}</div></div>);})}</div></div></div>
{selectedDay&&(<div className="w-1/3"><div className="sticky top-4 rounded-2xl bg-white p-6 shadow-lg"><div className="mb-4 flex items-center justify-between"><h3 className="text-xl font-bold text-emerald-900">{month+1}월 {selectedDay}일</h3><button onClick={()=>setSelectedDay(null)} className="text-gray-400 hover:text-gray-600 text-2xl">×</button></div>{selectedPosts.length>0?(<div className="space-y-6 max-h-[70vh] overflow-y-auto">{selectedPosts.map(post=>(<div key={post.id} className="pb-6 border-b last:border-0"><div className="mb-3"><div className="flex items-center gap-2 mb-2"><span className="text-3xl">{post.emoji}</span><div><h4 className="font-bold">{post.title}</h4><div className="flex">{Array.from({length:post.rating}).map((_,i)=>(<span key={i}>🍀</span>))}</div></div></div></div>{post.image&&(<img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-3"/>)}<p className="text-sm text-gray-700 mb-3 leading-relaxed">{post.content}</p><div className="flex flex-wrap gap-2">{post.hashtags.map((tag,i)=>(<span key={i} className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">{tag}</span>))}</div></div>))}</div>):(<div className="text-center py-12 text-gray-400"><p className="text-4xl mb-2">🍀</p><p>이 날의 소확행이 없습니다</p></div>)}</div></div>)}</div></main></div>);}
