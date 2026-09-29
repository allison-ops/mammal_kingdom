"use client";

import { useSyncExternalStore } from "react";

const KEY = "username";
const EVENT = "username-change";

// localStorage 無法使用時（例如被封鎖），退而把名稱記在記憶體裡
let memoryName: string | null = null;

function subscribe(callback: () => void) {
  // storage 事件處理其他分頁的變更，自訂事件處理同一頁面內的變更
  window.addEventListener("storage", callback);
  window.addEventListener(EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(EVENT, callback);
  };
}

function getSnapshot(): string | null {
  try {
    return localStorage.getItem(KEY) ?? memoryName;
  } catch {
    return memoryName;
  }
}

// 伺服器端讀不到 localStorage，回傳 undefined 代表「還不知道」
function getServerSnapshot(): string | null | undefined {
  return undefined;
}

/** 回傳儲存的名稱：undefined = 尚未讀取、null = 沒有名稱、string = 名稱 */
export function useUsername() {
  return useSyncExternalStore<string | null | undefined>(subscribe, getSnapshot, getServerSnapshot);
}

export function saveUsername(name: string) {
  memoryName = name;
  try {
    localStorage.setItem(KEY, name);
  } catch {
    // 寫入失敗時名稱只保留到重新整理為止
  }
  window.dispatchEvent(new Event(EVENT));
}
