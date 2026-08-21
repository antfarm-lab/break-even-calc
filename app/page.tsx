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
    const fixed = Number(fixedCost) || 0;
  const profit = Number(unitProfit) || 0;

  const recoveryRate =
    fixed > 0 && profit > 0 ? (profit / fixed) * 100 : 0;

  const countScore =
    breakEvenCount <= 0
      ? 0
      : breakEvenCount <= 10
      ? 60
      : breakEvenCount <= 25
      ? 50
      : breakEvenCount <= 50
      ? 35
      : breakEvenCount <= 100
      ? 20
      : 10;

  const recoveryScore =
    recoveryRate <= 0
      ? 0
      : recoveryRate >= 10
      ? 40
      : recoveryRate >= 5
      ? 30
      : recoveryRate >= 2
      ? 20
      : 10;

  const score = countScore + recoveryScore;

  let rank = "D";

  if (score >= 85) {
    rank = "S";
  } else if (score >= 70) {
    rank = "A";
  } else if (score >= 55) {
    rank = "B";
  } else if (score >= 40) {
    rank = "C";
  }

  const comment =
    rank === "S"
      ? "少ない販売個数で固定費を回収できる、黒字化しやすい条件です。"
      : rank === "A"
      ? "固定費を比較的回収しやすく、黒字化を狙いやすい条件です。"
      : rank === "B"
      ? "黒字化は可能ですが、必要販売数と販売ペースを確認して判断しましょう。"
      : rank === "C"
      ? "固定費回収までにある程度の販売数が必要です。利益額や固定費の見直しも検討しましょう。"
      : "固定費回収のハードルが高い条件です。固定費または1個あたりの利益を見直しましょう。";

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
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
  <p className="text-sm font-semibold text-gray-500">
    ANT FARM SCORE
  </p>

  {fixedCost === "" || unitProfit === "" ? (
    <p className="mt-3 text-sm text-gray-600">
      固定費と1個あたりの利益を入力するとSCOREを判定します。
    </p>
  ) : (
    <>
      <div className="mt-2 flex items-end justify-between gap-4">
        <div>
          <p className="text-4xl font-extrabold text-gray-900">
            {score}
            <span className="ml-1 text-lg font-semibold text-gray-500">
              / 100
            </span>
          </p>

          <p className="mt-1 text-sm font-semibold text-gray-700">
            ランク：{rank}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xl">
            {score >= 85
              ? "⭐⭐⭐⭐⭐"
              : score >= 70
              ? "⭐⭐⭐⭐☆"
              : score >= 55
              ? "⭐⭐⭐☆☆"
              : score >= 40
              ? "⭐⭐☆☆☆"
              : "⭐☆☆☆☆"}
          </p>
        </div>
      </div>

      <div className="mt-5 border-t border-gray-200 pt-4">
        <p className="text-sm font-semibold text-gray-600">
          SCORE内訳
        </p>

        <ul className="mt-2 space-y-1 text-sm text-gray-600">
          <li>必要販売個数：{countScore} / 60点</li>
          <li>固定費回収効率：{recoveryScore} / 40点</li>
        </ul>
      </div>

      <div className="mt-5 border-t border-gray-200 pt-4">
        <p className="text-sm font-semibold text-gray-600">
          判定コメント
        </p>

        <p className="mt-2 text-sm leading-6 text-gray-700">
          {comment}
        </p>
      </div>

      <div className="mt-5 border-t border-gray-200 pt-4">
        <p className="text-sm font-semibold text-gray-600">
          SCORE判定基準
        </p>

        <ul className="mt-2 space-y-1 text-sm text-gray-600">
          <li>⭐⭐⭐⭐⭐　S：85〜100点　黒字化しやすい</li>
          <li>⭐⭐⭐⭐☆　A：70〜84点　比較的黒字化しやすい</li>
          <li>⭐⭐⭐☆☆　B：55〜69点　販売数を確認して判断</li>
          <li>⭐⭐☆☆☆　C：40〜54点　慎重に判断</li>
          <li>⭐☆☆☆☆　D：0〜39点　条件の見直し推奨</li>
        </ul>
      </div>
    </>
  )}
</div>
      </div>
      <section className="mx-auto mt-6 max-w-3xl rounded-xl border bg-white p-5">
  <h2 className="mb-2 text-xl font-bold">
    損益分岐点の早見表
  </h2>

  <p className="mb-4 text-sm text-gray-600">
    固定費30,000円の場合、1個あたりの利益ごとに必要な販売個数は次のとおりです。
  </p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">1個あたりの利益</th>
          <th className="border p-2">固定費</th>
          <th className="border p-2">損益分岐点</th>
        </tr>
      </thead>

      <tbody>
        {[
          [500, 30000, 60],
          [1000, 30000, 30],
          [1200, 30000, 25],
          [1500, 30000, 20],
          [2000, 30000, 15],
          [3000, 30000, 10],
        ].map(([profit, fixed, count]) => (
          <tr key={profit}>
            <td className="border p-2 text-right">
              {profit.toLocaleString()}円
            </td>
            <td className="border p-2 text-right">
              {fixed.toLocaleString()}円
            </td>
            <td className="border p-2 text-right font-semibold">
              {count.toLocaleString()}個
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <p className="mt-3 text-xs text-gray-500">
    ※ 損益分岐点 ＝ 固定費 ÷ 1個あたりの利益で計算し、必要販売個数は切り上げています。
  </p>
</section>
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
        <section className="mt-10 max-w-3xl mx-auto bg-white rounded-xl p-6">
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
       <section className="mt-10 max-w-3xl mx-auto rounded-xl border bg-white p-5">
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