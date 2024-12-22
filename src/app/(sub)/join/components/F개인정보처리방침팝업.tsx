import CloseIcon from '@public/svg/close-24.svg';

import { Header } from '@/components/Header';
import { PopupContainer } from '@/components/Overlay';

export default function F개인정보처리방침팝업({ isOpen, onClose }: OverlayProps) {
  return (
    <PopupContainer isOpen={isOpen}>
      <Header>
        <Header.Center>개인정보 처리 방침</Header.Center>
        <Header.Right>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </Header.Right>
      </Header>
      <div className="py-4">
        <p className="whitespace-pre-wrap text-[14px] leading-[19.6px]">
          {`팀토핑(이하 "회사")는 이용자의 개인정보를 중요하게 생각하며, 『개인정보 보호법』,
          『정보통신망 이용촉진 및 정보보호 등에 관한 법률』 등 관련 법령을 준수하고 있습니다. 본
          개인정보 처리방침은 회사가 제공하는 플로잉(이하 "서비스")와 관련하여 이용자의 개인정보를
          어떻게 수집, 이용, 보호하는지에 대해 설명합니다.`}
        </p>
        <p className="mt-4 text-[14px] leading-[19.6px]">1. 개인정보 수집 항목 및 수집 방법</p>
        <p className="text-[14px] leading-[19.6px]">A. 수집 항목</p>
        <p className="text-[14px] leading-[19.6px]">
          회사는 회원가입, 서비스 이용, 고객 문의 등을 위해 아래와 같은 개인정보를 수집합니다.
        </p>
        <ol className="list-inside list-disc pl-1 text-[14px] leading-[19.6px]">
          <p className="text-[14px] leading-[19.6px]">1. 회원가입 시</p>
          <li className="pl-6 -indent-4">
            필수 항목: 이름, 이메일 주소, 비밀번호, 생년월일, 성별.
          </li>
          <li className="pl-6 -indent-4">선택 항목: 프로필 사진, 가치관 및 관심사 정보.</li>
        </ol>
        <ol className="list-inside list-disc pl-1 text-[14px] leading-[19.6px]">
          <p>2. 서비스 이용 시</p>
          <li className="pl-6 -indent-4">
            채팅 기록, 매칭 결과, 파티 참석 정보, 결제 정보(결제 내역, 카드사명, 결제일 등).
          </li>
        </ol>
        <ol className="list-inside list-disc pl-1 text-[14px] leading-[19.6px]">
          <p>3. 자동으로 수집되는 정보</p>
          <li className="pl-6 -indent-4">
            IP 주소, 쿠키, 서비스 이용 기록(로그인 로그, 접속 시간 등), 기기 정보(운영체제, 브라우저
            정보 등).
          </li>
        </ol>
        <p className="text-[14px] leading-[19.6px]">B. 수집 방법</p>
        <ol className="list-inside list-disc pl-1 text-[14px] leading-[19.6px]">
          <li className="pl-6 -indent-4">
            웹사이트 및 애플리케이션을 통한 회원가입 및 서비스 이용.
          </li>
          <li className="pl-6 -indent-4">고객센터를 통한 상담 및 문의.</li>
          <li className="pl-6 -indent-4">
            자동화된 수집 도구를 통한 정보 수집(쿠키 및 로그 분석 도구 등).
          </li>
        </ol>
        <p className="mt-4 text-[14px] leading-[19.6px]">2. 개인정보의 이용 목적</p>
        <p className="text-[14px] leading-[19.6px]">
          회사는 수집한 개인정보를 아래와 같은 목적으로 사용합니다.
        </p>
        <ol className="list-inside list-decimal pl-1 text-[14px] leading-[19.6px]">
          <li className="">회원 관리</li>
          <ol className="ml-5 list-disc">
            <li className="pl-6 -indent-4">회원가입 확인, 본인 인증, 서비스 이용 자격 확인.</li>
            <li className="pl-6 -indent-4">비밀번호 분실 시 본인 확인 및 재설정.</li>
          </ol>
          <li className="">서비스 제공</li>
          <ol className="ml-5 list-disc">
            <li className="pl-6 -indent-4">가치관 기반 매칭, 채팅, 오프라인 파티 운영 및 초대.</li>
            <li className="pl-6 -indent-4">맞춤형 매칭 추천 및 피드백 제공.</li>
          </ol>
          <li className="">결제 및 정산</li>
          <ol className="ml-5 list-disc">
            <li className="pl-6 -indent-4">유료 서비스 이용에 따른 결제, 환불 및 정산 처리.</li>
          </ol>
          <li className="">서비스 개선 및 마케팅</li>
          <ol className="ml-5 list-disc">
            <li className="pl-6 -indent-4">서비스 품질 향상을 위한 데이터 분석.</li>
            <li className="pl-6 -indent-4">신규 서비스 개발 및 마케팅 활동.</li>
          </ol>
          <li className="">법적 의무 준수</li>
          <ol className="ml-5 list-disc">
            <li className="pl-6 -indent-4">법령에 따른 의무 이행 및 분쟁 해결.</li>
          </ol>
        </ol>
        <p className="mt-4 text-[14px] leading-[19.6px]">3. 개인정보 보유 및 이용 기간</p>
        <p className="text-[14px] leading-[19.6px]">
          회사는 이용자의 개인정보를 수집 및 이용 목적이 달성될 때까지 보유하며, 관련 법령에 따라
          일정 기간 동안 저장할 수 있습니다.
        </p>
        <ol className="list-inside list-decimal text-[14px] leading-[19.6px]">
          <li className="pl-6 -indent-4">회원가입 정보: 회원 탈퇴 후 즉시 파기.</li>
          <li className="pl-6 -indent-4">
            결제 및 정산 정보: 전자상거래 등에서의 소비자 보호에 관한 법률에 따라 5년간 보관.
          </li>
          <li className="pl-6 -indent-4">서비스 이용 기록: 통신비밀보호법에 따라 3개월간 보관.</li>
        </ol>
        <p className="mt-4 text-[14px] leading-[19.6px]">4. 개인정보 제3자 제공</p>
        <p className="text-[14px] leading-[19.6px]">
          회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 아래와 같은 경우에
          한해 개인정보를 제공할 수 있습니다.
        </p>
        <ol className="list-inside list-decimal text-[14px] leading-[19.6px]">
          <li className="pl-6 -indent-4">이용자가 사전에 동의한 경우.</li>
          <li className="pl-6 -indent-4">법령에 의해 요구되는 경우.</li>
          <li className="pl-6 -indent-4">
            서비스 제공에 필요한 최소한의 범위 내에서 외부 파트너에게 제공하는 경우(예: 결제
            대행사).
          </li>
        </ol>
        <p className="mt-4 text-[14px] leading-[19.6px]">5. 개인정보 처리 위탁</p>
        <p className="text-[14px] leading-[19.6px]">
          회사는 서비스 제공을 위해 아래와 같이 개인정보 처리를 위탁할 수 있습니다.
        </p>
        <ol className="list-inside list-decimal text-[14px] leading-[19.6px]">
          <li className="pl-6 -indent-4">결제 처리: 결제 대행사(PG사)에 결제 정보를 위탁.</li>
          <li className="pl-6 -indent-4">데이터 분석: 데이터 처리 및 분석 서비스 제공업체.</li>
        </ol>
        <p className="text-[14px] leading-[19.6px]">
          회사는 위탁업체와의 계약을 통해 개인정보 보호를 철저히 관리하며, 위탁 처리된 정보가
          안전하게 관리될 수 있도록 노력합니다.
        </p>
        <p className="mt-4 text-[14px] leading-[19.6px]">6. 개인정보의 파기 절차 및 방법</p>
        <p className="text-[14px] leading-[19.6px]">
          회사는 개인정보 보유 기간이 경과하거나 처리 목적이 달성된 경우, 해당 정보를 지체 없이
          파기합니다.
        </p>
        <ol className="list-inside list-decimal text-[14px] leading-[19.6px]">
          <li className="pl-6 -indent-4">파기 절차:</li>
          <ol className="list-inside list-disc pl-1">
            <li className="pl-6 -indent-4">
              목적 달성 후 별도의 저장소에 옮긴 뒤 일정 기간 저장 후 삭제.
            </li>
            <li className="pl-6 -indent-4">관련 법령에 따라 저장이 필요 없는 경우 즉시 파기.</li>
          </ol>
          <li className="pl-6 -indent-4">파기 방법:</li>
          <ol className="list-inside list-disc pl-1">
            <li className="pl-6 -indent-4">전자적 파일: 복구가 불가능한 방법으로 영구 삭제.</li>
            <li className="pl-6 -indent-4">서면 문서: 분쇄기로 분쇄하거나 소각.</li>
          </ol>
        </ol>
        <p className="mt-4 text-[14px] leading-[19.6px]">7. 이용자의 권리와 행사 방법</p>
        <ol className="list-inside list-decimal text-[14px] leading-[19.6px]">
          <li className="pl-6 -indent-4">
            이용자는 언제든지 자신의 개인정보를 조회, 수정, 삭제 요청할 수 있습니다.
          </li>
          <li className="pl-6 -indent-4">
            회원 탈퇴를 요청할 경우, 회사는 즉시 이용자의 정보를 삭제합니다.
          </li>
          <li className="pl-6 -indent-4">
            이용자가 개인정보 오류를 정정 요청한 경우, 정정 완료 전까지 해당 정보를 이용하지
            않습니다.
          </li>
        </ol>
        <p className="mt-4 text-[14px] leading-[19.6px]">
          8. 개인정보 보호를 위한 기술적/관리적 대책
        </p>
        <p className="text-[14px] leading-[19.6px]">
          회사는 이용자의 개인정보를 안전하게 보호하기 위해 다음과 같은 조치를 취합니다.
        </p>

        <p className="ml-1 text-[14px] leading-[19.6px]">1. 기술적 조치:</p>
        <ol className="list-inside list-decimal pl-1 text-[14px] leading-[19.6px]">
          <ol className="ml-5 list-disc">
            <li className="pl-6 -indent-4">개인정보 암호화.</li>
            <li className="pl-6 -indent-4">방화벽 및 보안 소프트웨어 설치.</li>
          </ol>
          <p className="ml-1 text-[14px] leading-[19.6px]">2. 관리적 조치:</p>
          <ol className="list-inside list-disc pl-1 text-[14px] leading-[19.6px]">
            <li className="pl-6 -indent-4">개인정보 접근 권한 최소화.</li>
            <li className="pl-6 -indent-4">정기적인 개인정보 보호 교육 실시.</li>
          </ol>
        </ol>
        <p className="mt-4 text-[14px] leading-[19.6px]">9. 쿠키의 사용 및 거부</p>
        <p className="ml-1 text-[14px] leading-[19.6px]">1. 쿠키의 사용:</p>
        <ol className="list-inside list-disc text-[14px] leading-[19.6px]">
          <li className="pl-6 -indent-4">이용자의 서비스 이용 편의성을 위해 쿠키를 사용합니다.</li>
          <p className="ml-1 text-[14px] leading-[19.6px]">2. 쿠키 거부 방법:</p>
          <ol className="list-inside list-disc">
            <li className="pl-6 -indent-4">브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.</li>
            <li className="pl-6 -indent-4">
              쿠키를 거부할 경우 서비스 이용에 제한이 있을 수 있습니다.
            </li>
          </ol>
        </ol>
        <p className="mt-4 text-[14px] leading-[19.6px]">10. 개인정보 보호책임자 및 문의</p>
        <p className="ml-1 text-[14px] leading-[19.6px]">1. 개인정보 보호책임자:</p>
        <ol className="list-inside list-decimal text-[14px] leading-[19.6px]">
          <ol className="list-inside list-disc">
            <li className="pl-6 -indent-4">이름: 전성은</li>
            <li className="pl-6 -indent-4">
              이메일:{' '}
              <a href="mailto:sungeunbyeol@gmail.com" className="underline underline-offset-2">
                sungeunbyeol@gmail.com
              </a>
            </li>
            <li className="pl-6 -indent-4">연락처: 010-6875-5627</li>
          </ol>
          <p className="ml-1 text-[14px] leading-[19.6px]">2. 문의 방법:</p>
          <ol className="list-inside list-disc">
            <li className="pl-6 -indent-4">
              개인정보와 관련된 문의는 상기 이메일로 접수할 수 있으며, 회사는 신속하게
              처리하겠습니다.
            </li>
          </ol>
        </ol>
        <p className="mt-4 text-[14px] leading-[19.6px]">11. 부칙</p>
        <ol className="list-inside list-decimal text-[14px] leading-[19.6px]">
          <li className="pl-6 -indent-4">
            본 개인정보 처리방침은 2024년 12월 10일부터 적용됩니다.
          </li>
          <li className="pl-6 -indent-4">
            변경사항이 있을 경우, 서비스 내 공지사항 또는 이메일로 사전 통지합니다.
          </li>
        </ol>
      </div>
    </PopupContainer>
  );
}
