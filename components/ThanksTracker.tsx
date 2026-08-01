"use client";

/**
 * ThanksTracker — 問い合わせ完了を GA4 に 1 回だけ送る
 * ------------------------------------------------------------------
 * /thanks は問い合わせフォームの送信後にだけ表示されるページなので、
 * ここで generate_lead を送る。
 *
 * 二重送信を防ぐため
 *  ・同じタブ内での再実行を module スコープのフラグで止める
 *  ------------------------------------------------------------------
 *  ・リロードや戻る操作での再送を sessionStorage のキーで止める
 * の 2 段で抑えている。
 */

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

const STORAGE_KEY = "arch_lead_sent";

/* 同じタブで React が再実行されたときの重複を防ぐ */
let sentInThisSession = false;

export default function ThanksTracker() {
  useEffect(() => {
    if (sentInThisSession) return;

    try {
      if (window.sessionStorage.getItem(STORAGE_KEY)) return;
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // sessionStorage が使えない環境では、タブ内フラグだけで判定する
    }

    sentInThisSession = true;
    sendGAEvent("event", "generate_lead", {
      // 問い合わせ完了。金額は扱わないため value は送らない
      method: "contact_form",
      page_location: window.location.href,
    });
  }, []);

  return null;
}
