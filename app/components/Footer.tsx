import LuckyDraw from "./LuckyDraw";

export default function Footer() {
  return (
    <footer id="about" className="relative mt-auto bg-indigo-950 px-4 pt-14 pb-8 text-center sm:pt-16">
      <svg
        className="absolute -top-px left-0 h-12 w-full text-emerald-600"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0,0 C300,60 900,60 1200,0 L1200,0 L0,0 Z" fill="currentColor" />
      </svg>
      <p className="text-2xl font-bold text-amber-200">✨ 奇幻動物王國 ✨</p>
      <p className="mx-auto mt-3 max-w-md text-indigo-200">
        願每一位小探險家都能用好奇的眼睛，發現大自然的魔法。
      </p>
      <LuckyDraw />
      <p className="mt-6 text-sm text-indigo-300">© 2026 奇幻動物王國．Next.js 練習專案</p>
    </footer>
  );
}
