'use client';
import {useState} from 'react';
interface CreatePostModalProps{isOpen:boolean;onClose:()=>void;onSubmit:(post:any)=>void;selectedDate?:Date;}
export default function CreatePostModal({isOpen,onClose,onSubmit,selectedDate}:CreatePostModalProps){
const [title,setTitle]=useState('');
const [content,setContent]=useState('');
const [emoji,setEmoji]=useState('😊');
const [rating,setRating]=useState(3);
const [imageFile,setImageFile]=useState<File|null>(null);
const [imagePreview,setImagePreview]=useState('');
const [uploading,setUploading]=useState(false);
const emojis=['😊','📚','🐕','🥐','☕','🏃','🎵','🎨','🌸','🍕','🎮','✈️'];
const handleImageChange=(e:React.ChangeEvent<HTMLInputElement>)=>{const file=e.target.files?.[0];if(file){setImageFile(file);const reader=new FileReader();reader.onloadend=()=>{setImagePreview(reader.result as string);};reader.readAsDataURL(file);}};
const handleSubmit=async(e:React.FormEvent)=>{e.preventDefault();setUploading(true);let imageUrl=undefined;if(imageFile){const formData=new FormData();formData.append('file',imageFile);formData.append('upload_preset','sohwakhang_preset');try{const response=await fetch('https://api.cloudinary.com/v1_1/'+process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME+'/image/upload',{method:'POST',body:formData});const data=await response.json();imageUrl=data.secure_url;}catch(error){console.error('Image upload failed:',error);alert('이미지 업로드에 실패했습니다.');setUploading(false);return;}}const post={title,content,emoji,rating,imageUrl,date:selectedDate||new Date()};onSubmit(post);setTitle('');setContent('');setEmoji('😊');setRating(3);setImageFile(null);setImagePreview('');setUploading(false);onClose();};
if(!isOpen)return null;
return(
<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
<div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e)=>e.stopPropagation()}>
<div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
<h2 className="text-2xl font-bold text-emerald-900">새로운 소확행 추가</h2>
<button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-3xl">×</button>
</div>
<form onSubmit={handleSubmit} className="p-6 space-y-6">
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">이모지 선택</label>
<div className="flex flex-wrap gap-2">
{emojis.map(e=>(
<button key={e} type="button" onClick={()=>setEmoji(e)} className={'text-3xl p-2 rounded-lg border-2 transition '+(emoji===e?'border-emerald-500 bg-emerald-50':'border-gray-200 hover:border-emerald-300')}>{e}</button>
))}
</div>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">제목 *</label>
<input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="예: 카페에서 책 읽기"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">내용 *</label>
<textarea value={content} onChange={(e)=>setContent(e.target.value)} required rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none" placeholder="오늘 어떤 소확행을 경험하셨나요?"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">이미지 업로드 (선택)</label>
<input type="file" accept="image/*" onChange={handleImageChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"/>
{imagePreview&&(<img src={imagePreview} alt="미리보기" className="mt-2 w-full h-48 object-cover rounded-lg"/>)}
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">행복 점수 *</label>
<div className="flex items-center gap-2">
{[1,2,3,4,5].map(num=>(
<button key={num} type="button" onClick={()=>setRating(num)} className={'text-3xl transition '+(num<=rating?'opacity-100':'opacity-30')}>🍀</button>
))}
<span className="ml-2 text-gray-600">{rating}개</span>
</div>
</div>
<div className="flex gap-3 pt-4">
<button type="button" onClick={onClose} disabled={uploading} className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition disabled:opacity-50">취소</button>
<button type="submit" disabled={uploading} className="flex-1 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition disabled:opacity-50">{uploading?'업로드 중...':'작성 완료'}</button>
</div>
</form>
</div>
</div>
);
}
