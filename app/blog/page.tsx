import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { mammals } from "../data/mammals";

export const metadata: Metadata = {
  title: "動物部落格",
  description: "八篇哺乳類動物的童話風介紹文章",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-800 to-emerald-500 px-4 pt-12 pb-20 text-center sm:pt-16 sm:pb-24">
        <p className="text-base tracking-widest text-amber-200 sm:text-lg">✦ 床邊故事時間 ✦</p>
        <h1 className="mt-3 text-3xl font-bold text-white drop-shadow-[0_4px_0_rgba(88,28,135,0.8)] sm:text-5xl">
          📖 動物部落格
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-pink-50 sm:text-lg">
          每一位動物朋友都寫了一篇自我介紹，快來挑一篇喜歡的故事讀讀看吧！
        </p>
      </section>

      <section className="flex-1 bg-gradient-to-b from-emerald-500 to-emerald-600 px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-md gap-6 sm:max-w-5xl sm:grid-cols-2">
          {mammals.map((m) => (
            <Link
              key={m.slug}
              href={`/blog/${m.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border-4 border-amber-200 bg-amber-50 text-indigo-950 shadow-[0_8px_0_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-2 lg:flex-row"
            >
              <div className="relative h-48 shrink-0 overflow-hidden lg:h-auto lg:w-44">
                <Image
                  src={m.image}
                  alt={`${m.name}的照片`}
                  fill
                  sizes="(min-width: 1024px) 176px, (min-width: 640px) 50vw, 448px"
                  className="object-cover transition duration-500 group-hover:scale-110"
                  style={{ objectPosition: m.position ?? "center" }}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm font-semibold text-purple-500">
                  {m.emoji} {m.name}．{m.english}
                </p>
                <h2 className="mt-1 text-xl font-bold leading-snug">{m.article.title}</h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-indigo-900/75">{m.article.intro}</p>
                <span className="mt-auto pt-4 text-sm font-bold text-purple-700 group-hover:underline">
                  閱讀全文 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
