import Image from "next/image";
import Link from "next/link";
import { mammals, type Mammal } from "./data/mammals";

const traits = [
  { icon: "🍼", title: "喝奶長大", text: "媽媽用乳汁餵養寶寶，這就是「哺乳類」名字的由來。" },
  { icon: "🧸", title: "身上有毛", text: "毛髮幫助保暖，就連海豚剛出生時也有幾根小鬍鬚。" },
  { icon: "❤️", title: "恆溫動物", text: "不管天氣冷熱，體溫都能維持穩定，隨時活力滿滿。" },
];

// 固定位置的星星，避免伺服器與瀏覽器產生的畫面不一致
const stars = Array.from({ length: 40 }, (_, i) => ({
  top: `${(i * 37) % 100}%`,
  left: `${(i * 61) % 100}%`,
  size: (i % 3) + 2,
  delay: `${(i % 7) * 0.4}s`,
}));

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-800 to-pink-400 px-4 pt-12 pb-32 text-center sm:pt-20 sm:pb-40"
    >
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-amber-100 animate-twinkle"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay }}
        />
      ))}
      <div className="absolute top-6 right-[8%] h-12 w-12 rounded-full bg-amber-100 shadow-[0_0_40px_12px_rgba(254,243,199,0.5)] sm:top-10 sm:h-20 sm:w-20 sm:shadow-[0_0_60px_20px_rgba(254,243,199,0.5)]" />

      <div className="relative mx-auto max-w-3xl">
        <p className="mb-4 text-base tracking-widest text-amber-200 sm:text-lg">✦ 很久很久以前 ✦</p>
        <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-[0_4px_0_rgba(88,28,135,0.8)] sm:text-5xl lg:text-6xl">
          一起走進
          <span className="block bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-transparent">
            哺乳類動物的魔法世界
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-pink-50 sm:text-lg">
          從草原上的萬獸之王，到夜空中飛翔的小蝙蝠，每一位動物朋友都有屬於自己的精彩故事。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 sm:mt-10">
          <a
            href="#animals"
            className="inline-block rounded-full border-4 border-white bg-amber-300 px-6 py-3 text-lg font-bold text-indigo-950 shadow-[0_6px_0_#b45309] transition hover:-translate-y-1 hover:shadow-[0_10px_0_#b45309] active:translate-y-1 active:shadow-[0_2px_0_#b45309] sm:px-8 sm:text-xl"
          >
            認識動物朋友 🐾
          </a>
          <Link
            href="/blog"
            className="inline-block rounded-full border-4 border-white bg-pink-300 px-6 py-3 text-lg font-bold text-indigo-950 shadow-[0_6px_0_#9d174d] transition hover:-translate-y-1 hover:shadow-[0_10px_0_#9d174d] active:translate-y-1 active:shadow-[0_2px_0_#9d174d] sm:px-8 sm:text-xl"
          >
            閱讀動物故事 📖
          </Link>
        </div>
        <div className="mt-10 flex justify-center gap-4 text-4xl sm:mt-12 sm:gap-6 sm:text-5xl">
          {["🦁", "🐘", "🐼"].map((e, i) => (
            <span key={e} className="animate-float" style={{ animationDelay: `${i * 0.6}s` }}>
              {e}
            </span>
          ))}
        </div>
      </div>

      {/* 底部的圓弧山丘 */}
      <div className="absolute -bottom-24 -left-[10%] h-48 w-[70%] rounded-[50%] bg-emerald-400" />
      <div className="absolute -bottom-28 -right-[10%] h-52 w-[70%] rounded-[50%] bg-emerald-500" />
    </section>
  );
}

function AnimalCard({ mammal }: { mammal: Mammal }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border-4 border-amber-200 bg-amber-50 text-indigo-950 shadow-[0_8px_0_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-2 hover:rotate-1">
      <div className="relative h-52 border-b-4 border-amber-200 sm:h-48">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={mammal.image}
            alt={`${mammal.name}（${mammal.english}）的照片`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 448px"
            className="object-cover transition duration-500 group-hover:scale-110"
            style={{ objectPosition: mammal.position ?? "center" }}
          />
        </div>
        <span
          className={`absolute bottom-0 right-3 z-10 flex h-14 w-14 translate-y-1/3 items-center justify-center rounded-full border-4 border-amber-50 bg-gradient-to-br text-3xl shadow-lg transition duration-300 group-hover:scale-125 group-hover:-rotate-12 ${mammal.accent}`}
        >
          {mammal.emoji}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-2xl font-bold">{mammal.name}</h3>
        <p className="text-sm font-medium tracking-wide text-purple-500">{mammal.english}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">📍 {mammal.habitat}</span>
          <span className="rounded-full bg-rose-100 px-3 py-1 text-rose-700">🍽️ {mammal.diet}</span>
        </div>
        <p className="mt-3 leading-relaxed text-indigo-900/80">{mammal.fact}</p>
        <Link
          href={`/blog/${mammal.slug}`}
          className="mt-4 self-start rounded-full bg-indigo-950 px-4 py-2 text-sm font-bold text-amber-200 transition hover:bg-purple-700"
        >
          閱讀牠的故事 →
        </Link>
        <a
          href={mammal.credit.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto block pt-4 text-xs text-indigo-900/50 hover:text-purple-600 hover:underline"
        >
          📷 {mammal.credit.author} · {mammal.credit.license}
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <section id="animals" className="scroll-mt-16 bg-gradient-to-b from-emerald-500 to-emerald-600 px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-white drop-shadow-[0_3px_0_rgba(6,78,59,0.8)] sm:text-4xl">
            🌟 動物朋友大集合 🌟
          </h2>
          <p className="mt-3 text-center text-base text-emerald-50 sm:text-lg">點一點或把滑鼠移到卡片上，動物們會跟你打招呼喔！</p>
          <div className="mx-auto mt-10 grid max-w-md gap-6 sm:mt-12 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4">
            {mammals.map((m) => (
              <AnimalCard key={m.slug} mammal={m} />
            ))}
          </div>
        </div>
      </section>

      <section id="traits" className="flex-1 scroll-mt-16 bg-emerald-600 px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl border-4 border-dashed border-amber-200 bg-indigo-950/90 p-6 sm:rounded-[2.5rem] sm:p-12">
          <h2 className="text-center text-2xl font-bold text-amber-200 sm:text-3xl">🔮 什麼是哺乳類？</h2>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
            {traits.map((t) => (
              <div key={t.title} className="rounded-2xl bg-white/10 p-6 text-center">
                <div className="text-5xl animate-float">{t.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-white">{t.title}</h3>
                <p className="mt-2 text-indigo-100">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
