import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function SignIn() {
  return (
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
        <Link href="/find-id">
          <span className="text-sm text-[#6D727A]">아이디 찾기</span>
        </Link>
        <div className="text-xs text-[#eaeaea]">|</div>
        <Link href="/find-password">
          <span className="text-sm text-[#6D727A]">비밀번호 찾기</span>
        </Link>
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
  )
}
