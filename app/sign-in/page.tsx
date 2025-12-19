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

  const [isFindPasswordSheetOpen, setIsFindPasswordSheetOpen] = useState(false)
  const [findPasswordStep, setFindPasswordStep] = useState(1)
  const [passwordPhoneNumber, setPasswordPhoneNumber] = useState("")
  const [passwordVerificationCode, setPasswordVerificationCode] = useState("")
  const [passwordTimer, setPasswordTimer] = useState(0)

  const handleFindIdClick = () => {
    setIsFindIdSheetOpen(true)
    setFindIdStep(1)
    setPhoneNumber("")
    setVerificationCode("")
    setFoundEmail("")
    setTimer(0)
  }

  const handleFindPasswordClick = () => {
    setIsFindPasswordSheetOpen(true)
    setFindPasswordStep(1)
    setPasswordPhoneNumber("")
    setPasswordVerificationCode("")
    setPasswordTimer(0)
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

  const handleSendPasswordVerification = () => {
    if (passwordPhoneNumber.trim()) {
      setFindPasswordStep(2)
      setPasswordTimer(300) // 5분 타이머
    }
  }

  const handlePasswordVerificationSubmit = () => {
    if (passwordVerificationCode.trim()) {
      setFindPasswordStep(3)
    }
  }

  const handleCloseFindId = () => {
    setIsFindIdSheetOpen(false)
  }

  const handleCloseFindPassword = () => {
    setIsFindPasswordSheetOpen(false)
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
            <span
              className="text-sm text-[#6D727A] cursor-pointer hover:underline"
              onClick={handleFindPasswordClick}
            >
              비밀번호 찾기
            </span>
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
        <Link href="/sign-up" className="w-full">
          <Button className="mb-6" variant="secondary">회원가입</Button>
        </Link>
        <Link href="/">
          <div className="text-[15px] text-[#6D727A] underline mb-[45px]">둘러보기</div>
        </Link>
      </div>

      {isFindIdSheetOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity"
            onClick={handleCloseFindId}
          />
          <div
            className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out overflow-y-auto ${
              isFindIdSheetOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {findIdStep === 1 && (
              <div className="px-5 py-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <Image
                    src="/images/icons/arrow-left.png"
                    width={24}
                    height={24}
                    alt="닫기"
                    className="cursor-pointer"
                    onClick={handleCloseFindId}
                  />
                  <span className="text-lg font-bold">비밀번호 찾기</span>
                  <div className="w-6"></div>
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold leading-7 mb-8">가입 시 등록한 휴대폰 번호로<br />아이디와 유대폰 번호를 입력해주세요.</p>
                  <div className="mb-6">
                    <label className="text-[13px] text-[#6D727A] mb-3 block font-semibold">아이디</label>
                    <Input
                      placeholder="아이디"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div className="mb-8">
                    <label className="text-[13px] text-[#6D727A] mb-3 block font-semibold">휴대폰 번호</label>
                    <Input
                      placeholder="휴대폰 번호"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>
                <Button
                  className="w-full h-14 rounded-xl mb-6"
                  onClick={handleSendVerification}
                  disabled={!phoneNumber.trim() || !verificationCode.trim()}
                >
                  확인
                </Button>
              </div>
            )}

            {findIdStep === 2 && (
              <div className="px-5 py-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <Image
                    src="/images/icons/arrow-left.png"
                    width={24}
                    height={24}
                    alt="닫기"
                    className="cursor-pointer"
                    onClick={handleCloseFindId}
                  />
                  <span className="text-lg font-bold">비밀번호 찾기</span>
                  <div className="w-6"></div>
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold leading-7 mb-8">새로운 비밀번호를<br />입력해주세요</p>
                  <div className="mb-6">
                    <label className="text-[13px] text-[#6D727A] mb-3 block font-semibold">새 비밀번호</label>
                    <div className="relative">
                      <Input
                        placeholder="새 비밀번호"
                        type="password"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="h-12"
                      />
                      <Image src="/images/icons/visibility.png" width="16" height="16" alt="보기" className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" />
                    </div>
                  </div>
                  <div className="mb-8">
                    <label className="text-[13px] text-[#6D727A] mb-3 block font-semibold">새 비밀번호 확인</label>
                    <div className="relative">
                      <Input
                        placeholder="새 비밀번호 확인"
                        type="password"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        className="h-12"
                      />
                      <Image src="/images/icons/visibility.png" width="16" height="16" alt="보기" className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" />
                    </div>
                  </div>
                </div>
                <Button
                  className="w-full h-14 rounded-xl mb-6"
                  onClick={handleVerificationSubmit}
                  disabled={!phoneNumber.trim() || !verificationCode.trim()}
                >
                  확인
                </Button>
              </div>
            )}

            {findIdStep === 3 && (
              <div className="px-5 py-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <Image
                    src="/images/icons/arrow-left.png"
                    width={24}
                    height={24}
                    alt="닫기"
                    className="cursor-pointer"
                    onClick={handleCloseFindId}
                  />
                  <span className="text-lg font-bold"></span>
                  <div className="w-6"></div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="mb-6">
                    <Image
                      src="/images/icons/user-check.png"
                      width={80}
                      height={80}
                      alt="완료"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-3">비밀번호가 변경되었습니다.</p>
                    <p className="text-[15px] text-[#6D727A] leading-6">새로운 비밀번호로 로그인 후<br />서비스를 이용해주세요.</p>
                  </div>
                </div>
                <Button
                  className="w-full h-14 rounded-xl mb-6"
                  onClick={handleCloseFindId}
                >
                  로그인 하기
                </Button>
              </div>
            )}
          </div>
        </>
      )}

      {isFindPasswordSheetOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity"
            onClick={handleCloseFindPassword}
          />
          <div
            className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out overflow-y-auto ${
              isFindPasswordSheetOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {findPasswordStep === 1 && (
              <div className="px-5 py-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <Image
                    src="/images/icons/arrow-left.png"
                    width={24}
                    height={24}
                    alt="닫기"
                    className="cursor-pointer"
                    onClick={handleCloseFindPassword}
                  />
                  <span className="text-lg font-bold">비밀번호 찾기</span>
                  <div className="w-6"></div>
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold leading-7 mb-8">가입 시 등록한 휴대폰 번호로<br />아이디와 유대폰 번호를 입력해주세요.</p>
                  <div className="mb-6">
                    <label className="text-[13px] text-[#6D727A] mb-3 block font-semibold">아이디</label>
                    <Input
                      placeholder="아이디"
                      value={passwordPhoneNumber}
                      onChange={(e) => setPasswordPhoneNumber(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div className="mb-8">
                    <label className="text-[13px] text-[#6D727A] mb-3 block font-semibold">휴대폰 번호</label>
                    <Input
                      placeholder="휴대폰 번호"
                      value={passwordVerificationCode}
                      onChange={(e) => setPasswordVerificationCode(e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>
                <Button
                  className="w-full h-14 rounded-xl mb-6"
                  onClick={handleSendPasswordVerification}
                  disabled={!passwordPhoneNumber.trim() || !passwordVerificationCode.trim()}
                >
                  확인
                </Button>
              </div>
            )}

            {findPasswordStep === 2 && (
              <div className="px-5 py-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <Image
                    src="/images/icons/arrow-left.png"
                    width={24}
                    height={24}
                    alt="닫기"
                    className="cursor-pointer"
                    onClick={handleCloseFindPassword}
                  />
                  <span className="text-lg font-bold">비밀번호 찾기</span>
                  <div className="w-6"></div>
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold leading-7 mb-8">새로운 비밀번호를<br />입력해주세요</p>
                  <div className="mb-6">
                    <label className="text-[13px] text-[#6D727A] mb-3 block font-semibold">새 비밀번호</label>
                    <div className="relative">
                      <Input
                        placeholder="새 비밀번호"
                        type="password"
                        value={passwordPhoneNumber}
                        onChange={(e) => setPasswordPhoneNumber(e.target.value)}
                        className="h-12"
                      />
                      <Image src="/images/icons/visibility.png" width="16" height="16" alt="보기" className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" />
                    </div>
                  </div>
                  <div className="mb-8">
                    <label className="text-[13px] text-[#6D727A] mb-3 block font-semibold">새 비밀번호 확인</label>
                    <div className="relative">
                      <Input
                        placeholder="새 비밀번호 확인"
                        type="password"
                        value={passwordVerificationCode}
                        onChange={(e) => setPasswordVerificationCode(e.target.value)}
                        className="h-12"
                      />
                      <Image src="/images/icons/visibility.png" width="16" height="16" alt="보기" className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" />
                    </div>
                  </div>
                </div>
                <Button
                  className="w-full h-14 rounded-xl mb-6"
                  onClick={handlePasswordVerificationSubmit}
                  disabled={!passwordPhoneNumber.trim() || !passwordVerificationCode.trim()}
                >
                  확인
                </Button>
              </div>
            )}

            {findPasswordStep === 3 && (
              <div className="px-5 py-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <Image
                    src="/images/icons/arrow-left.png"
                    width={24}
                    height={24}
                    alt="닫기"
                    className="cursor-pointer"
                    onClick={handleCloseFindPassword}
                  />
                  <span className="text-lg font-bold"></span>
                  <div className="w-6"></div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="mb-6">
                    <Image
                      src="/images/icons/user-check.png"
                      width={80}
                      height={80}
                      alt="완료"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-3">비밀번호가 변경되었습니다.</p>
                    <p className="text-[15px] text-[#6D727A] leading-6">새로운 비밀번호로 로그인 후<br />서비스를 이용해주세요.</p>
                  </div>
                </div>
                <Button
                  className="w-full h-14 rounded-xl mb-6"
                  onClick={handleCloseFindPassword}
                >
                  로그인 하기
                </Button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}
