"use client";

import Link from "next/link";
import { useState } from "react";
import { useUsername } from "../lib/username";

const links = [
  ["/#animals", "動物朋友"],
  ["/#traits", "哺乳類小知識"],
  ["/blog", "動物小故事"],
  ["#about", "關於我們"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const username = useUsername();

  return (
    <header className="sticky top-0 z-20 border-b-2 border-amber-300/40 bg-indigo-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2 whitespace-nowrap text-xl font-bold text-amber-200 sm:text-2xl">
          <span className="animate-twinkle">✨</span>
          奇幻動物王國
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          {/* 桌機：橫向選單 */}
          <nav className="hidden gap-2 md:flex">
            {links.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full px-3 py-1.5 text-amber-50 transition hover:bg-amber-300 hover:text-indigo-950"
              >
                {label}
              </Link>
            ))}
          </nav>

          {username && (
            <span
              title={`Hi ${username}`}
              className="max-w-[6.5rem] truncate rounded-full bg-amber-300 px-3 py-1.5 text-sm font-bold text-indigo-950 shadow-[0_3px_0_#b45309] sm:max-w-[12rem] sm:text-base"
            >
              Hi {username}
            </span>
          )}

          {/* 手機與平板：漢堡選單按鈕 */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "關閉選單" : "開啟選單"}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-amber-200 text-xl text-amber-200 transition hover:bg-amber-300 hover:text-indigo-950 md:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-amber-300/30 px-4 pb-4 pt-2 md:hidden">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-lg text-amber-50 transition hover:bg-amber-300 hover:text-indigo-950"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
