/* Real screenshots framed in device chrome (browser / phone). */
import Image from "next/image";

export function BrowserMock({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full max-w-[720px] overflow-hidden rounded-2xl border border-black/25 bg-[#1d1d1f] shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
      <div className="flex h-9 items-center gap-[7px] bg-[#2a2a2e] px-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#565659]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#565659]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#565659]" />
        <i className="ml-2.5 h-4 flex-1 rounded-full bg-[#3a3a3e]" />
      </div>
      <div className="relative aspect-[16/10] max-h-[52vh] overflow-hidden bg-snow">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

export function PhoneMock({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-[300px] rounded-[38px] bg-[#1d1d1f] p-2.5 shadow-[0_24px_60px_rgba(0,0,0,0.32)]">
      <div className="relative h-[56vh] max-h-[560px] overflow-hidden rounded-[28px] bg-snow">
        <div className="absolute left-1/2 top-2.5 z-10 h-[22px] w-20 -translate-x-1/2 rounded-xl bg-[#1d1d1f]" />
        <Image
          src={src}
          alt={alt}
          fill
          sizes="300px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
