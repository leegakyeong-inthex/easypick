import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const tabs = [
    {
      title: "검색",
      iconUrl: "/images/icons/pageview.png",
      href: "/",
    },
    {
      title: "내 카드",
      iconUrl: "/images/icons/add_card.png",
      href: "/",
    },
    {
      title: "혜택 지도",
      iconUrl: "/images/icons/pin_drop.png",
      href: "/",
    },
    {
      title: "카드 추천",
      iconUrl: "/images/icons/credit_card.png",
      href: "/",
    },
    {
      title: "더보기",
      iconUrl: "/images/icons/menu.png",
      href: "/",
    },
  ]

  return (
    <div className="h-screen">
      <div className="absolute top-0 w-full h-[60px] rounded-b-2xl flex justify-center" style={{ boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.08)' }}>
        <div className="w-fit h-fit flex items-center mt-1.5 rounded-full font-semibold text-base border border-[#EBEBEB] p-px bg-[#F2F2F2] leading-none">
          <div className="rounded-full bg-white px-3.5 py-[9px] text-[#070707]" style={{ boxShadow: '0px 0px 24px 0px rgba(0, 0, 0, 0.16)'}}>장소</div>
          <div className="text-[#878787] px-3.5 py-[9px]">카드</div>
        </div>
        <Link href="/notifications">
          <Image src="/images/icons/notifications.png" width={24} height={24} alt="알림" className="absolute right-[18px] top-3.5 bottom-[22px]" />
        </Link>
      </div>
      <div className="absolute bottom-0 w-full h-20 pt-2.5 px-[25px]">
        <div className="flex items-center space-x-[30px]">
          {tabs.map((tab) => (
            <Link key={tab.title} href={tab.href} className="w-[41px] h-[41px] flex flex-col items-center space-y-0.5">
              <Image src={tab.iconUrl} width={24} height={24} alt={tab.title} />
              <div className="text-[#6D727A] text-[11px]">{tab.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
