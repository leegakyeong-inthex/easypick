import Image from "next/image"
import { useState } from "react"
import { Button } from "../ui/button"
import { Sheet } from "react-modal-sheet";
import { Input } from "../ui/input";

const cards = [
  {
    company: 'KB 국민카드',
    cards: [
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
    ],
  },
  {
    company: '신한카드',
    cards: [
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
    ],
  },
  {
    company: '삼성카드',
    cards: [
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
    ],
  },
  {
    company: '헌대카드',
    cards: [
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
    ],
  },
  {
    company: '롯데카드',
    cards: [
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
    ],
  },
  {
    company: '하나카드',
    cards: [
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
    ],
  },
  {
    company: '우리카드',
    cards: [
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
    ],
  },
  {
    company: 'BC카드',
    cards: [
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
    ],
  },
  {
    company: '카카오뱅크',
    cards: [
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
      },
    ],
  },
]

export default function CardRegistration({ setIsVisible }) {
  const [selectedCard, setSelectedCard] = useState('KB 국민카드')
  const [isOpen, setIsOpen] = useState(false)
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  return (
    <>
      <div style={{ zIndex: 2 }} className="bg-white absolute w-full h-full">
        <div className="flex items-center">
          <div onClick={() => setIsVisible(false)}>뒤로가기</div>
          <div>내 카드 등록</div>
        </div>
        <div>
          <div className="flex items-center">
            <div>카드사</div>
            <div>카드</div>
          </div>
          <div className="flex">
            <div>
              {cards.map((card) => (
                <div key={card.company}>{card.company}</div>
              ))}
            </div>
            <div>
              {cards.find((card) => card.company === selectedCard).cards.map((card,i) => (
                <div
                  key={card.name+i}
                  className="flex items-center"
                  onClick={() => setIsRegistrationOpen(true)}
                >
                  <Image src={card.image} width={22} height={36} alt="" />
                  <div>{card.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Button>확인</Button>
            <div className="underline" onClick={() => setIsOpen(true)}>찾는 카드가 없나요?</div>
          </div>
        </div>
      </div>

      <Sheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        snapPoints={[0, 200, 1]}
        // detent="content"
        initialSnap={1}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div>
              <div>카드 추가 요청</div>
              <div>카드 정보를 남겨주시면 빠르게 추가해드릴게요.</div>
              <Input placeholder="카드사 입력" />
              <Input placeholder="카드 이름 입력" />
              <Button>요청하기</Button>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onClick={() => setIsOpen(false)} />
      </Sheet>

      <Sheet
        isOpen={isRegistrationOpen}
        onClose={() => setIsOpen(false)}
        snapPoints={[0, 200, 1]}
        // detent="content"
        initialSnap={1}
      >
        <Sheet.Header />
        <Sheet.Container>
          <Sheet.Content>
            <div>
              <div>삼성 카드</div>
              <div>모니모 카드</div>
              <Image src="/images/card-3.png" width={140} height={87} alt="" className="rotate-90" />
              <Input placeholder="00 / 00" />
              <Button>확인</Button>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onClick={() => setIsRegistrationOpen(false)} />
      </Sheet>
    </>
  )
}
