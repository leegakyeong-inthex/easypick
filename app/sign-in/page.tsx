"use client";

import { useState } from "react";
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function SignIn() {
  const [isFindIdSheetOpen, setIsFindIdSheetOpen] = useState(false)
  const [findIdStep, setFindIdStep] = useState(1)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [foundEmail, setFoundEmail] = useState("")
  const [timer, setTimer] = useState(0)

  const handleFindIdClick = () => {
    setIsFindIdSheetOpen(true)
    setFindIdStep(1)
    setPhoneNumber("")
    setVerificationCode("")
    setFoundEmail("")
    setTimer(0)
  }

  const handleSendVerification = () => {
    if (phoneNumber.trim()) {
      setFindIdStep(2)
      setTimer(300) // 5분 타이머
    }
  }

  const handleVerificationSubmit = () => {
    if (verificationCode.trim()) {
      setFoundEmail("E**********25")
      setFindIdStep(3)
    }
  }

  const handleConfirm = () => {
    setFindIdStep(4)
  }

  const handleClose = () => {
    setIsFindIdSheetOpen(false)
  }

  return (
    <>
      <div className="px-[18px] font-medium flex flex-col items-center h-screen">
        <div className="w-fit mt-[59px] mx-auto mb-7 font-bold text-[26px] leading-9 text-center">이지픽<br />카드 할인지도</div>
        <Input id="id" type="text" placeholder="아이디" className="mb-2.5" />
        <div className="relative w-full">
          <Input id="password" type="password" placeholder="비밀번호 입력" className="mb-3.5" />
          <Image src="/images/icons/visibility.png" width="16" height="16" alt="비밀번호 숨기기" className="absolute right-[17px] top-[calc(50%-16px)] cursor-pointer" />
        </div>
        <div className="flex items-center space-x-2 mb-5 w-full">
          <Checkbox id="remenber-me" />
          <Label htmlFor="remember-me" className="text-[#6D727A]">로그인 상태 유지</Label>
        </div>
        <Button className="mb-6">로그인</Button>
        <div className="flex items-center space-x-3 mb-auto">
          <div>
            <span
              className="text-sm text-[#6D727A] cursor-pointer hover:underline"
              onClick={handleFindIdClick}
            >
              아이디 찾기
            </span>
          </div>
          <div className="text-xs text-[#eaeaea]">|</div>
          <div>
            <span className="text-sm text-[#6D727A]">비밀번호 찾기</span>
          </div>
        </div>
        <div className="flex items-center space-x-2.5 mb-[21px] w-full">
          <hr className="flex-1 border-[#EAEAEA]" />
          <div className="text-[#999999] text-sm">SNS로 간편하게 로그인하세요</div>
          <hr className="flex-1 border-[#EAEAEA]" />
        </div>
        <div className="flex items-center space-x-[17px] mb-5">
          <Image src="/images/icons/kakaotalk.png" width="42" height="42" alt="카카오톡" />
          <Image src="/images/icons/naver.png" width="42" height="42" alt="네이버" />
          <Image src="/images/icons/apple.png" width="42" height="42" alt="애플" />
        </div>
        <Button className="mb-6" variant="secondary">회원가입</Button>
        <Link href="/">
          <div className="text-[15px] text-[#6D727A] underline mb-[45px]">둘러보기</div>
        </Link>
      </div>

      {isFindIdSheetOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity"
            onClick={handleClose}
          />
          <div
            className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out overflow-y-auto ${
              isFindIdSheetOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {findIdStep === 1 && (
              <div className="px-5 py-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-bold">아이디 찾기</span>
                  <Image
                    src="/images/icons/arrow-left.png"
                    width={24}
                    height={24}
                    alt="닫기"
                    className="cursor-pointer"
                    onClick={handleClose}
                  />
                </div>
                <div className="mb-8">
                  <p className="text-base font-semibold mb-6">가입 시 등록한 휴대폰 번호로<br />아이디를 찾을 수 있어요.</p>
                  <div className="mb-6">
                    <label className="text-[13px] text-[#6D727A] mb-2 block">휴대폰 번호</label>
                    <Input
                      placeholder="휴대폰 번호"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <Button
                  className="w-full h-14 rounded-xl"
                  onClick={handleSendVerification}
                  disabled={!phoneNumber.trim()}
                >
                  인증 받기
                </Button>
              </div>
            )}

            {findIdStep === 2 && (
              <div className="px-5 py-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-bold">아이디 찾기</span>
                  <Image
                    src="/images/icons/arrow-left.png"
                    width={24}
                    height={24}
                    alt="닫기"
                    className="cursor-pointer"
                    onClick={handleClose}
                  />
                </div>
                <div className="mb-8">
                  <p className="text-base font-semibold mb-6">가입 시 등록한 휴대폰 번호로<br />아이디를 찾을 수 있어요.</p>
                  <div className="mb-2">
                    <label className="text-[13px] text-[#6D727A] mb-2 block">휴대폰 번호</label>
                    <div className="flex items-center space-x-3 gap-3">
                      <div className="flex-1 px-4 py-3 bg-[#F3F3F3] rounded-lg text-[15px]">
                        {phoneNumber}
                      </div>
                      <Button
                        variant="secondary"
                        className="px-6 rounded-lg"
                        onClick={() => setFindIdStep(1)}
                      >
                        번호 변경
                      </Button>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="text-[13px] text-[#6D727A] mb-2 block">인증번호</label>
                    <div className="flex items-center gap-2">
                      <Input
                        placeholder="인증번호 6자리"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value.slice(0, 6))}
                        maxLength={6}
                      />
                      <span className="text-[#0068FF] text-sm font-semibold whitespace-nowrap">
                        {String(Math.floor(timer / 60)).padStart(2, '0')}:{String(timer % 60).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  className="w-full h-14 rounded-xl"
                  onClick={handleVerificationSubmit}
                  disabled={!verificationCode.trim()}
                >
                  제출
                </Button>
              </div>
            )}

            {findIdStep === 3 && (
              <div className="px-5 py-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-bold">휴대폰 번호 정보와<br />일치하는 아이디입니다.</span>
                  <Image
                    src="/images/icons/arrow-left.png"
                    width={24}
                    height={24}
                    alt="닫기"
                    className="cursor-pointer"
                    onClick={handleClose}
                  />
                </div>
                <div className="mb-8">
                  <div className="px-4 py-5 bg-[#F3F3F3] rounded-lg mb-6">
                    <p className="text-[15px] text-[#6D727A] mb-2">아이디</p>
                    <p className="text-lg font-semibold">{foundEmail}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="secondary"
                    className="flex-1 h-14 rounded-xl"
                    onClick={handleClose}
                  >
                    로그인 하기
                  </Button>
                  <Button
                    className="flex-1 h-14 rounded-xl"
                    onClick={handleConfirm}
                  >
                    비밀번호 찾기
                  </Button>
                </div>
              </div>
            )}

            {findIdStep === 4 && (
              <div className="px-5 py-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-bold">휴대폰 번호 정보와<br />일치하는 아이디입니다.</span>
                </div>
                <div className="mb-8">
                  <div className="px-4 py-5 bg-[#F3F3F3] rounded-lg mb-6">
                    <p className="text-[15px] text-[#6D727A] mb-2">아이디</p>
                    <p className="text-lg font-semibold">{foundEmail}</p>
                  </div>
                </div>
                <Button
                  className="w-full h-14 rounded-xl"
                  onClick={handleClose}
                >
                  로그인하기
                </Button>
                <p className="text-center text-[13px] text-[#9CA3AF] mt-4 cursor-pointer hover:underline">비밀번호 찾기</p>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}
