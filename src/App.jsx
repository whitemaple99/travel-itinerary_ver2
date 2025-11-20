{\rtf1\ansi\ansicpg932\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React, \{ useState \} from 'react';\
import \{ Plane, Car, MapPin, Coffee, Utensils, Bed, CheckCircle, AlertTriangle, Camera, Clock, ChevronRight, Users, Calendar, Megaphone, Smartphone \} from 'lucide-react';\
\
const ItineraryApp = () => \{\
  const [activeTab, setActiveTab] = useState('day1');\
\
  const participants = ["Futa", "Iori", "Haruki"];\
\
  // \uc0\u12473 \u12465 \u12472 \u12517 \u12540 \u12523 \u12487 \u12540 \u12479 \
  const schedule = \{\
    day1: \{\
      id: 'day1',\
      date: "11/22 (\uc0\u22303 )",\
      title: "\uc0\u31119 \u23713 \u19978 \u38520  & \u22823 \u20998 \u12408 \u12489 \u12521 \u12452 \u12502 ",\
      color: "bg-blue-500",\
      // \uc0\u22812 \u12398 \u39640 \u36895 \u36947 \u36335 \u12539 \u12489 \u12521 \u12452 \u12502 \u12398 \u12452 \u12513 \u12540 \u12472 \
      image: "https://images.unsplash.com/photo-1605218458299-7032d571862f?auto=format&fit=crop&q=80&w=800&h=300", \
      events: [\
        \{ time: "15:00", title: "\uc0\u20013 \u37096 \u22269 \u38555 \u31354 \u28207 (NGO) \u31532 2\u12479 \u12540 \u12511 \u12490 \u12523  \u38598 \u21512 ", icon: <Users size=\{18\} className="text-pink-500"/>, note: "\u20313 \u35029 \u12434 \u25345 \u12387 \u12390 \u38598 \u21512 \u65281 " \},\
        \{ time: "16:00", title: "GK587 \uc0\u21517 \u21476 \u23627 \u30330 ", icon: <Plane size=\{18\} className="text-blue-500"/>, note: "\u12501 \u12521 \u12452 \u12488 \u26178 \u38291 : 1\u26178 \u38291 35\u20998 " \},\
        \{ time: "17:35", title: "\uc0\u31119 \u23713 \u31354 \u28207 (FUK) \u21040 \u30528 ", icon: <MapPin size=\{18\} className="text-green-500"/>, note: "\u38928 \u12369 \u33655 \u29289 \u12500 \u12483 \u12463 \u12450 \u12483 \u12503 \u31561 " \},\
        \{ time: "18:00", title: "\uc0\u31354 \u28207 \u20869 \u12391 \u36605 \u39135 \u35519 \u36948 ", icon: <Coffee size=\{18\} className="text-orange-500"/>, note: "\u12524 \u12531 \u12479 \u12459 \u12540 \u25163 \u32154 \u12365 \u12414 \u12391 \u23569 \u12375 \u26178 \u38291 \u12354 \u12426 " \},\
        \{ time: "19:00", title: "\uc0\u12479 \u12452 \u12512 \u12474 \u12459 \u12540 \u31119 \u23713 \u31354 \u28207 \u24215 ", icon: <Car size=\{18\} className="text-indigo-500"/>, note: "\u9733 \u20104 \u32004 \u38283 \u22987 \u26178 \u38291 \u12290 \u25163 \u32154 \u12365 \u65286 \u20986 \u30330 \u65281 ETC\u12459 \u12540 \u12489 \u24536 \u12428 \u12378 \u12395 " \},\
        \{ time: "19:30", title: "\uc0\u22823 \u20998 \u12408 \u39640 \u36895 \u12489 \u12521 \u12452 \u12502 ", icon: <Car size=\{18\} className="text-indigo-500"/>, note: "\u12523 \u12540 \u12488 \u65306 \u22826 \u23472 \u24220 IC \u8594  \u22823 \u20998 \u20809 \u21513 IC (\u32004 2\u26178 \u38291 )" \},\
        \{ time: "21:30", title: "\uc0\u12507 \u12486 \u12523 \u21040 \u30528 \u12539 \u12481 \u12455 \u12483 \u12463 \u12452 \u12531 ", icon: <Bed size=\{18\} className="text-purple-500"/>, note: "\u12304 \u23487 \u27850 \u22320 \u12305 \u22823 \u20998 \u22823 \u23398 \u21608 \u36794 \u65288 \u26086 \u37326 \u21407 \u12456 \u12522 \u12450 \u65289 " \},\
      ]\
    \},\
    day2: \{\
      id: 'day2',\
      date: "11/23 (\uc0\u26085 )",\
      title: "\uc0\u28271 \u24067 \u38498 \u25955 \u31574  & \u40658 \u24029 \u28201 \u27849 \u12354 \u12363 \u29275 \u20028 ",\
      color: "bg-orange-500",\
      // \uc0\u28201 \u27849 \u24773 \u32210 \u12539 \u21644 \u39080 \u12398 \u39080 \u26223 \
      image: "https://images.unsplash.com/photo-1568461369567-291045977722?auto=format&fit=crop&q=80&w=800&h=300", \
      events: [\
        \{ time: "09:00", title: "\uc0\u12507 \u12486 \u12523 \u20986 \u30330 ", icon: <Car size=\{18\} className="text-indigo-500"/>, note: "\u26089 \u12417 \u12395 \u20986 \u12390 \u28271 \u24067 \u38498 \u12408 " \},\
        \{ time: "10:00", title: "\uc0\u28271 \u24067 \u38498  \u25955 \u31574 ", icon: <MapPin size=\{18\} className="text-green-500"/>, note: "\u37329 \u40023 \u28246 \u12289 \u28271 \u12398 \u22378 \u34903 \u36947 \u12394 \u12393 \u12290 \u39135 \u12409 \u27497 \u12365 \u65286 \u12362 \u22303 \u29987 \u19979 \u35211 " \},\
        \{ time: "12:00", title: "\uc0\u12420 \u12414 \u12394 \u12415 \u12495 \u12452 \u12454 \u12455 \u12452 ", icon: <Camera size=\{18\} className="text-teal-500"/>, note: "\u32118 \u26223 \u12489 \u12521 \u12452 \u12502 \u65281 \u12300 \u38263 \u32773 \u21407 \u12301 \u12391 \u35352 \u24565 \u25774 \u24433 " \},\
        \{ time: "13:15", title: "\uc0\u40658 \u24029 \u28201 \u27849 \u12391 \u12521 \u12531 \u12481 ", icon: <Utensils size=\{18\} className="text-red-500"/>, note: "\u9733 \u12354 \u12363 \u29275 \u20028 \u65288 \u12431 \u12429 \u12367 \u23627 \u12394 \u12393 \u65289 " \},\
        \{ time: "14:30", title: "\uc0\u40658 \u24029 \u28201 \u27849  \u28271 \u12417 \u12368 \u12426 ", icon: <Coffee size=\{18\} className="text-orange-500"/>, note: "\u20837 \u28271 \u25163 \u24418 \u12434 \u20351 \u12387 \u12390 \u38706 \u22825 \u39080 \u21570 \u12408 " \},\
        \{ time: "16:30", title: "\uc0\u22823 \u20998 \u12408 \u25147 \u12427 ", icon: <Car size=\{18\} className="text-indigo-500"/>, note: "\u23665 \u36947 \u12489 \u12521 \u12452 \u12502  (\u32004 1\u26178 \u38291 45\u20998 )" \},\
        \{ time: "18:30", title: "\uc0\u22823 \u20998 \u22823 \u23398 \u21608 \u36794  \u21040 \u30528 ", icon: <CheckCircle size=\{18\} className="text-gray-500"/> \},\
        \{ time: "19:00", title: "\uc0\u22805 \u39135 \u65288 \u22823 \u20998 \u39365 \u21608 \u36794 \u12394 \u12393 \u65289 ", icon: <Utensils size=\{18\} className="text-red-500"/>, note: "\u12304 \u23487 \u27850 \u22320 \u12305 \u22823 \u20998 \u22823 \u23398 \u21608 \u36794 \u65288 \u36899 \u27850 \u65289 " \},\
      ]\
    \},\
    day3: \{\
      id: 'day3',\
      date: "11/24 (\uc0\u26376 )",\
      title: "\uc0\u38306 \u12354 \u12376 \u38306 \u12373 \u12400  & \u26368 \u24460 \u12398 \u21338 \u22810 \u22812 ",\
      color: "bg-red-500",\
      // \uc0\u39770 \u26009 \u29702 \u65288 \u21050 \u36523 \u12394 \u12393 \u65289 \u12398 \u12452 \u12513 \u12540 \u12472 \
      image: "https://images.unsplash.com/photo-1549611081-30d0718610bb?auto=format&fit=crop&q=80&w=800&h=300", \
      events: [\
        \{ time: "09:30", title: "\uc0\u12481 \u12455 \u12483 \u12463 \u12450 \u12454 \u12488 \u12539 \u20986 \u30330 ", icon: <Car size=\{18\} className="text-indigo-500"/>, note: "\u24536 \u12428 \u29289 \u12481 \u12455 \u12483 \u12463 \u65281 " \},\
        \{ time: "10:20", title: "\uc0\u38306 \u12354 \u12376 \u38306 \u12373 \u12400 \u39208  \u21040 \u30528 ", icon: <Clock size=\{18\} className="text-gray-500"/>, note: "\u9733 \u37325 \u35201 \u65306 \u38283 \u24215 (11:00)\u21069 \u12398 \u21040 \u30528 \u12434 \u30446 \u25351 \u12377 " \},\
        \{ time: "11:00", title: "\uc0\u35946 \u33775 \u12521 \u12531 \u12481 \u65281 ", icon: <Utensils size=\{18\} className="text-red-500"/>, note: "\u26412 \u22580 \u12398 \u38306 \u12354 \u12376 \u12539 \u38306 \u12373 \u12400 \u12434 \u22570 \u33021 " \},\
        \{ time: "12:30", title: "\uc0\u31119 \u23713 \u12408 \u31227 \u21205 ", icon: <Car size=\{18\} className="text-indigo-500"/>, note: "\u12523 \u12540 \u12488 \u65306 \u22823 \u20998 \u23470 \u27827 \u20869 IC \u8594  \u22826 \u23472 \u24220 \u26041 \u38754  (\u28171 \u28382 \u27880 \u24847 )" \},\
        \{ time: "15:30", title: "\uc0\u31119 \u23713 \u12456 \u12522 \u12450 \u21040 \u30528 ", icon: <MapPin size=\{18\} className="text-green-500"/>, note: "\u26178 \u38291 \u12364 \u12354 \u12428 \u12400 \u22826 \u23472 \u24220 \u22825 \u28288 \u23470  or \u12425 \u12425 \u12413 \u12540 \u12392 \u31119 \u23713 " \},\
        \{ time: "18:30", title: "\uc0\u32102 \u27833  & \u36820 \u21364 \u24215 \u33303 \u12408 ", icon: <Car size=\{18\} className="text-indigo-500"/>, note: "\u31119 \u23713 \u31354 \u28207 \u36817 \u12367 \u12398 GS\u12391 \u28288 \u12479 \u12531 \u12395 " \},\
        \{ time: "19:00", title: "\uc0\u12524 \u12531 \u12479 \u12459 \u12540 \u36820 \u21364 ", icon: <CheckCircle size=\{18\} className="text-gray-500"/>, note: "\u9733 \u36820 \u21364 \u26399 \u38480 \u21427 \u23432 " \},\
        \{ time: "19:30", title: "\uc0\u12507 \u12486 \u12523 \u12481 \u12455 \u12483 \u12463 \u12452 \u12531 ", icon: <Bed size=\{18\} className="text-purple-500"/>, note: "\u12304 \u23487 \u27850 \u22320 \u12305 \u31119 \u23713 \u31354 \u28207 \u21608 \u36794 \u12507 \u12486 \u12523 " \},\
        \{ time: "20:00", title: "\uc0\u21338 \u22810 \u12398 \u22812 \u12391 \u25171 \u12385 \u19978 \u12370 \u65281 ", icon: <Utensils size=\{18\} className="text-red-500"/>, note: "\u22320 \u19979 \u37444 \u12391 \u21338 \u22810 \u39365 \u12408 (5\u20998 )\u12290 \u12418 \u12388 \u37707 \u12539 \u23627 \u21488 \u12539 \u12362 \u37202 OK\u55356 \u57210 " \},\
      ]\
    \},\
    day4: \{\
      id: 'day4',\
      date: "11/25 (\uc0\u28779 )",\
      title: "\uc0\u12362 \u22303 \u29987 \u36092 \u20837  & \u24112 \u23429 ",\
      color: "bg-green-500",\
      // \uc0\u31354 \u28207 \u12539 \u12362 \u22303 \u29987 \u12398 \u12452 \u12513 \u12540 \u12472 \
      image: "https://images.unsplash.com/photo-1483450389192-3d3b4d2d005b?auto=format&fit=crop&q=80&w=800&h=300", \
      events: [\
        \{ time: "09:30", title: "\uc0\u12481 \u12455 \u12483 \u12463 \u12450 \u12454 \u12488 ", icon: <CheckCircle size=\{18\} className="text-gray-500"/>, note: "\u12422 \u12387 \u12367 \u12426 \u12417 \u12398 \u26397 " \},\
        \{ time: "10:00", title: "\uc0\u31119 \u23713 \u31354 \u28207 \u12391 \u12362 \u22303 \u29987 ", icon: <MapPin size=\{18\} className="text-green-500"/>, note: "\u21338 \u22810 \u36890 \u12426 \u12418 \u12435 \u12289 \u26126 \u22826 \u23376 \u12394 \u12393 " \},\
        \{ time: "10:30", title: "\uc0\u20445 \u23433 \u26908 \u26619 \u36890 \u36942 ", icon: <AlertTriangle size=\{18\} className="text-yellow-500"/>, note: "Futa\u20197 \u22806 \u12399 \u33655 \u29289 \u38928 \u12369 \u12394 \u12375 " \},\
        \{ time: "11:05", title: "GK582 \uc0\u31119 \u23713 \u30330 ", icon: <Plane size=\{18\} className="text-blue-500"/>, note: "\u12496 \u12452 \u12496 \u12452 \u20061 \u24030 \u65281 " \},\
        \{ time: "12:30", title: "\uc0\u21517 \u21476 \u23627 (\u20013 \u37096 ) \u21040 \u30528 ", icon: <MapPin size=\{18\} className="text-green-500"/>, note: "\u12362 \u30130 \u12428 \u27096 \u12391 \u12375 \u12383 \u65281 " \},\
      ]\
    \}\
  \};\
\
  const currentSchedule = schedule[activeTab];\
\
  // \uc0\u12487 \u12540 \u12479 \u12364 \u23384 \u22312 \u12375 \u12394 \u12356 \u22580 \u21512 \u12398 \u12460 \u12540 \u12489 \u20966 \u29702 \
  if (!currentSchedule) \{\
    return <div className="p-10 text-center">Loading...</div>;\
  \}\
\
  return (\
    // min-h-[100dvh]\uc0\u12391 \u12473 \u12510 \u12507 \u12398 \u21205 \u30340 \u12394 \u12499 \u12517 \u12540 \u12509 \u12540 \u12488 \u39640 \u12373 \u12395 \u23550 \u24540 \u12290 w-full\u12391 \u27178 \u24133 \u12356 \u12387 \u12401 \u12356 \u12290 \
    <div className="w-full md:max-w-md md:mx-auto bg-gradient-to-br from-blue-50 to-teal-100 min-h-[100dvh] font-sans pb-20 shadow-none md:shadow-lg overflow-x-hidden">\
      \
      \{/* Header */\}\
      <div className="relative bg-teal-600 text-white p-6 rounded-b-3xl shadow-xl overflow-hidden z-10">\
        <div className="absolute inset-0 z-0 opacity-20 bg-teal-900">\
            <img \
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600" \
                alt="map background" \
                className="w-full h-full object-cover" \
                onError=\{(e) => e.target.style.display = 'none'\} \
            />\
        </div>\
        <div className="relative z-10">\
          <div className="flex items-center justify-between mb-2">\
            <span className="text-teal-100 text-sm font-bold tracking-widest bg-teal-700 px-3 py-1 rounded-full shadow-inner">TRAVEL GUIDE</span>\
            <span className="bg-teal-800 px-3 py-1 rounded-full text-xs opacity-90 shadow-inner">2025.11.22-25</span>\
          </div>\
          <h1 className="text-3xl font-extrabold mb-4 leading-tight drop-shadow-md">\uc0\u20061 \u24030 \u12464 \u12523 \u12513 \u65286 \u28201 \u27849 <br/>\u12431 \u12367 \u12431 \u12367 \u28288 \u21931 \u26053  \u9832 \u65039 </h1>\
          <div className="flex -space-x-2 overflow-hidden mb-4">\
            \{participants.map((name, i) => (\
              <div key=\{i\} className="inline-block h-10 w-10 rounded-full ring-3 ring-white bg-blue-300 flex items-center justify-center text-blue-800 text-sm font-bold shadow-md">\
                \{name.charAt(0)\}\
              </div>\
            ))\}\
            <div className="inline-block h-10 w-10 rounded-full ring-3 ring-white bg-gray-200 flex items-center justify-center text-gray-600 text-sm font-bold shadow-md">+</div>\
          </div>\
        </div>\
      </div>\
\
      \{/* Important Info Card (Pop style) */\}\
      <div className="mx-4 -mt-8 relative z-20 bg-yellow-100 p-5 rounded-2xl shadow-xl border-2 border-yellow-300 transform rotate-1 mb-8">\
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-2 shadow-lg animate-bounce">\
            <Megaphone size=\{24\} />\
        </div>\
        <h3 className="text-lg font-extrabold text-yellow-800 mb-3 flex items-center">\
          <AlertTriangle size=\{20\} className="text-yellow-600 mr-2" />\
          \uc0\u10024  \u37325 \u35201 \u65281 \u35201 \u12481 \u12455 \u12483 \u12463  \u10024 \
        </h3>\
        <ul className="text-sm text-yellow-700 space-y-3 list-none pl-0">\
          <li className="flex items-start">\
            <Plane size=\{16\} className="text-yellow-600 mr-2 mt-1 flex-shrink-0" />\
            <div className="leading-snug"><strong>Iori & Haruki:</strong> \uc0\u24112 \u12426 \u12398 \u33655 \u29289 \u12399 \u27231 \u20869 \u25345 \u36796 (7kg)\u12398 \u12415 \u65281 \u28082 \u20307 \u29289 \u27880 \u24847 \u12384 \u12424 \u65281 \u9992 \u65039 </div>\
          </li>\
          <li className="flex items-start">\
            <Car size=\{16\} className="text-yellow-600 mr-2 mt-1 flex-shrink-0" />\
            <div className="leading-snug"><strong>\uc0\u12524 \u12531 \u12479 \u12459 \u12540 \u26399 \u38291 :</strong> 11/22 19:00 \u12316  11/24 19:00\u12384 \u12424 \u12290 \u20055 \u12426 \u36933 \u12428 \u21427 \u31105 \u65281 </div>\
          </li>\
          <li className="flex items-start">\
            <Smartphone size=\{16\} className="text-yellow-600 mr-2 mt-1 flex-shrink-0" />\
            <div className="leading-snug"><strong>\uc0\u20813 \u35377 \u35388  & ETC\u12459 \u12540 \u12489 :</strong> \u32118 \u23550 \u65281 \u32118 \u23550 \u12395 \u65281 \u24536 \u12428 \u12378 \u12395 \u12397 \u65281 \u55357 \u56983 </div>\
          </li>\
        </ul>\
      </div>\
\
      \{/* Tab Navigation - \uc0\u12473 \u12510 \u12507 \u12391 \u12398 \u12473 \u12463 \u12525 \u12540 \u12523 \u25805 \u20316 \u24615 \u12434 \u21521 \u19978  */\}\
      <div className="flex overflow-x-auto px-4 pb-4 space-x-3 no-scrollbar w-full">\
        \{Object.keys(schedule).map((key) => (\
          <button\
            key=\{key\}\
            onClick=\{() => setActiveTab(key)\}\
            className=\{`flex-shrink-0 px-5 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap shadow-md $\{\
              activeTab === key\
                ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white scale-105'\
                : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-300'\
            \}`\}\
          >\
            \{schedule[key].date\}\
          </button>\
        ))\}\
      </div>\
\
      \{/* Schedule Content */\}\
      <div className="px-4 mt-2 pb-12">\
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">\
          \{/* Day Header with Image */\}\
          <div className="relative h-36 w-full bg-gray-200">\
            <img \
              src=\{currentSchedule.image\} \
              alt=\{currentSchedule.title\}\
              className="w-full h-full object-cover brightness-90"\
              onError=\{(e) => \{\
                e.target.style.display = 'none'; // \uc0\u30011 \u20687 \u12456 \u12521 \u12540 \u26178 \u12399 \u38750 \u34920 \u31034 \u12395 \u12375 \u12390 \u32972 \u26223 \u33394 \u12434 \u35211 \u12379 \u12427 \
              \}\}\
            />\
            \{/* \uc0\u30011 \u20687 \u12364 \u12394 \u12356 \u22580 \u21512 \u12398 \u12501 \u12457 \u12540 \u12523 \u12496 \u12483 \u12463 \u32972 \u26223  */\}\
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-300 -z-10"></div>\
\
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 text-white">\
              <h2 className="font-extrabold text-xl drop-shadow-lg leading-tight">\{currentSchedule.title\}</h2>\
            </div>\
          </div>\
          \
          <div className="p-4">\
            <div className="relative border-l-4 border-dashed border-teal-200 ml-3 space-y-8 py-2">\
              \{currentSchedule.events.map((event, index) => (\
                <div key=\{index\} className="relative pl-8 group">\
                  \{/* Timeline Dot */\}\
                  <div className=\{`absolute -left-[11px] top-1 w-5 h-5 rounded-full border-4 border-white shadow-md flex items-center justify-center z-10 $\{\
                    activeTab === 'day1' ? 'bg-blue-400' :\
                    activeTab === 'day2' ? 'bg-orange-400' :\
                    activeTab === 'day3' ? 'bg-red-400' :\
                    'bg-green-400'\
                  \}`\}>\
                  </div>\
                  \
                  \{/* Time */\}\
                  <div className="text-sm font-extrabold text-gray-500 mb-1 flex items-center">\
                    <Clock size=\{16\} className="mr-1 text-gray-400"/> \{event.time\}\
                  </div>\
                  \
                  \{/* Content */\}\
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 active:scale-[0.99] transition-transform">\
                    <div className="flex items-start justify-between mb-1">\
                      <h3 className="text-base font-bold text-gray-800 leading-tight">\{event.title\}</h3>\
                      <div className="text-teal-600 flex-shrink-0 ml-2">\{event.icon\}</div>\
                    </div>\
                    \{event.note && (\
                      <p className="text-xs text-gray-500 mt-2 leading-relaxed bg-gray-50 p-2 rounded-lg border border-gray-100">\
                        \{event.note\}\
                      </p>\
                    )\}\
                  </div>\
                </div>\
              ))\}\
            </div>\
          </div>\
        </div>\
      </div>\
\
      \{/* Footer Memo */\}\
      <div className="text-center text-sm text-gray-500 font-semibold italic flex items-center justify-center gap-2 pb-8">\
        Have a super nice trip! \uc0\u55357 \u56983 \u9832 \u65039 \u55356 \u57180  \u55356 \u57225 \
        <Plane size=\{16\} className="text-blue-400"/>\
      </div>\
    </div>\
  );\
\};\
\
export default ItineraryApp;}