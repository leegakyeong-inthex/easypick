import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

export default function SignUp() {
  return (
    <div className="px-[18px] font-medium flex flex-col items-center h-screen">
      <div className="mt-4 mb-[29px] w-full">
        <Image src="/images/icons/arrow-left.png" width={24} height={24} alt="뒤로가기" />
      </div>
      <div className="w-full mb-[34px] font-bold text-[26px] leading-9">회원가입에 필요한<br />정보를 입력해 주세요</div>
      <div className="w-full flex flex-col space-y-3 mb-[30px]">
        <Label htmlFor="name" >이름</Label>
        <Input id="name" placeholder="이름" />
      </div>
      <div className="w-full flex flex-col space-y-3 mb-[30px]">
        <Label htmlFor="phone-number" >휴대폰 번호</Label>
        <Input id="phone-number" placeholder="휴대폰 번호" />
      </div>
      <div className="w-full flex flex-col space-y-3 mb-[30px]">
        <Label htmlFor="id" >아이디</Label>
        <Input id="id" placeholder="아이디" />
      </div>
      <div className="w-full flex flex-col space-y-3 mb-[30px]">
        <Label htmlFor="password" >비밀번호</Label>
        <Input id="password" placeholder="비밀번호" />
        <Input id="password-check" placeholder="비밀번호 확인" />
      </div>
      <div className="w-full flex flex-col space-y-3 mb-[30px]">
        <Label htmlFor="birth-date" >생년월일</Label>
        <div className="flex items-center space-x-2.5">
          <Input id="birth-date" placeholder="생년월일" />
          <Button className="w-[61px] rounded-[10px]">남자</Button>
          <Button variant="secondary" className="w-[61px] rounded-[10px]">여자</Button>
        </div>
      </div>
      <div className="w-full flex flex-col space-y-3 mb-[30px]">
        <Label htmlFor="email-id" >이메일</Label>
        <div className="flex items-center space-x-[9px]">
          <Input id="email-id" placeholder="이메일" className="flex-1" />
          <span>@</span>
          <Select>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gmail.com"></SelectItem>
              <SelectItem value="naver.com"></SelectItem>
              <SelectItem value="nate.com"></SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
