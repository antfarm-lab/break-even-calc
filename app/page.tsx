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
    何個売れば固定費を回収できる？
  </h2>
  <p>
    商品販売では、利益が出ていても固定費を回収するまでは全体として黒字とはいえません。
    固定費と1個あたりの利益から、何個販売すれば損益分岐点を超えられるか確認できます。
  </p>
</div>

  <div>
  <h2 className="text-2xl font-bold mb-3">
    1個あたりの利益が増えると損益分岐点はどう変わる？
  </h2>
  <p>
    1個あたりの利益が大きくなるほど、固定費を回収するために必要な販売個数は少なくなります。
    利益額を変えて比較することで、どの条件なら早く黒字化できるか確認できます。
  </p>
</div>

  <div>
  <h2 className="text-2xl font-bold mb-3">
    固定費が増えると必要な販売個数も増える
  </h2>
  <p>
    広告費やシステム利用料などの固定費が大きくなるほど、
    黒字化するために必要な販売個数も増えます。
    固定費と1個あたりの利益を変えながら、
    事業や商品の採算ラインを確認できます。
  </p>
</div>

  <div>
  <h2 className="text-2xl font-bold mb-3">
    よくある質問
  </h2>
  <p>
    Q. 損益分岐点の販売個数はどう計算していますか？<br />
    A. 固定費を1個あたりの利益で割り、黒字化に必要な販売個数を切り上げて計算します。<br /><br />

    Q. 固定費には何を入力すればいいですか？<br />
    A. 広告費・システム利用料・家賃など、販売個数に関係なく発生する費用を入力してください。<br /><br />

    Q. 1個あたりの利益には何を入力すればいいですか？<br />
    A. 販売価格から仕入れ値・送料・販売手数料などを差し引いた、1個あたりの利益を入力してください。
  </p>
</div>

</section>  
        <section className="mt-10 bg-white rounded-xl p-6">
  <h2 className="text-xl font-bold mb-4">
    損益分岐点を把握することが重要な理由
  </h2>

  <p className="mb-3">
    商品販売や事業では、利益が出る商品でも固定費を回収できなければ全体として黒字にはなりません。
  </p>

  <p className="mb-3">
    固定費と1個あたりの利益から必要な販売個数を確認することで、
    どれくらい売れば黒字化できるのかを把握できます。
  </p>

  <p>
    この損益分岐点計算ツールでは、固定費を回収するために必要な販売個数を自動計算できます。
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