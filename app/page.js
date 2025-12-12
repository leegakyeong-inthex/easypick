"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet } from "react-modal-sheet";
import styles from "./page.module.css";

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

const cardTypes = ['적립형', '할인형', '추천 카드 포함']

const cards = [
  {
    name: "신한카드 청춘대로 톡톡카드",
    spot: "CU 서울숲점",
    description: "대형마트 10%할인",
    image: "/images/shinhan-1.png",
  },
  {
    name: "신한카드 청춘대로 톡톡카드",
    spot: "이마트 왕십리점",
    description: "대형마트 10%할인",
    image: "/images/shinhan-2.png",
  },
  {
    name: "신한카드 청춘대로 톡톡카드",
    spot: "홈플러스 익스프레스 왕십리점",
    description: "대형마트 10%할인",
    image: "/images/shinhan-3.png",
  },
]

const spotCards = [
  {
    company: "신한카드",
    name: "청춘대로 톡톡카드",
    benefit: "5% 할인",
    image: "/images/shinhan-1.png",
  },
  {
    company: "삼성카드",
    name: "청춘대로 톡톡카드",
    benefit: "5% 할인",
    image: "/images/shinhan-2.png",
  },
]

const photos = [
  '/images/photo-1.png',
  '/images/photo-2.png',
  '/images/photo-2.png',
]

export default function Home() {
  const [benefitType, setBenefitType] = useState('place') // place or card
  const [isOpen, setIsOpen] = useState(false)
  const [selectedPlace, setSelectedPlace] = useState('')
  const [selectedSpot, setSelectedSpot] = useState('')
  const ref = useRef(null);
  const snapTo = (i) => ref.current.snapTo(i);

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <>
      <div className="absolute top-0 w-full h-[60px] rounded-b-2xl flex justify-center" style={{ boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.08)' }}>
        <div className="w-fit h-fit flex items-center mt-1.5 rounded-full font-semibold text-base border border-[#EBEBEB] p-px bg-[#F2F2F2] leading-none">
          <div
            className={`rounded-full px-3.5 py-[9px] ${benefitType === 'place' ? styles.selectedBenefit : styles.unselectedBenefit}`}
            onClick={() => setBenefitType('place')}
          >
            장소
          </div>
          <div
            className={`rounded-full px-3.5 py-[9px] ${benefitType === 'card' ? styles.selectedBenefit : styles.unselectedBenefit}`}
            onClick={() => setBenefitType('card')}
          >
            카드
          </div>
        </div>
        <Link href="/notifications">
          <Image src="/images/icons/notifications.png" width={24} height={24} alt="알림" className="absolute right-[18px] top-3.5 bottom-[22px]" />
        </Link>
      </div>

      <Sheet
        // unstyled
        ref={ref}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        snapPoints={[0, 150, 500, 1]}
        detent="content"
        initialSnap={2}
        className={styles.bottomSheet}
        disableDismiss
      >
        <Sheet.Container style={{ zIndex: 1000, boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.12)', borderRadius: '18px 18px 0px 0px' }}>
          <Sheet.Header />
          <Sheet.Content>
            <div className="mb-20 overflow-x-hidden overflow-y-scroll">
              <div className="font-semibold text-lg tracking-[-2%] mb-4 pl-5">장소 맞춤 카드찾기</div>
              <div className="flex items-center space-x-4 overflow-x-scroll mb-5 pl-5">
                {places.map((place) => (
                  <div
                    key={place.name}
                    className="flex flex-col items-center shrink-0"
                    onClick={() => {
                      if (selectedPlace && selectedPlace === place.name) {
                        setSelectedPlace('')
                        snapTo(2)
                      } else {
                        setSelectedPlace(place.name)
                        snapTo(3)
                      }
                    }}
                  >
                    <Image src={place.iconUrl} width={52} height={52} alt={place.name} className="block mb-[5px]" />
                    <div className="font-medium text-sm">{place.name}</div>
                  </div>
                ))}
              </div>
              <hr className="border border-[#F4F4F4] mb-5" />
              {places.find((p) => p.name === selectedPlace) && (
                <div>
                  <div className="flex items-center space-x-3 mb-1 px-5">
                    <div className="bg-[#F7F8F8] p-[9px] h-10 text-[15px] text-[#5A5B64] shrink-0 rounded-full">
                      <Image src="/images/icons/tune.png" width="20" height="20" alt="필터" />
                    </div>
                    <div className="flex items-center space-x-1.5">
                      {cardTypes.map((type) => (
                        <div key={type} className="bg-[#F7F8F8] px-3.5 py-2.5 h-10 text-[15px] text-[#5A5B64] shrink-0 rounded-full">{type}</div>
                      ))}
                    </div>
                  </div>
                  <div className="divide-y divide-solid divide-[F4F4F4]">
                    {cards.map((card) => (
                      <div
                        key={card.spot}
                        className="py-4 px-5"
                        onClick={() => {
                          setSelectedSpot(card.spot)
                          snapTo(2)
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Image src={card.image} width={49} height={78} alt={card.name} className="mr-5" />
                            <div>
                              <div className="flex items-center space-x-0.5">
                                <div className="font-medium text-[#6D727A] text-[13px]">{card.name}</div>
                                <Image src="/images/icons/chevron_right.png" width="20" height="20" alt="이동하기" />
                              </div>
                              <div className="text-base font-semibold">{card.spot}</div>
                              <div className="text-[13px] text-[#6D727A]">{card.description}</div>
                            </div>
                          </div>
                          <div className="bg-[#CCE1FF] px-[7px] py-[5px] text-[#0068FF] text-[11px] font-semibold rounded-[20px]">MY</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="font-semibold text-lg tracking-[-2%] mb-4 pl-5">추천 장소 키워드</div>
              <div className="flex items-center space-x-1.5 overflow-x-scroll pl-5 mb-4">
                {keywords.map((keyword) => (
                  <div key={keyword} className="bg-[#F7F8F8] px-3.5 py-2.5 h-10 text-[15px] text-[#5A5B64] shrink-0 rounded-full">{keyword}</div>
                ))}
              </div>
              <div className="flex justify-center items-center rounded-[20px] mx-5 h-[81px] bg-[#F3F3F3] text-[#5A5B64] text-[15px] leading-[-1%]">광고 영역입니다.</div>
              <Image src="/images/event-banner.png" width={375} height={300} alt="이벤트 배너" />
            </div>

            {/* 장소 선택 시 */}
            {selectedSpot && (
              <div className="absolute top-0 bg-white w-full">
                <div className="px-[18px] flex items-center justify-between mb-4">
                  <Image
                    src="/images/icons/arrow-left.png"
                    width={24}
                    height={24}
                    alt="뒤로가기"
                    onClick={() => {
                      setSelectedSpot('')
                      snapTo(3)
                    }}
                  />
                  <div className="flex items-center space-x-[7px]">
                    <div className="rounded-full bg-[#EEEEEE] p-1.5">
                      <Image src="/images/icons/directions.png" width={20} height={20} alt="" />
                    </div>
                    <div className="rounded-full bg-[#EEEEEE] p-1.5">
                      <Image src="/images/icons/call.png" width={20} height={20} alt="" />
                    </div>
                    <div className="rounded-full bg-[#EEEEEE] p-1.5">
                      <Image src="/images/icons/bookmark.png" width={20} height={20} alt="" />
                    </div>
                  </div>
                </div>

                <div className="px-[18px] leading-none mb-4">
                  <div className="text-xl font-semibold mb-1">이마트 왕십리점</div>
                  <div className="flex items-center space-x-1 font-medium text-[13px] mb-3">
                    <div>마트</div>
                    <Image src="/images/icons/gray-dot.png" width={3} height={3} alt="" />
                    <div>90m</div>
                  </div>
                  <div className="text-sm text-[#6D727A] mb-px">서울 광진구 아차산로 30길 26</div>
                  <div className="flex items-center space-x-1.5 text-sm font-medium">
                    <div>영업중</div>
                    <Image src="/images/icons/gray-dot.png" width={3} height={3} alt="" />
                    <div className="text-[#6D727A]">00:00 - 24:00</div>
                  </div>
                </div>

                <div className="px-[18px] flex items-center space-x-2 overflow-x-scroll mb-4">
                  {spotCards.map((card) => (
                    <div key={card.company} className="w-[200px] h-[90px] bg-[#F7F8F8] flex items-center p-[7px] rounded-[10px] shrink-0">
                      <Image src={card.image} width={49} height={78} alt={card.name} className="grow-0" />
                      <div className="ml-3.5 font-medium">
                        <div className="text-xs text-[#B2B2B2]">{card.company}</div>
                        <div className="text-[13px] text-[#6D727A]">{card.name}</div>
                        <div className="text-[15px] font-semibold">{card.benefit}</div>
                      </div>
                      <div className="bg-[#CCE1FF] px-[7px] py-1 text-[#0068FF] text-[10px] font-semibold rounded-[20px] self-start">MY</div>
                    </div>
                  ))}
                </div>

                <div className="px-[18px] flex items-center space-x-2 overflow-x-scroll mb-4">
                  {photos.map((photo, i) => (
                    <Image key={photo+i} src={photo} width={149} height={100} alt="" />
                  ))}
                </div>
              </div>
            )}
          </Sheet.Content>
        </Sheet.Container>
        {/* <Sheet.Backdrop style={{ zIndex: 500 }} /> */}
      </Sheet>
    </>
  )
}
