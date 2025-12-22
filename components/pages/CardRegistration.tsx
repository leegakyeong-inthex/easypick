import Image from "next/image"
import { useState } from "react"
import { Button } from "../ui/button"
import { Sheet } from "react-modal-sheet";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const cards = [
  {
    company: 'KB 국민카드',
    cards: [
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: true,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
        selected: true,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
    ],
  },
  {
    company: '신한카드',
    cards: [
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
    ],
  },
  {
    company: '삼성카드',
    cards: [
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
    ],
  },
  {
    company: '헌대카드',
    cards: [
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
    ],
  },
  {
    company: '롯데카드',
    cards: [
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
    ],
  },
  {
    company: '하나카드',
    cards: [
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
    ],
  },
  {
    company: '우리카드',
    cards: [
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
    ],
  },
  {
    company: 'BC카드',
    cards: [
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
    ],
  },
  {
    company: '카카오뱅크',
    cards: [
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 국민 CLiP 카드',
        selected: false,
      },
      {
        image: '/images/card-2.png',
        name: 'KB 청춘대로 톡톡카드',
        selected: false,
      },
    ],
  },
]

export default function CardRegistration({ setIsVisible }) {
  const [selectedCard, setSelectedCard] = useState('KB 국민카드')
  const [isOpen, setIsOpen] = useState(false)
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)
  const [company, setCompany] = useState('')
  const [cardName, setCardName] = useState('')
  const [isInputsComplete, setIsInputsComplete] = useState(false)

  const handleCompanyChange = (e) => {
    const value = e.target.value
    setCompany(value)
    setIsInputsComplete(value.trim() !== '' && cardName.trim() !== '')
  }

  const handleCardNameChange = (e) => {
    const value = e.target.value
    setCardName(value)
    setIsInputsComplete(company.trim() !== '' && value.trim() !== '')
  }

  return (
    <>
      <div style={{ zIndex: 2 }} className="bg-white absolute w-screen h-screen flex flex-col">
        <div className="flex items-center pt-3.5 pb-2.5 px-[17px] mb-[18px]">
          <Image
            src="/images/icons/arrow-left.png"
            width={24}
            height={24}
            alt="뒤로가기"
            className="mr-3"
            onClick={() => setIsVisible(false)}
          />
          <div className="text-xl font-bold">내 카드 등록</div>
        </div>
        <div className="flex-1 min-h-0 flex flex-col bg-white">
          <div className="flex items-center border-b border-[#F4F4F4] font-semibold text-xs text-[#6D727A]">
            <div className="w-[134px] pl-[18px] pb-3.5">카드사</div>
            <div className="pl-[18px] pb-3.5">카드</div>
          </div>
          <div className="flex flex-1 min-h-0">
            <div className="border-r border-[#F4F4F4] w-[134px] pt-1.5 pr-1.5 overflow-y-scroll">
              {cards.map((card) => (
                <div
                  key={card.company}
                  className={`h-[50px] flex items-center pl-5 font-medium text-sm rounded-tr-[10px] rounded-br-[10px] ${card.company === selectedCard ? 'bg-[#E2EEFF] text-[#0068FF]' : 'text-[#6D727A]'}`}
                  onClick={() => setSelectedCard(card.company)}
                >{card.company}</div>
              ))}
            </div>
            <div className="flex flex-col py-1.5 px-2.5 space-y-1.5 flex-1 overflow-y-scroll">
              {cards.find((card) => card.company === selectedCard).cards.map((card,i) => (
                <div
                  key={card.name+i}
                  className={`flex items-center w-full min-h-[60px] font-medium text-sm rounded-[10px] px-[13px] ${card.selected ? 'bg-[#0B0D0F] text-white' : ''}`}
                  onClick={() => setIsRegistrationOpen(true)}
                >
                  <Image src={card.image} width={26} height={40} alt="" className="mr-1.5" />
                  <div>{card.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-2.5 px-[18px] h-[130px] flex flex-col items-center" style={{ boxShadow: '0px -4px 10px 0px rgba(0, 0, 0, 0.04)' }}>
            <Button>확인</Button>
            <div
              className="underline mt-[19px] font-semibold text-sm text-[#6D727A]"
              onClick={() => setIsOpen(true)}
            >찾는 카드가 없나요?</div>
          </div>
        </div>
      </div>

      <Sheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        snapPoints={[0, 360, 1]}
        // detent="content"
        initialSnap={1}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className="px-[18px] pb-6">
              <div className="font-bold text-lg mb-1.5">카드 추가 요청</div>
              <div className="text-sm text-[#6D727A] mb-6">카드 정보를 남겨주시면 빠르게 추가해드릴게요.</div>
              <div className="relative w-full">
                <Label htmlFor="company" className="font-semibold text-sm text-[#686B70] absolute left-[18px] top-3.5">카드사</Label>
                <Input id="company" value={company} onChange={handleCompanyChange} className="bg-[#F3F3F3] mb-[13px] indent-[86%]" placeholder="카드사" />
              </div>
              <div className="relative w-full">
                <Label htmlFor="cardName" className="font-semibold text-sm text-[#686B70] absolute left-[18px] top-3.5">카드 이름</Label>
                <Input id="cardName" value={cardName} onChange={handleCardNameChange} className="bg-[#F3F3F3] mb-[25px] indent-[81%]" placeholder="카드 이름" />
              </div>
              <Button className={`w-full ${isInputsComplete ? 'bg-[#0068FF]' : 'bg-[#C3C3C3]'}`}>요청하기</Button>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onClick={() => setIsOpen(false)} />
      </Sheet>

      <Sheet
        isOpen={isRegistrationOpen}
        onClose={() => setIsOpen(false)}
        snapPoints={[0, 420, 1]}
        // detent="content"
        initialSnap={1}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className="flex flex-col items-center mt-1.5 px-[18px]">
              <div className="font-semibold text-[13px] text-[#0068FF] mb-1">삼성카드</div>
              <div className="font-semibold text-xl mb-5">모니모 카드</div>
              <Image src="/images/card-3.png" width={140} height={87} alt="" className="rotate-90 -mt-12 -mb-5" />
              <div className="flex items-center w-full">
                <label className="font-semibold text-sm text-[#686B70] ml-[18px] absolute">유효기간</label>
                <Input className="bg-[#F3F3F3] text-right w-full h-[62px] mb-6" placeholder="00 / 00" />
              </div>
              <Button className="mb-6">완료</Button>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onClick={() => setIsRegistrationOpen(false)} />
      </Sheet>
    </>
  )
}
