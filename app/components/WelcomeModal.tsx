"use client";

import { useState, type FormEvent } from "react";
import { saveUsername, useUsername } from "../lib/username";

// 名稱存在 localStorage，只有第一次進站（還沒有名稱）時才會詢問
export default function WelcomeModal() {
  const storedName = useUsername();
  const [input, setInput] = useState("");
  // 剛輸入完的名稱，用來顯示歡迎畫面；按下「開始探索」後清掉
  const [name, setName] = useState<string | null>(null);

  // undefined 表示還沒讀到 localStorage，先不顯示，避免老朋友看到視窗閃一下
  if (storedName === undefined) return null;
  if (storedName !== null && name === null) return null;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setName(trimmed);
    saveUsername(trimmed);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-950/70 px-4 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-md rounded-3xl border-4 border-amber-200 bg-amber-50 p-6 text-center text-indigo-950 shadow-[0_10px_0_rgba(0,0,0,0.3)] sm:p-8">
        <span className="absolute -top-4 left-6 text-3xl animate-twinkle">✨</span>
        <span className="absolute -top-3 right-8 text-2xl animate-twinkle [animation-delay:1s]">⭐</span>

        {name === null ? (
          <form onSubmit={handleSubmit}>
            <div className="text-6xl animate-float">🐼</div>
            <h2 id="welcome-title" className="mt-4 text-2xl font-bold sm:text-3xl">
              歡迎來到奇幻動物王國！
            </h2>
            <p className="mt-2 text-indigo-900/70">請問小探險家，你叫什麼名字呢？</p>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="輸入你的名字"
              maxLength={20}
              autoFocus
              aria-label="使用者名稱"
              className="mt-6 w-full rounded-full border-4 border-purple-300 bg-white px-5 py-3 text-center text-lg outline-none transition focus:border-purple-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="mt-5 w-full rounded-full border-4 border-white bg-amber-300 px-6 py-3 text-lg font-bold text-indigo-950 shadow-[0_6px_0_#b45309] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#b45309] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
            >
              確認
            </button>
          </form>
        ) : (
          <div>
            <div className="text-6xl animate-float">🎉</div>
            <h2 id="welcome-title" className="mt-4 text-2xl font-bold sm:text-3xl">
              {name}，歡迎使用～
            </h2>
            <p className="mt-2 text-indigo-900/70">動物朋友們已經等不及要認識你了！</p>
            <button
              type="button"
              onClick={() => setName(null)}
              autoFocus
              className="mt-6 w-full rounded-full border-4 border-white bg-pink-300 px-6 py-3 text-lg font-bold text-indigo-950 shadow-[0_6px_0_#9d174d] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#9d174d]"
            >
              開始探索 🐾
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
