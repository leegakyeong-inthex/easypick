'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

export default function NavigationBar() {
  const [selectedTab, setSelectedTab] = useState('혜택 지도')

  return (
    <div className="fixed z-2 bottom-0 w-full h-20 pt-2.5 px-[25px] bg-white" style={{ boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.08)' }}>
      <div className="flex items-center space-x-[30px]">
        {tabs.map((tab) => (
          <Link
            key={tab.title}
            href={tab.href}
            className="w-[41px] h-[41px] flex flex-col items-center space-y-0.5"
            onClick={() => setSelectedTab(tab.title)}
          >
            <Image src={tab.iconUrl} width={24} height={24} alt={tab.title} />
            <div className={`text-[11px] ${selectedTab === tab.title ? 'text-[#2B2D34] font-bold' : 'text-[#6D727A]'}`}>{tab.title}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
