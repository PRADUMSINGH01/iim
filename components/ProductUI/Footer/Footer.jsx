// components/Footer.js

export default function Footer() {
  return (
    <div className=" flex flex-wrap justify-around items-center bg-stone-900 shadow-xl  font-[family-name:var(--font-geist-sans)] ">
      <h1 className="text-pink-500">Invoice </h1>
      <p className="text-sm text-yellow-500">CopyRight@2024</p>
      <div className="flex flex-col list-none text-pink-500">
        <li>Refund & cancellion</li>
        <li>Refund & cancellion</li>
        <li>Refund & cancellion</li>
      </div>
    </div>
  );
}
