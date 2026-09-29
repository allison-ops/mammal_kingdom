import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMammal, mammals } from "../../data/mammals";

export function generateStaticParams() {
  return mammals.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const mammal = getMammal(slug);
  if (!mammal) return {};
  return { title: mammal.article.title, description: mammal.article.intro };
}

export default async function ArticlePage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const mammal = getMammal(slug);
  if (!mammal) notFound();

  const index = mammals.indexOf(mammal);
  const prev = mammals[(index - 1 + mammals.length) % mammals.length];
  const next = mammals[(index + 1) % mammals.length];
  const { article } = mammal;

  return (
    <div className="flex-1 bg-gradient-to-b from-indigo-950 via-purple-800 to-emerald-600 px-4 pt-8 pb-20 sm:px-6 sm:pt-12 sm:pb-24">
      <article className="mx-auto max-w-3xl overflow-hidden rounded-3xl border-4 border-amber-200 bg-amber-50 text-indigo-950 shadow-[0_10px_0_rgba(0,0,0,0.3)]">
        <div className="relative h-60 sm:h-80">
          <Image
            src={mammal.image}
            alt={`${mammal.name}（${mammal.english}）的照片`}
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
            style={{ objectPosition: mammal.position ?? "center" }}
          />
        </div>

        <div className="p-6 sm:p-10">
          <Link href="/blog" className="text-sm font-semibold text-purple-600 hover:underline">
            ← 回到動物部落格
          </Link>
          <p className="mt-4 text-sm font-semibold tracking-wide text-purple-500">
            {mammal.emoji} {mammal.name}．{mammal.english}
          </p>
          <h1 className="mt-1 text-2xl font-bold leading-snug sm:text-4xl">{article.title}</h1>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">📍 {mammal.habitat}</span>
            <span className="rounded-full bg-rose-100 px-3 py-1 text-rose-700">🍽️ {mammal.diet}</span>
          </div>

          <p className="mt-6 text-lg leading-loose text-indigo-900/90">{article.intro}</p>

          {article.sections.map((s) => (
            <section key={s.heading} className="mt-8">
              <h2 className="flex items-center gap-2 text-xl font-bold text-purple-800 sm:text-2xl">
                <span className="text-amber-500">✦</span>
                {s.heading}
              </h2>
              <p className="mt-3 leading-loose text-indigo-900/85">{s.body}</p>
            </section>
          ))}

          <aside className="mt-10 rounded-2xl border-4 border-dashed border-amber-300 bg-indigo-950 p-5 text-amber-50 sm:p-6">
            <p className="text-lg font-bold text-amber-200">🔮 魔法小知識</p>
            <p className="mt-2 leading-relaxed">{article.funFact}</p>
          </aside>

          <a
            href={mammal.credit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block text-xs text-indigo-900/50 hover:text-purple-600 hover:underline"
          >
            📷 照片：{mammal.credit.author} · {mammal.credit.license}（Wikimedia Commons）
          </a>
        </div>
      </article>

      <nav className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
        <Link
          href={`/blog/${prev.slug}`}
          className="rounded-2xl border-4 border-amber-200 bg-indigo-950/80 p-4 text-amber-50 transition hover:-translate-y-1 hover:bg-indigo-900"
        >
          <span className="text-sm text-amber-200">← 上一篇</span>
          <span className="mt-1 block font-bold">
            {prev.emoji} {prev.name}
          </span>
        </Link>
        <Link
          href={`/blog/${next.slug}`}
          className="rounded-2xl border-4 border-amber-200 bg-indigo-950/80 p-4 text-right text-amber-50 transition hover:-translate-y-1 hover:bg-indigo-900"
        >
          <span className="text-sm text-amber-200">下一篇 →</span>
          <span className="mt-1 block font-bold">
            {next.emoji} {next.name}
          </span>
        </Link>
      </nav>
    </div>
  );
}
