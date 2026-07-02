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
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-6">
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
          <section className="mt-12 text-left max-w-3xl mx-auto space-y-6">

  <div>
    <h2 className="text-2xl font-bold mb-3">
      いくら売れば赤字にならない？
    </h2>
    <p>
      商品を販売するときは、仕入れ値や送料、手数料を差し引いたあとに、
      どの価格なら赤字にならないか確認することが重要です。
      損益分岐点を把握しておくことで、最低販売価格を決めやすくなります。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      メルカリで赤字を防ぐ最低価格はいくら？
    </h2>
    <p>
      メルカリでは販売価格から手数料や送料が引かれるため、
      仕入れ値だけを基準に価格を決めると赤字になることがあります。
      出品前に最低価格を確認しておくと、値下げ交渉にも対応しやすくなります。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      値下げしても利益が残るか確認しよう
    </h2>
    <p>
      フリマ販売や物販では、売れやすくするために値下げする場面があります。
      ただし値下げ後に赤字になるなら意味がありません。
      損益分岐点を確認して、利益が残る範囲で価格調整することが大切です。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      よくある質問
    </h2>
    <p>
      Q. 送料込み販売の最低価格も確認できますか？<br />
      A. はい。送料や手数料を含めた最低販売価格の確認に使えます。<br /><br />

      Q. 値下げ交渉の判断にも使えますか？<br />
      A. はい。値下げ後に赤字にならないか確認できます。
    </p>
  </div>

</section>  
        <section className="mt-10 bg-white rounded-xl p-6">
  <h2 className="text-xl font-bold mb-4">
    損益分岐点を把握することが重要な理由
  </h2>

  <p className="mb-3">
    商品販売では、いくら以上で売れば利益が出るのかを事前に把握することが重要です。
    これを損益分岐点といいます。
  </p>

  <p className="mb-3">
    仕入れ価格や送料、販売手数料を考慮しないと、
    売れたのに赤字になるケースがあります。
  </p>

  <p>
    この損益分岐点計算ツールでは必要な販売価格を計算し、
    利益が出るラインを確認できます。
  </p>
</section>
        <section className="mt-10 rounded-xl border bg-white p-5">
  <h2 className="text-xl font-bold mb-3">
  他の便利ツール
</h2>

<ul className="list-disc pl-6 space-y-2 text-blue-600 underline">
  <li>
    <a href="https://calc-tools-mauve.vercel.app/">
      総合計算ツール
    </a>
  </li>
  <li>
    <a href="https://shipping-calc-olive.vercel.app/">
      送料計算ツール
    </a>
  </li>
  <li>
    <a href="https://price-reverse-calc.vercel.app/">
      販売価格逆算ツール
    </a>
  </li>
  <li>
    <a href="https://fee-calc-seven.vercel.app/">
      手数料計算ツール
    </a>
  </li>
  <li>
    <a href="https://profit-rate-calc.vercel.app/">
      利益率計算ツール
    </a>
  </li>
  <li>
    <a href="https://discount-rate-calc.vercel.app/">
      割引率計算ツール
    </a>
  </li>
  <li>
    <a href="https://shipping-profit-calc.vercel.app/">
      送料込み利益計算ツール
    </a>
  </li>
  <li>
    <a href="https://amazon-fee-calc.vercel.app/">
      Amazon手数料計算ツール
    </a>
  </li>
  <li>
    <a href="https://roi-calc-woad.vercel.app/">
      ROI計算ツール
    </a>
  </li>
</ul>
</section>
<p className="mt-6 text-xs text-gray-500 text-center">
  このサイトはメルカリ・Amazon・ラクマ・せどり・副業に役立つ無料計算ツールを公開しています。
</p>
<footer className="mt-8 text-center text-sm text-gray-500">
  <a className="underline" href="/privacy">
    プライバシーポリシー
  </a>
</footer>
    </main>
  );
}