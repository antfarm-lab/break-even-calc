"use client";

import { useMemo, useState } from "react";

export default function Home() {
  const [fixedCost, setFixedCost] = useState("");
  const [unitProfit, setUnitProfit] = useState("");

  const breakEvenCount = useMemo(() => {
    const fixed = Number(fixedCost);
    const profit = Number(unitProfit);

    if (!fixed || !profit || profit <= 0) return 0;

    return Math.ceil(fixed / profit);
  }, [fixedCost, unitProfit]);

  return (
    <main className="min-h-screen bg-gray-50 p-6 text-gray-900">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow">
        <h1 className="text-2xl font-bold">損益分岐点計算ツール</h1>
        <p className="mt-2 text-sm text-gray-600">
          固定費と1個あたりの利益から、何個売れば黒字になるか計算します。
        </p>

        <div className="mt-6 space-y-4">
          <label className="block">
            <span className="text-sm font-medium">固定費（円）</span>
            <input
              className="mt-1 w-full rounded-lg border p-3"
              type="number"
              value={fixedCost}
              onChange={(e) => setFixedCost(e.target.value)}
              placeholder="例：30000"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">1個あたりの利益（円）</span>
            <input
              className="mt-1 w-full rounded-lg border p-3"
              type="number"
              value={unitProfit}
              onChange={(e) => setUnitProfit(e.target.value)}
              placeholder="例：1200"
            />
          </label>
        </div>

        <div className="mt-6 rounded-xl bg-gray-100 p-5">
          <p className="text-sm text-gray-600">損益分岐点</p>
          <p className="mt-2 text-4xl font-bold">
            {breakEvenCount.toLocaleString()} 個
          </p>
        </div>
      </div>
              <div className="mt-6 border-t pt-4">
          <p className="mb-2 text-sm font-bold text-gray-700">
            関連ツール
          </p>
          <ul className="space-y-2 text-sm text-blue-600 underline">
            <li>
              <a href="https://calc-tools.vercel.app/">
                メルカリ利益計算ツール
              </a>
            </li>
            <li>
              <a href="https://roi-calc.vercel.app/">
                ROI計算ツール
              </a>
            </li>
            <li>
              <a href="https://profit-rate-calc.vercel.app/">
                利益率計算ツール
              </a>
            </li>
          </ul>
        </div>
        <section className="mt-10 rounded-xl border bg-white p-5">
  <h2 className="mb-3 text-lg font-bold">ほかの便利ツール</h2>
  <div className="grid gap-2 text-sm">
    <a className="text-blue-600 underline" href="https://calc-tools-mauve.vercel.app/">
      利益計算ツール
    </a>
    <a className="text-blue-600 underline" href="https://shipping-calc-olive.vercel.app/">
      送料計算ツール
    </a>
    <a className="text-blue-600 underline" href="https://fee-calc-seven.vercel.app/">
      手数料計算ツール
    </a>
  </div>
</section>
<footer className="mt-8 text-center text-sm text-gray-500">
  <a className="underline" href="/privacy">
    プライバシーポリシー
  </a>
</footer>
    </main>
  );
}