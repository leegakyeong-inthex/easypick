"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet } from "react-modal-sheet";
import styles from "./page.module.css";

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

const places = [
  {
    name: "마트",
    iconUrl: "/images/icons/mart.png",
  },
  {
    name: "카페",
    iconUrl: "/images/icons/cafe.png",
  },
  {
    name: "뷰티",
    iconUrl: "/images/icons/beauty.png",
  },
  {
    name: "스포츠",
    iconUrl: "/images/icons/sport.png",
  },
  {
    name: "영화",
    iconUrl: "/images/icons/movie.png",
  },
  {
    name: "레스토랑",
    iconUrl: "/images/icons/movie.png",
  },
]

const keywords = [
  '#분위기 좋은 카페',
  '#주말맞이 문화생활',
  '#가족들과 외식',
]

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <div className="h-screen relative">
      <div className="absolute top-0 w-full h-[60px] rounded-b-2xl flex justify-center" style={{ boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.08)' }}>
        <div className="w-fit h-fit flex items-center mt-1.5 rounded-full font-semibold text-base border border-[#EBEBEB] p-px bg-[#F2F2F2] leading-none">
          <div className="rounded-full bg-white px-3.5 py-[9px] text-[#070707]" style={{ boxShadow: '0px 0px 24px 0px rgba(0, 0, 0, 0.16)'}}>장소</div>
          <div className="text-[#878787] px-3.5 py-[9px]">카드</div>
        </div>
        <Link href="/notifications">
          <Image src="/images/icons/notifications.png" width={24} height={24} alt="알림" className="absolute right-[18px] top-3.5 bottom-[22px]" />
        </Link>
      </div>

      <Sheet
        // unstyled
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        snapPoints={[0, 150, 550, 1]}
        detent="content"
        initialSnap={1}
        className={styles.bottomSheet}
        disableDismiss
      >
        <Sheet.Container style={{ zIndex: 1000, boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.12)', borderRadius: '18px 18px 0px 0px' }}>
          <Sheet.Header />
          <Sheet.Content>
            <div className="mb-20 overflow-x-hidden h-[550px] overflow-y-scroll">
              <div className="font-semibold text-lg tracking-[-2%] mb-4 pl-5">장소 맞춤 카드찾기</div>
              <div className="flex items-center space-x-4 overflow-x-scroll mb-5 pl-5">
                {places.map((place) => (
                  <div key={place.name} className="flex flex-col items-center shrink-0">
                    <Image src={place.iconUrl} width={52} height={52} alt={place.name} className="block mb-[5px]" />
                    <div className="font-medium text-sm">{place.name}</div>
                  </div>
                ))}
              </div>
              <hr className="border border-[#F4F4F4] mb-5" />
              <div className="font-semibold text-lg tracking-[-2%] mb-4 pl-5">추천 장소 키워드</div>
              <div className="flex items-center space-x-1.5 overflow-x-scroll pl-5 mb-4">
                {keywords.map((keyword) => (
                  <div key={keyword} className="bg-[#F7F8F8] px-3.5 py-2.5 h-10 text-[15px] text-[#5A5B64] shrink-0 rounded-full">{keyword}</div>
                ))}
              </div>
              <div className="flex justify-center items-center rounded-[20px] mx-5 h-[81px] bg-[#F3F3F3] text-[#5A5B64] text-[15px] leading-[-1%] mb-2.5">광고 영역입니다.</div>
              <Image src="/images/event-banner.png" width={375} height={300} alt="이벤트 배너" />
            </div>
          </Sheet.Content>
        </Sheet.Container>
        {/* <Sheet.Backdrop style={{ zIndex: 500 }} /> */}
      </Sheet>

      <div className="absolute z-50 bottom-0 w-full h-20 pt-2.5 px-[25px] bg-white" style={{ boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.08)' }}>
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
