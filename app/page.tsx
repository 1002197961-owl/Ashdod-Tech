import { ArrowLeft, Award, BookOpen, CheckCircle2, GraduationCap, LayoutDashboard, Lightbulb, PlayCircle, Search, Sparkles, UsersRound } from 'lucide-react';

const ASHDOD_LOGO_URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5chep-w2me4Nh0nza0yd2hZIYQjIP8mgOe92ChPd0lQ&s=10';

const navItems = ['דף הבית', 'קטלוג קורסים', 'קורסי Campus IL', 'יוצרים קורס', 'הקורסים שלי', 'תעודות'];

const stats = [
  { value: '3', label: 'קהלי יעד: תלמידים, נוער ומורים' },
  { value: '6', label: 'שלבים לבניית קורס צעירים' },
  { value: '24/7', label: 'למידה עצמאית בקצב אישי' },
];

const categories = [
  'בינה מלאכותית',
  'תכנות ופיתוח',
  'סייבר',
  'רובוטיקה',
  'אנגלית',
  'עיצוב דיגיטלי',
  'מנהיגות צעירה',
  'מיומנויות למידה',
];

const courses = [
  {
    title: 'AI לתלמידים סקרנים',
    source: 'Ashdod Tech',
    audience: 'בני נוער',
    level: 'מתחילים',
    progress: 64,
    tag: 'חדש',
  },
  {
    title: 'מבוא לתכנות יצירתי',
    source: 'Campus IL',
    audience: 'תלמידים',
    level: 'בסיסי',
    progress: 28,
    tag: 'קמפוס IL',
  },
  {
    title: 'מורים יוצרים למידה דיגיטלית',
    source: 'Ashdod Tech',
    audience: 'מורים',
    level: 'מעשי',
    progress: 0,
    tag: 'מורים',
  },
];

const creatorSteps = [
  'מגישים רעיון לקורס',
  'מקבלים מלווה מקצועי',
  'עוברים הכשרה קצרה',
  'בונים תסריט ותוכן',
  'מצלמים ועורכים',
  'מעלים את הקורס לאתר',
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl">
        <div className="section-shell flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-1.5 shadow-lg ring-1 ring-slate-100">
              <img src={ASHDOD_LOGO_URL} alt="אשדוד - מצוינות עם נשמה" className="h-full w-full object-contain" />
            </div>
            <div>
              <p className="text-lg font-black text-ashdod-navy">Ashdod Tech</p>
              <p className="text-xs font-semibold text-slate-500">למידה עירונית לתושבי אשדוד</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-bold text-slate-600 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.replaceAll(' ', '-')}`} className="transition hover:text-ashdod-blue">
                {item}
              </a>
            ))}
          </nav>

          <a href="#כניסה" className="rounded-full bg-ashdod-blue px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5">
            כניסה / הרשמה
          </a>
        </div>
      </header>

      <section id="דף-הבית" className="section-shell grid gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-ashdod-cyan/30 bg-white px-4 py-2 text-sm font-black text-ashdod-blue shadow-sm">
            <Sparkles size={18} /> פלטפורמת למידה עירונית חדשה
          </div>
          <h1 className="text-4xl font-black leading-tight text-ashdod-navy md:text-6xl">
            לומדים, יוצרים ומובילים ידע באשדוד
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-600">
            Ashdod Tech מחברת בין קורסים עירוניים, קורסי Campus IL ומסלול ייחודי שבו ילדים ובני נוער יכולים להציע, לבנות ולהעביר קורסים בליווי מקצועי.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#קטלוג-קורסים" className="inline-flex items-center justify-center gap-2 rounded-full bg-ashdod-blue px-7 py-4 font-black text-white shadow-xl shadow-blue-900/20">
              מצאו קורס מתאים <Search size={19} />
            </a>
            <a href="#יוצרים-קורס" className="inline-flex items-center justify-center gap-2 rounded-full border border-ashdod-blue/20 bg-white px-7 py-4 font-black text-ashdod-blue shadow-sm">
              יש לי רעיון לקורס <Lightbulb size={19} />
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <p className="text-3xl font-black text-ashdod-blue">{stat.value}</p>
                <p className="mt-1 text-sm font-bold text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card relative rounded-[2rem] p-5">
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-ashdod-orange/20 blur-3xl" />
          <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-black text-ashdod-cyan">הדשבורד שלי</p>
                <h2 className="text-2xl font-black text-ashdod-navy">היסטוריית למידה</h2>
              </div>
              <LayoutDashboard className="text-ashdod-blue" />
            </div>

            <div className="space-y-4">
              {courses.map((course) => (
                <article key={course.title} className="rounded-3xl border border-slate-100 bg-slate-50/80 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-ashdod-blue shadow-sm">{course.tag}</span>
                      <h3 className="mt-3 text-lg font-black text-ashdod-navy">{course.title}</h3>
                      <p className="text-sm font-bold text-slate-500">{course.source} · {course.audience} · {course.level}</p>
                    </div>
                    <PlayCircle className="mt-2 text-ashdod-green" />
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white">
                    <div className="h-2 rounded-full bg-gradient-to-l from-ashdod-blue to-ashdod-green" style={{ width: `${course.progress || 8}%` }} />
                  </div>
                  <p className="mt-2 text-xs font-black text-slate-500">{course.progress}% התקדמות</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="קטלוג-קורסים" className="section-shell py-12">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black text-ashdod-orange">קטלוג קורסים</p>
            <h2 className="text-3xl font-black text-ashdod-navy">כל מסלולי הלמידה במקום אחד</h2>
          </div>
          <div className="flex rounded-full bg-white p-2 shadow-sm ring-1 ring-slate-100">
            <input aria-label="חיפוש קורסים" placeholder="חיפוש לפי נושא, גיל או רמה" className="w-full bg-transparent px-4 py-2 outline-none md:w-80" />
            <button className="rounded-full bg-ashdod-blue px-5 py-2 font-black text-white">חפש</button>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((category) => (
            <button key={category} className="rounded-3xl bg-white p-5 text-right font-black text-ashdod-navy shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:text-ashdod-blue">
              {category}
            </button>
          ))}
        </div>
      </section>

      <section id="קורסי-Campus-IL" className="section-shell py-12">
        <div className="grid gap-6 rounded-[2rem] bg-ashdod-navy p-6 text-white md:grid-cols-[1fr_0.7fr] md:p-10">
          <div>
            <p className="text-sm font-black text-ashdod-cyan">Campus IL בתוך Ashdod Tech</p>
            <h2 className="mt-2 text-3xl font-black">לומדים באתר קמפוס IL — ושומרים היסטוריה אצלנו</h2>
            <p className="mt-4 max-w-3xl text-white/75">
              קורסים חיצוניים יופיעו במערכת כרשומות למידה מקושרות. המשתמש יעבור לקמפוס IL, ובמקביל Ashdod Tech תשמור התחלה, קישור, סטטוס ותעודה בהיסטוריה האישית.
            </p>
          </div>
          <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
            {['מעבר לדף נחיתה של Campus IL', 'שמירה בהיסטוריית הקורסים', 'סימון סטטוס: נפתח / בלמידה / הושלם'].map((item) => (
              <p key={item} className="mb-3 flex items-center gap-2 font-bold"><CheckCircle2 className="text-ashdod-green" size={20} /> {item}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="יוצרים-קורס" className="section-shell py-12">
        <div className="mb-7 flex items-center gap-3">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ashdod-orange text-white"><UsersRound /></div>
          <div>
            <p className="text-sm font-black text-ashdod-orange">יוצרים קורס</p>
            <h2 className="text-3xl font-black text-ashdod-navy">ילדים ובני נוער הופכים רעיון לקורס אמיתי</h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {creatorSteps.map((step, index) => (
            <article key={step} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <p className="text-3xl font-black text-ashdod-cyan">0{index + 1}</p>
              <h3 className="mt-3 text-xl font-black text-ashdod-navy">{step}</h3>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-3xl bg-gradient-to-l from-ashdod-blue to-ashdod-cyan p-6 text-white shadow-xl shadow-blue-900/20">
          <h3 className="text-2xl font-black">טופס הגשת הצעה לקורס</h3>
          <p className="mt-2 text-white/85">בשלב הבא נוסיף טופס עם שם הקורס, קהל יעד, תקציר, ציוד נדרש, שם היוצר/ת ובקשה למלווה.</p>
          <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-black text-ashdod-blue">
            התחלת הגשה <ArrowLeft size={18} />
          </button>
        </div>
      </section>

      <section id="הקורסים-שלי" className="section-shell grid gap-6 py-12 md:grid-cols-3">
        {[
          { icon: BookOpen, title: 'הקורסים שלי', text: 'רשימת קורסים שנפתחו, נשמרו או הושלמו.' },
          { icon: GraduationCap, title: 'דשבורד מורה', text: 'יצירת קורס, העלאת שיעורים וצפייה בנתוני למידה.' },
          { icon: Award, title: 'תעודות', text: 'שמירת תעודות והשלמות מתוך המערכת וקורסים חיצוניים.' },
        ].map((item) => (
          <article key={item.title} className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-100">
            <item.icon className="text-ashdod-blue" size={34} />
            <h3 className="mt-4 text-2xl font-black text-ashdod-navy">{item.title}</h3>
            <p className="mt-2 font-medium leading-7 text-slate-600">{item.text}</p>
          </article>
        ))}
      </section>

      <footer className="mt-12 border-t border-slate-100 bg-white py-8">
        <div className="section-shell flex flex-col justify-between gap-3 text-sm font-bold text-slate-500 md:flex-row">
          <p>Ashdod Tech · עיר לומדת, יוצרת ומובילה</p>
          <p>Prototype v0.1 · RTL · Next.js</p>
        </div>
      </footer>
    </main>
  );
}
