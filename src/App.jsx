import React, { useState } from 'react';
import { Plane, Car, MapPin, Coffee, Utensils, Bed, CheckCircle, AlertTriangle, Camera, Clock, ChevronRight, Users, Calendar, Megaphone, Smartphone } from 'lucide-react';

const ItineraryApp = () => {
  const [activeTab, setActiveTab] = useState('day1');

  const participants = ["Futa", "Iori", "Haruki"];

  // スケジュールデータ
  const schedule = {
    day1: {
      id: 'day1',
      date: "11/22 (土)",
      title: "福岡上陸 & 大分へドライブ",
      color: "bg-blue-500",
      // 夜の高速道路・ドライブのイメージ
      image: "https://images.unsplash.com/photo-1605218458299-7032d571862f?auto=format&fit=crop&q=80&w=800&h=300", 
      events: [
        { time: "15:00", title: "中部国際空港(NGO) 第2ターミナル 集合", icon: <Users size={18} className="text-pink-500"/>, note: "余裕を持って集合！" },
        { time: "16:00", title: "GK587 名古屋発", icon: <Plane size={18} className="text-blue-500"/>, note: "フライト時間: 1時間35分" },
        { time: "17:35", title: "福岡空港(FUK) 到着", icon: <MapPin size={18} className="text-green-500"/>, note: "預け荷物ピックアップ等" },
        { time: "18:00", title: "空港内で軽食調達", icon: <Coffee size={18} className="text-orange-500"/>, note: "レンタカー手続きまで少し時間あり" },
        { time: "19:00", title: "タイムズカー福岡空港店", icon: <Car size={18} className="text-indigo-500"/>, note: "★予約開始時間。手続き＆出発！ETCカード忘れずに" },
        { time: "19:30", title: "大分へ高速ドライブ", icon: <Car size={18} className="text-indigo-500"/>, note: "ルート：太宰府IC → 大分光吉IC (約2時間)" },
        { time: "21:30", title: "ホテル到着・チェックイン", icon: <Bed size={18} className="text-purple-500"/>, note: "【宿泊地】大分大学周辺（旦野原エリア）" },
      ]
    },
    day2: {
      id: 'day2',
      date: "11/23 (日)",
      title: "湯布院散策 & 黒川温泉あか牛丼",
      color: "bg-orange-500",
      // 温泉情緒・和風の風景
      image: "https://images.unsplash.com/photo-1568461369567-291045977722?auto=format&fit=crop&q=80&w=800&h=300", 
      events: [
        { time: "09:00", title: "ホテル出発", icon: <Car size={18} className="text-indigo-500"/>, note: "早めに出て湯布院へ" },
        { time: "10:00", title: "湯布院 散策", icon: <MapPin size={18} className="text-green-500"/>, note: "金鱗湖、湯の坪街道など。食べ歩き＆お土産下見" },
        { time: "12:00", title: "やまなみハイウェイ", icon: <Camera size={18} className="text-teal-500"/>, note: "絶景ドライブ！「長者原」で記念撮影" },
        { time: "13:15", title: "黒川温泉でランチ", icon: <Utensils size={18} className="text-red-500"/>, note: "★あか牛丼（わろく屋など）" },
        { time: "14:30", title: "黒川温泉 湯めぐり", icon: <Coffee size={18} className="text-orange-500"/>, note: "入湯手形を使って露天風呂へ" },
        { time: "16:30", title: "大分へ戻る", icon: <Car size={18} className="text-indigo-500"/>, note: "山道ドライブ (約1時間45分)" },
        { time: "18:30", title: "大分大学周辺 到着", icon: <CheckCircle size={18} className="text-gray-500"/> },
        { time: "19:00", title: "夕食（大分駅周辺など）", icon: <Utensils size={18} className="text-red-500"/>, note: "【宿泊地】大分大学周辺（連泊）" },
      ]
    },
    day3: {
      id: 'day3',
      date: "11/24 (月)",
      title: "関あじ関さば & 最後の博多夜",
      color: "bg-red-500",
      // 魚料理（刺身など）のイメージ
      image: "https://images.unsplash.com/photo-1549611081-30d0718610bb?auto=format&fit=crop&q=80&w=800&h=300", 
      events: [
        { time: "09:30", title: "チェックアウト・出発", icon: <Car size={18} className="text-indigo-500"/>, note: "忘れ物チェック！" },
        { time: "10:20", title: "関あじ関さば館 到着", icon: <Clock size={18} className="text-gray-500"/>, note: "★重要：開店(11:00)前の到着を目指す" },
        { time: "11:00", title: "豪華ランチ！", icon: <Utensils size={18} className="text-red-500"/>, note: "本場の関あじ・関さばを堪能" },
        { time: "12:30", title: "福岡へ移動", icon: <Car size={18} className="text-indigo-500"/>, note: "ルート：大分宮河内IC → 太宰府方面 (渋滞注意)" },
        { time: "15:30", title: "福岡エリア到着", icon: <MapPin size={18} className="text-green-500"/>, note: "時間があれば太宰府天満宮 or ららぽーと福岡" },
        { time: "18:30", title: "給油 & 返却店舗へ", icon: <Car size={18} className="text-indigo-500"/>, note: "福岡空港近くのGSで満タンに" },
        { time: "19:00", title: "レンタカー返却", icon: <CheckCircle size={18} className="text-gray-500"/>, note: "★返却期限厳守" },
        { time: "19:30", title: "ホテルチェックイン", icon: <Bed size={18} className="text-purple-500"/>, note: "【宿泊地】福岡空港周辺ホテル" },
        { time: "20:00", title: "博多の夜で打ち上げ！", icon: <Utensils size={18} className="text-red-500"/>, note: "地下鉄で博多駅へ(5分)。もつ鍋・屋台・お酒OK🍺" },
      ]
    },
    day4: {
      id: 'day4',
      date: "11/25 (火)",
      title: "お土産購入 & 帰宅",
      color: "bg-green-500",
      // 空港・お土産のイメージ
      image: "https://images.unsplash.com/photo-1483450389192-3d3b4d2d005b?auto=format&fit=crop&q=80&w=800&h=300", 
      events: [
        { time: "09:30", title: "チェックアウト", icon: <CheckCircle size={18} className="text-gray-500"/>, note: "ゆっくりめの朝" },
        { time: "10:00", title: "福岡空港でお土産", icon: <MapPin size={18} className="text-green-500"/>, note: "博多通りもん、明太子など" },
        { time: "10:30", title: "保安検査通過", icon: <AlertTriangle size={18} className="text-yellow-500"/>, note: "Futa以外は荷物預けなし" },
        { time: "11:05", title: "GK582 福岡発", icon: <Plane size={18} className="text-blue-500"/>, note: "バイバイ九州！" },
        { time: "12:30", title: "名古屋(中部) 到着", icon: <MapPin size={18} className="text-green-500"/>, note: "お疲れ様でした！" },
      ]
    }
  };

  const currentSchedule = schedule[activeTab];

  // データが存在しない場合のガード処理
  if (!currentSchedule) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  return (
    // min-h-[100dvh]でスマホの動的なビューポート高さに対応。w-fullで横幅いっぱい。
    <div className="w-full md:max-w-md md:mx-auto bg-gradient-to-br from-blue-50 to-teal-100 min-h-[100dvh] font-sans pb-20 shadow-none md:shadow-lg overflow-x-hidden">
      
      {/* Header */}
      <div className="relative bg-teal-600 text-white p-6 rounded-b-3xl shadow-xl overflow-hidden z-10">
        <div className="absolute inset-0 z-0 opacity-20 bg-teal-900">
            <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600" 
                alt="map background" 
                className="w-full h-full object-cover" 
                onError={(e) => e.target.style.display = 'none'} 
            />
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-teal-100 text-sm font-bold tracking-widest bg-teal-700 px-3 py-1 rounded-full shadow-inner">TRAVEL GUIDE</span>
            <span className="bg-teal-800 px-3 py-1 rounded-full text-xs opacity-90 shadow-inner">2025.11.22-25</span>
          </div>
          <h1 className="text-3xl font-extrabold mb-4 leading-tight drop-shadow-md">九州グルメ＆温泉<br/>わくわく満喫旅 ♨️</h1>
          <div className="flex -space-x-2 overflow-hidden mb-4">
            {participants.map((name, i) => (
              <div key={i} className="inline-block h-10 w-10 rounded-full ring-3 ring-white bg-blue-300 flex items-center justify-center text-blue-800 text-sm font-bold shadow-md">
                {name.charAt(0)}
              </div>
            ))}
            <div className="inline-block h-10 w-10 rounded-full ring-3 ring-white bg-gray-200 flex items-center justify-center text-gray-600 text-sm font-bold shadow-md">+</div>
          </div>
        </div>
      </div>

      {/* Important Info Card (Pop style) */}
      <div className="mx-4 -mt-8 relative z-20 bg-yellow-100 p-5 rounded-2xl shadow-xl border-2 border-yellow-300 transform rotate-1 mb-8">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-2 shadow-lg animate-bounce">
            <Megaphone size={24} />
        </div>
        <h3 className="text-lg font-extrabold text-yellow-800 mb-3 flex items-center">
          <AlertTriangle size={20} className="text-yellow-600 mr-2" />
          ✨ 重要！要チェック ✨
        </h3>
        <ul className="text-sm text-yellow-700 space-y-3 list-none pl-0">
          <li className="flex items-start">
            <Plane size={16} className="text-yellow-600 mr-2 mt-1 flex-shrink-0" />
            <div className="leading-snug"><strong>Iori & Haruki:</strong> 帰りの荷物は機内持込(7kg)のみ！液体物注意だよ！✈️</div>
          </li>
          <li className="flex items-start">
            <Car size={16} className="text-yellow-600 mr-2 mt-1 flex-shrink-0" />
            <div className="leading-snug"><strong>レンタカー期間:</strong> 11/22 19:00 〜 11/24 19:00だよ。乗り遅れ厳禁！</div>
          </li>
          <li className="flex items-start">
            <Smartphone size={16} className="text-yellow-600 mr-2 mt-1 flex-shrink-0" />
            <div className="leading-snug"><strong>免許証 & ETCカード:</strong> 絶対！絶対に！忘れずにね！🚗</div>
          </li>
        </ul>
      </div>

      {/* Tab Navigation - スマホでのスクロール操作性を向上 */}
      <div className="flex overflow-x-auto px-4 pb-4 space-x-3 no-scrollbar w-full">
        {Object.keys(schedule).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex-shrink-0 px-5 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap shadow-md ${
              activeTab === key
                ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white scale-105'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-300'
            }`}
          >
            {schedule[key].date}
          </button>
        ))}
      </div>

      {/* Schedule Content */}
      <div className="px-4 mt-2 pb-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          {/* Day Header with Image */}
          <div className="relative h-36 w-full bg-gray-200">
            <img 
              src={currentSchedule.image} 
              alt={currentSchedule.title}
              className="w-full h-full object-cover brightness-90"
              onError={(e) => {
                e.target.style.display = 'none'; // 画像エラー時は非表示にして背景色を見せる
              }}
            />
            {/* 画像がない場合のフォールバック背景 */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-300 -z-10"></div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 text-white">
              <h2 className="font-extrabold text-xl drop-shadow-lg leading-tight">{currentSchedule.title}</h2>
            </div>
          </div>
          
          <div className="p-4">
            <div className="relative border-l-4 border-dashed border-teal-200 ml-3 space-y-8 py-2">
              {currentSchedule.events.map((event, index) => (
                <div key={index} className="relative pl-8 group">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full border-4 border-white shadow-md flex items-center justify-center z-10 ${
                    activeTab === 'day1' ? 'bg-blue-400' :
                    activeTab === 'day2' ? 'bg-orange-400' :
                    activeTab === 'day3' ? 'bg-red-400' :
                    'bg-green-400'
                  }`}>
                  </div>
                  
                  {/* Time */}
                  <div className="text-sm font-extrabold text-gray-500 mb-1 flex items-center">
                    <Clock size={16} className="mr-1 text-gray-400"/> {event.time}
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 active:scale-[0.99] transition-transform">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-base font-bold text-gray-800 leading-tight">{event.title}</h3>
                      <div className="text-teal-600 flex-shrink-0 ml-2">{event.icon}</div>
                    </div>
                    {event.note && (
                      <p className="text-xs text-gray-500 mt-2 leading-relaxed bg-gray-50 p-2 rounded-lg border border-gray-100">
                        {event.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Memo */}
      <div className="text-center text-sm text-gray-500 font-semibold italic flex items-center justify-center gap-2 pb-8">
        Have a super nice trip! 🚗♨️🍜 🎉
        <Plane size={16} className="text-blue-400"/>
      </div>
    </div>
  );
};

export default ItineraryApp;
