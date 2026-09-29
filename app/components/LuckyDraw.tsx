"use client";

import { useRef, useState } from "react";
import { mammals } from "../data/mammals";

const WIN_RATE = 0.8;
const RAINBOW = ["#ef4444", "#f97316", "#facc15", "#22c55e", "#3b82f6", "#6366f1", "#a855f7"];

type Result = { id: number; win: boolean; emoji: string; name: string };

function rollWin() {
  return Math.random() < WIN_RATE;
}

export default function LuckyDraw() {
  const [result, setResult] = useState<Result | null>(null);
  const [showRainbow, setShowRainbow] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  function draw(emoji: string, name: string) {
    const win = rollWin();
    // id 每次加一，讓同樣的結果也能重新播放動畫
    setResult((prev) => ({ id: (prev?.id ?? 0) + 1, win, emoji, name }));
    setShowRainbow(win);
    clearTimeout(timer.current);
    if (win) timer.current = setTimeout(() => setShowRainbow(false), 3500);
  }

  function closeRainbow() {
    clearTimeout(timer.current);
    setShowRainbow(false);
  }

  return (
    <div className="mt-8">
      <p className="text-lg font-bold text-amber-200">🎁 幸運抽獎：點一隻動物試試手氣！</p>
      <div className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
        {mammals.map((m) => (
          <button
            key={m.slug}
            type="button"
            onClick={() => draw(m.emoji, m.name)}
            aria-label={`用${m.name}抽獎`}
            title={m.name}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-200/60 bg-white/10 text-2xl transition hover:-translate-y-1 hover:scale-110 hover:border-amber-200 hover:bg-white/20 active:scale-95 sm:h-14 sm:w-14 sm:text-3xl"
          >
            {m.emoji}
          </button>
        ))}
      </div>

      <p aria-live="polite" className="mt-4 min-h-7 text-base">
        {result &&
          (result.win ? (
            <span key={result.id} className="inline-block animate-pop font-bold text-amber-200">
              🌈 {result.name}帶來了彩虹，恭喜中獎！
            </span>
          ) : (
            <span key={result.id} className="inline-block animate-shake font-bold text-pink-300">
              😢 {result.name}沒有抽中，再試一次！
            </span>
          ))}
      </p>

      {showRainbow && result && (
        <div
          key={result.id}
          onClick={closeRainbow}
          className="fixed inset-0 z-40 flex cursor-pointer flex-col items-center justify-center bg-indigo-950/40 px-4 backdrop-blur-[2px]"
        >
          <svg viewBox="0 0 400 220" className="w-full max-w-2xl" aria-hidden>
            {RAINBOW.map((color, i) => {
              const r = 180 - i * 16;
              return (
                <path
                  key={color}
                  d={`M ${200 - r} 210 A ${r} ${r} 0 0 1 ${200 + r} 210`}
                  fill="none"
                  stroke={color}
                  strokeWidth="16"
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray="1"
                  strokeDashoffset="1"
                  className="animate-draw"
                  style={{ animationDelay: `${i * 0.08}s` }}
                />
              );
            })}
          </svg>
          <div className="-mt-6 animate-pop rounded-full border-4 border-amber-200 bg-amber-50 px-6 py-3 text-center text-xl font-bold text-indigo-950 shadow-[0_6px_0_rgba(0,0,0,0.3)] [animation-delay:0.6s] sm:text-2xl">
            {result.emoji} 恭喜中獎！彩虹出現了！
          </div>
          <p className="mt-4 text-sm text-white/80">點一下任何地方關閉</p>
        </div>
      )}
    </div>
  );
}
