import Image from "next/image";

export default function BrandLogo() {
  return (
    <span className="brand-lockup">
      <Image
        src="/brand/hyunju-safety-ai-symbol.png"
        alt=""
        width={44}
        height={44}
        className="brand-symbol"
      />
      <span className="brand-type">
        <span className="brand-name">HYUNJU<span className="brand-period">.</span></span>
        <span className="brand-descriptor">안전교육 · AI 활용</span>
      </span>
    </span>
  );
}
