import React, { useState, useEffect } from 'react';
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Star,
  Linkedin,
  Menu,
  X,
  Layers,
  Cpu,
  Users,
  FileText,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MessageSquare
} from 'lucide-react';


// --- Data Section ---

const profileImageUrl = "/gallery/doc-30.jpg";

const personalInfo = {
  name: "יניב אברהם",
  title: "מומחה טכנולוגיות, הוראה וקשרי תעשייה",
  summary: "מומחה טכנולוגיות, הוראה וקשרי תעשייה, עם ניסיון של מעל 14 שנים בתפקידים תפעוליים וניהוליים בעיריית ירושלים. מרצה ומנהל קשרי מעסיקים במכללת אורט ירושלים. בעל יכולת מוכחת בחיבור בין האקדמיה לתעשייה, הובלת פרקטיקום, והטמעת כלי בינה מלאכותית (AI) ו-BI בארגונים.",
  location: "מעלה אדומים",
  email: "Vy17206@gmail.com",
  phone: "055-6663320",
  linkedin: "#"
};

const skills = [
  { name: "Power BI & Data Analysis", level: 95, icon: <Layers size={20} /> },
  { name: "AutoCAD & Revit", level: 90, icon: <Cpu size={20} /> },
  { name: "ניהול וקשרי תעשייה", level: 100, icon: <Users size={20} /> },
  { name: "הטמעת AI בארגונים", level: 85, icon: <Star size={20} /> },
  { name: "מערכות GIS", level: 85, icon: <MapPin size={20} /> },
  { name: "ניהול פרויקטים", level: 90, icon: <Briefcase size={20} /> },
];

const experience = [
  {
    role: "מנהל קשרי מעסיקים ומרצה",
    company: "מכללת ORT ירושלים",
    period: "2023 - כיום",
    description: [
      "הוראת AutoCAD, Revit, Excel ויישומי מחשב.",
      "הטמעת כלי בינה מלאכותית (AI) בתיעוד וניתוח נתונים.",
      "הובלת מערך הפרקטיקום במסלולי הנדסאי בניין, מכטרוניקה ותוכנה.",
      "יצירת שיתופי פעולה אסטרטגיים עם חברות מובילות (דניה סיבוס, בראזני ועוד)."
    ]
  },
  {
    role: "מנהל מחלקה ומוביל טכנולוגיות",
    company: "עיריית ירושלים (אגף חניה / אכיפה ושיטור)",
    period: "2013 - כיום",
    description: [
      "ניהול תפעול וטכנולוגיה, הובלת סקר חניות נכים והטמעה במערכות GIS.",
      "ניהול והטמעת מערכות מידע, בקרה ודיווח.",
      "הטמעת מערכות אכיפה חכמות מבוססות מצלמות ותקשורת.",
      "ניהול צוותים, הדרכות ושיפור תהליכים תפעוליים."
    ]
  },
  {
    role: "אחראי תפעול ותחזוקת מערכות",
    company: "עיריית ירושלים",
    period: "2010 - 2013",
    description: [
      "אחריות על תפעול ותחזוקת מערכות וציוד אכיפה עירוני.",
      "ניהול שרשרת התמיכה וקיצור זמני השבתה.",
      "עבודה מול ספקים חיצוניים וניתוח תקלות."
    ]
  }
];

const education = [
  {
    degree: "B.Ed. בוגר בהוראה (התמחות בחינוך מבוגרים)",
    institution: "המכללה האקדמית לחינוך ע\"ש דוד ילין",
    year: "2019"
  },
  {
    degree: "הנדסאי/טכנאי תעשייה וניהול (מערכות ייצור)",
    institution: "המכללה הטכנולוגית / מה\"ט",
    year: "2009 / רישום 2018"
  },
  {
    degree: "קורסים והכשרות",
    institution: "שונות",
    details: "Power BI, הכשרת ראשי צוותים, מערכות GIS, מערכות אכיפה חכמות."
  }
];

const recommendations = [
  {
    name: "נאור אלפנדרי",
    role: "רכז מגמת הנדסאי בנין, מכללת אורט ירושלים",
    text: "לא מדובר רק באיש מקצוע מצוין - אלא באדם שהמחויבות, האיכות והמסירות שלו מרשימים... יניב מצליח לייצר חיבורים משמעותיים בין עולם האקדמיה לתעשייה... תרומתו ניכרת בכל היבט."
  },
  {
    name: "פרופ' יוסף פרוסט",
    role: "נשיא מכללת דוד ילין (לשעבר)",
    text: "הענקת תואר B.Ed בהצטיינות, המעיד על יכולות אקדמיות גבוהות והתמחות בחינוך מבוגרים."
  },
  {
    name: "הנהלת אגף אכיפה ושיטור",
    role: "עיריית ירושלים",
    text: "הערכה על הובלת פרויקטים טכנולוגיים מורכבים, הטמעת מערכות אכיפה חכמות וניהול תפעולי ברמה הגבוהה ביותר."
  },
  {
    name: "מפקד ענף מערכות נשק",
    role: "צה\"ל (שירות קבע)",
    text: "תעודת הצטיינות על השקעה, הצטיינות ותרומה לענף. ביצוע תפקיד נגד הדרכה וניהול טכני ברמה גבוהה."
  }
];

const certificates = [
  "תואר B.Ed - מכללת דוד ילין",
  "דיפלומת טכנאי תעשייה וניהול",
  "רישום בפנקס ההנדסאים והטכנאים",
  "תעודת סיום קורס Power BI",
  "פרס למצוינות - עיריית ירושלים (2012)",
  "תעודת הצטיינות צה\"ל - ענף מע\"ש",
  "פרס יוספטל לבטיחות"
];

const galleryItems = [
  // --- Certificates ---
  { id: 1, src: "/gallery/doc-01.png", title: "תואר B.Ed - מכללת דוד ילין", category: "certificate" },
  { id: 2, src: "/gallery/doc-02.png", title: "דיפלומת הנדסאי/טכנאי - מה\"ט", category: "certificate" },
  { id: 3, src: "/gallery/doc-03.png", title: "רישום בפנקס הטכנאים (2018)", category: "certificate" },
  { id: 4, src: "/gallery/doc-04.png", title: "המלצה - נאור אלפנדרי (אורט)", category: "recommendation" },
  { id: 5, src: "/gallery/doc-05.png", title: "אישור ניסיון - רויטל מרזן (עירייה)", category: "recommendation" },
  { id: 6, src: "/gallery/doc-06.png", title: "המלצה - יהונתן נסים (קרן לעידוד הבנייה)", category: "recommendation" },
  { id: 7, src: "/gallery/doc-07.png", title: "המלצה - אילן ששון (אגף אכיפה)", category: "recommendation" },
  { id: 8, src: "/gallery/doc-08.png", title: "המלצה - שירות צבאי (בה\"ד 20)", category: "recommendation" },
  { id: 9, src: "/gallery/doc-09.png", title: "סיכום והתרשמות - דודי שמיר", category: "recommendation" },
  { id: 10, src: "/gallery/doc-10.png", title: "תעודת קורס Power BI", category: "certificate" },
  { id: 11, src: "/gallery/doc-11.png", title: "פרס מצוינות עיריית ירושלים", category: "certificate" },
  { id: 12, src: "/gallery/doc-12.png", title: "תעודת הצטיינות - ענף נשק", category: "certificate" },
  { id: 13, src: "/gallery/doc-13.png", title: "תעודת עתודה לראשי צוותים", category: "certificate" },
  { id: 14, src: "/gallery/doc-14.png", title: "הצטיינות יתרה - קורס מסגרות", category: "certificate" },
  { id: 15, src: "/gallery/doc-15.png", title: "המלצה לדרגה (צבא)", category: "recommendation" },
  { id: 16, src: "/gallery/doc-16.png", title: "רישום בפנקס הטכנאים (2014)", category: "certificate" },
  { id: 17, src: "/gallery/doc-17.png", title: "אישור זכאות לתואר", category: "certificate" },

  // --- New Student Messages ---
  { id: 18, src: "/gallery/doc-18.jpg", title: "הודעה מסטודנט 1", category: "student_message" },
  { id: 19, src: "/gallery/doc-19.jpg", title: "הודעה מסטודנט 2", category: "student_message" },
  { id: 20, src: "/gallery/doc-20.jpg", title: "הודעה מסטודנט 3", category: "student_message" },
  { id: 21, src: "/gallery/doc-21.jpg", title: "הודעה מסטודנט 4", category: "student_message" },
  { id: 22, src: "/gallery/doc-22.jpg", title: "הודעה מסטודנט 5", category: "student_message" },
  { id: 23, src: "/gallery/doc-23.jpg", title: "הודעה מסטודנט 6", category: "student_message" },
  { id: 24, src: "/gallery/doc-24.jpg", title: "הודעה מסטודנט 7", category: "student_message" },
  { id: 25, src: "/gallery/doc-25.jpg", title: "הודעה מסטודנט 8", category: "student_message" },
  { id: 26, src: "/gallery/doc-26.jpg", title: "הודעה מסטודנט 9", category: "student_message" },
  { id: 27, src: "/gallery/doc-27.jpg", title: "הודעה מסטודנט 10", category: "student_message" },
  { id: 28, src: "/gallery/doc-28.jpg", title: "הודעה מסטודנט 11", category: "student_message" },
  { id: 29, src: "/gallery/doc-29.jpg", title: "הודעה מסטודנט 12", category: "student_message" },
];


// --- Components ---

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 text-center" data-aos="fade-up">
    <h2 className="text-3xl font-bold text-slate-800 relative inline-block pb-4">
      {title}
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full"></span>
    </h2>
    {subtitle && <p className="text-slate-500 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-xl shadow-lg border border-slate-100 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}>
    {children}
  </div>
);

const SkillBar = ({ name, level, icon }: { name: string, level: number, icon: any }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2 text-slate-700 font-medium">
        <span className="text-blue-600">{icon}</span>
        {name}
      </div>
      <span className="text-slate-400 text-sm">{level}%</span>
    </div>
    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
      <div
        className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

// --- Gallery Slider Component ---

const GallerySlider = ({ items, filter }: { items: typeof galleryItems; filter: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filteredItems = items.filter(
    (item) => filter === "all" || item.category === filter
  );

  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const getImagePath = (src: string) => {
    if (src.startsWith("http://") || src.startsWith("https://")) return src;
    if (src.startsWith("/")) return src;
    return "/" + src;
  };

  if (filteredItems.length === 0) {
    return (
      <div className="text-center py-10 text-slate-500">
        לא נמצאו מסמכים בקטגוריה זו.
      </div>
    );
  }

  const activeItem = filteredItems[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case "certificate":
        return "תעודה";
      case "recommendation":
        return "המלצה רשמית";
      case "student_message":
        return "הודעת סטודנט";
      default:
        return "מסמך";
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* --- דסקטופ / טאבלט: סליידר מלא --- */}
      <div className="hidden md:block">
        <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[2/1] group">
          <div className="w-full h-full flex items-center justify-center bg-slate-800">
            <img
              src={getImagePath(activeItem.src)}
              alt={activeItem.title}
              className="max-h-full max-w-full object-contain transition-opacity duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).onerror = null;
                (e.target as HTMLImageElement).src =
                  "https://placehold.co/600x400/e2e8f0/475569?text=IMAGE+NOT+FOUND";
              }}
              onClick={() => setIsLightboxOpen(true)}
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
            <h3 className="text-xl font-bold">{activeItem.title}</h3>
            <p className="text-sm opacity-80">{getCategoryName(activeItem.category)}</p>
          </div>

          <button
            onClick={prevSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => setIsLightboxOpen(true)}
            className="absolute top-4 left-4 bg-black/50 text-white p-2 rounded-lg hover:bg-black/70 transition-colors"
          >
            <Maximize2 size={20} />
          </button>
        </div>

        {/* ת’אמבניילים בדסקטופ */}
        <div className="mt-6 hidden md:flex gap-3 overflow-x-auto pb-4 px-2 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent snap-x">
          {filteredItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all snap-start ${
                idx === currentIndex
                  ? "border-blue-600 ring-2 ring-blue-100 scale-105"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={getImagePath(item.src)}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://placehold.co/100x100/e2e8f0/475569?text=N/A";
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* --- מובייל: רק ת’אמבניילים, פתיחה בלייטבוקס --- */}
      <div className="md:hidden">
        <div
          className="flex gap-3 overflow-x-auto pb-4 px-2 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent snap-x"
          style={{ direction: "rtl" }}
        >
          {filteredItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentIndex(idx);
                setIsLightboxOpen(true);
              }}
              className="relative flex-shrink-0 w-[80%] h-auto rounded-lg overflow-hidden border-2 border-transparent snap-start active:scale-95 transition-all"
            >
              <img
                src={getImagePath(item.src)}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://placehold.co/100x100/e2e8f0/475569?text=N/A";
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* --- לייטבוקס (גם מובייל וגם דסקטופ) --- */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
            <X size={32} />
          </button>

          {/* ניווט בתוך הלייטבוקס */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full"
          >
            <ChevronRight size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>

          <img
            src={getImagePath(activeItem.src)}
            alt={activeItem.title}
            className="max-h-[90vh] max-w-full rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              (e.target as HTMLImageElement).onerror = null;
              (e.target as HTMLImageElement).src =
                "https://placehold.co/800x600/e2e8f0/475569?text=IMAGE+NOT+FOUND";
            }}
          />

          <div className="absolute bottom-6 left-0 right-0 text-center text-white">
            <h3 className="text-xl font-bold">{activeItem.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};


// --- Main Application ---

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'certificate' | 'recommendation' | 'student_message'>('all');

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'recommendations', 'gallery', 'certificates'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const NavLink = ({ to, label }: { to: string, label: string }) => (
    <button
      onClick={() => scrollTo(to)}
      className={`px-4 py-2 text-sm font-medium transition-colors ${activeSection === to ? 'text-blue-600 bg-blue-50 rounded-lg' : 'text-slate-600 hover:text-blue-600'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800" dir="rtl">

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollTo('home')}>
            יניב אברהם
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2">
            <NavLink to="home" label="ראשי" />
            <NavLink to="about" label="אודות" />
            <NavLink to="experience" label="ניסיון" />
            <NavLink to="recommendations" label="המלצות" />
            <NavLink to="gallery" label="גלריה" />
            <NavLink to="certificates" label="תעודות" />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 p-4 shadow-lg absolute w-full flex flex-col gap-4">
            <button onClick={() => scrollTo('home')} className="text-right py-2 px-4 hover:bg-slate-50 rounded">ראשי</button>
            <button onClick={() => scrollTo('about')} className="text-right py-2 px-4 hover:bg-slate-50 rounded">אודות</button>
            <button onClick={() => scrollTo('experience')} className="text-right py-2 px-4 hover:bg-slate-50 rounded">ניסיון</button>
            <button onClick={() => scrollTo('recommendations')} className="text-right py-2 px-4 hover:bg-slate-50 rounded">המלצות</button>
            <button onClick={() => scrollTo('gallery')} className="text-right py-2 px-4 hover:bg-slate-50 rounded">גלריה</button>
            <button onClick={() => scrollTo('certificates')} className="text-right py-2 px-4 hover:bg-slate-50 rounded">תעודות</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#2563eb" />
          </svg>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center md:text-right">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full border border-blue-200">
              תיק מועמד לראשות מגמה
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              שלום, אני <span className="text-blue-600">{personalInfo.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light">
              {personalInfo.title}
            </p>
            <p className="text-lg text-slate-500 mb-10 max-w-2xl leading-relaxed">
              {personalInfo.summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => window.print()}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg shadow-blue-200"
              >
                <Download size={20} />
                הורד קורות חיים
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full font-bold transition-all shadow-sm"
              >
                <Mail size={20} />
                צור קשר
              </button>
            </div>
          </div>

          <div className="flex-1 relative flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white">
                {/* תמונת הפרופיל של יניב אברהם */}
                <img
                  src={profileImageUrl}
                  alt="תמונת פרופיל של יניב אברהם"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                      parent.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-200"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
                    }
                  }}
                />
              </div>

              <div className="absolute top-0 right-0 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 p-2 rounded-full text-green-600"><Briefcase size={20} /></div>
                <div>
                  <p className="text-xs text-slate-500">ניסיון</p>
                  <p className="font-bold text-slate-800">14+ שנים</p>
                </div>
              </div>

              <div className="absolute bottom-10 left-0 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="bg-orange-100 p-2 rounded-full text-orange-600"><Award size={20} /></div>
                <div>
                  <p className="text-xs text-slate-500">הצטיינות</p>
                  <p className="font-bold text-slate-800">פרס יוספטל</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionTitle title="יכולות ומיומנויות" subtitle="שילוב ייחודי בין עולם הניהול התפעולי לעולמות ההוראה והטכנולוגיה" />

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-slate-800 flex items-center gap-2">
                <span className="bg-blue-600 w-2 h-8 rounded-full"></span>
                מיומנויות מקצועיות
              </h3>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                {skills.map((skill, index) => (
                  <SkillBar key={index} {...skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 text-slate-800 flex items-center gap-2">
                <span className="bg-cyan-500 w-2 h-8 rounded-full"></span>
                למה אני?
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <Card className="border-l-4 border-l-blue-500">
                  <h4 className="font-bold text-lg mb-2 text-blue-800">חיבור אקדמיה-תעשייה</h4>
                  <p className="text-slate-600">ניסיון עשיר בניהול קשרי מעסיקים, יצירת שיתופי פעולה עם חברות ענק והשמת בוגרים.</p>
                </Card>
                <Card className="border-l-4 border-l-cyan-500">
                  <h4 className="font-bold text-lg mb-2 text-cyan-800">חדשנות טכנולוגית</h4>
                  <p className="text-slate-600">שליטה בכלים מתקדמים כמו Power BI ו-AI, והיכולת להטמיע אותם בתהליכי עבודה והוראה.</p>
                </Card>
                <Card className="border-l-4 border-l-purple-500">
                  <h4 className="font-bold text-lg mb-2 text-purple-800">מצוינות ניהולית</h4>
                  <p className="text-slate-600">רקורד מוכח של ניהול צוותים, עמידה ביעדים וקבלת פרסי הצטיינות ארגוניים וצבאיים.</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle title="ניסיון מקצועי" />

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute right-0 md:right-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform translate-x-1/2 md:translate-x-0 hidden md:block"></div>

            <div className="space-y-12">
              {experience.map((job, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full md:text-center md:mb-0 relative">
                    <div className="hidden md:block absolute top-6 -right-4 md:left-1/2 md:right-auto md:-ml-2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                    <span className="inline-block px-4 py-1 bg-slate-100 text-blue-800 rounded-full text-sm font-semibold border border-slate-200">
                      {job.period}
                    </span>
                  </div>
                  <div className="flex-1 w-full">
                    <Card className="hover:border-blue-200 group">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{job.role}</h3>
                      <h4 className="text-md font-semibold text-slate-500 mb-4">{job.company}</h4>
                      <ul className="space-y-2">
                        {job.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Text */}
      <section id="recommendations" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-600 rounded-full opacity-20 blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle title="המלצות והערכה" />
          <p className="text-center text-slate-400 -mt-8 mb-16">מתוך מכתבי ההמלצה בתיק המועמד</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 relative hover:bg-slate-750 transition-colors">
                <div className="absolute -top-3 right-6 bg-blue-600 text-white p-2 rounded-lg">
                  <span className="text-2xl">❝</span>
                </div>
                <p className="text-slate-300 mb-6 mt-4 text-sm leading-relaxed italic opacity-90">
                  "{rec.text}"
                </p>
                <div className="border-t border-slate-700 pt-4 mt-auto">
                  <h5 className="font-bold text-white">{rec.name}</h5>
                  <p className="text-xs text-blue-400">{rec.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionTitle title="גלריית מסמכים" subtitle="לחצו על תמונה להגדלה" />

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            <button
              onClick={() => setGalleryFilter('all')}
              className={`px-4 py-2 rounded-full transition-all text-sm ${galleryFilter === 'all' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
            >
              הכל
            </button>
            <button
              onClick={() => setGalleryFilter('certificate')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm ${galleryFilter === 'certificate' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
            >
              <Award size={16} /> תעודות
            </button>
            <button
              onClick={() => setGalleryFilter('recommendation')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm ${galleryFilter === 'recommendation' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
            >
              <FileText size={16} /> המלצות רשמיות
            </button>
            <button
              onClick={() => setGalleryFilter('student_message')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm ${galleryFilter === 'student_message' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
            >
              <MessageSquare size={16} /> הודעות סטודנטים
            </button>
          </div>

          <GallerySlider items={galleryItems} filter={galleryFilter} />
        </div>
      </section>

      {/* Education List */}
      <section id="certificates" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle title="השכלה ותעודות" />

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-8 text-slate-800 flex items-center gap-3">
                <GraduationCap className="text-blue-600" /> השכלה פורמלית
              </h3>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-r-blue-600 border border-slate-100">
                    <h4 className="font-bold text-lg text-slate-900">{edu.degree}</h4>
                    <p className="text-slate-600">{edu.institution}</p>
                    <p className="text-sm text-slate-400 mt-2">{edu.year || edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-8 text-slate-800 flex items-center gap-3">
                <Award className="text-cyan-600" /> תעודות והוקרה
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {certificates.map((cert, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3 hover:shadow-md transition-shadow">
                    <div className="bg-yellow-50 text-yellow-600 p-2 rounded-full flex-shrink-0">
                      <Star size={16} />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-8 md:p-16 text-white text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">מוכנים לעבוד יחד?</h2>
            <p className="text-blue-200 mb-10 max-w-2xl mx-auto text-lg">
              אני זמין להובלת פרויקטים, ניהול מגמות ושיתופי פעולה המחברים בין טכנולוגיה, חינוך ותעשייה.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
              <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <Phone className="text-cyan-400" />
                <span className="text-xl font-mono">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <Mail className="text-cyan-400" />
                <span className="text-xl font-mono">{personalInfo.email}</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <MapPin className="text-cyan-400" />
                <span className="text-xl">{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <a href="#" className="p-3 bg-blue-600 hover:bg-blue-500 rounded-full transition-colors"><Linkedin /></a>
              <a href={`mailto:${personalInfo.email}`} className="p-3 bg-blue-600 hover:bg-blue-500 rounded-full transition-colors"><Mail /></a>
            </div>
          </div>

          <footer className="text-center text-slate-400 mt-12 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. כל הזכויות שמורות.
          </footer>
        </div>
      </section>

    </div>
  );
}
