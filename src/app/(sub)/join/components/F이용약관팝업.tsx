import CloseIcon from '@public/svg/close-24.svg';

import { Header } from '@/components/Header';
import { PopupContainer } from '@/components/Overlay';

export default function F이용약관팝업({ isOpen, onClose }: OverlayProps) {
  return (
    <PopupContainer isOpen={isOpen}>
      <Header>
        <Header.Center>이용 약관 동의</Header.Center>
        <Header.Right>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </Header.Right>
      </Header>
      <div className="py-4">
        <p className="whitespace-pre-wrap text-[14px] leading-[19.6px]">
          {`제1조 (목적)\n이 약관은 팀토핑(이하 "회사")이 제공하는 가치관 기반 매칭 플로잉(이하"서비스")와 관련하여 회사와 회원 간의 권리, 의무 및 책임 사항, 기타 필요한 사항을 규정함을 목적으로 합니다.`}
        </p>
        <p className="mt-4 text-[14px] leading-[19.6px]">제2조 (용어 정의)</p>
        <ol className="list-inside list-decimal pl-1 text-[14px] leading-[19.6px]">
          <li className="pl-4 -indent-4">
            서비스: 회사가 운영하는 웹사이트 및 관련 플랫폼을 통해 제공되는 매칭, 채팅, 오프라인
            파티 등 일체의 서비스를 의미합니다.
          </li>
          <li className="pl-4 -indent-4">
            회원: 회사와 서비스 이용계약을 체결하고 서비스를 이용하는 자를 의미합니다.
          </li>
          <li className="pl-4 -indent-4">
            구독 서비스: 회원이 월 단위로 결제하여 채팅 제한 해제 및 할인 혜택을 받는 유료 서비스를
            의미합니다.
          </li>
          <li className="pl-4 -indent-4">
            프리미엄 패키지: 회원이 일회성 결제로 매칭 및 추가 혜택을 제공받는 유료 서비스를
            의미합니다.
          </li>
          <li className="pl-4 -indent-4">
            오프라인 파티: 회사가 주최하는 단체 모임으로, 회원 간 자연스러운 교류를 위한 이벤트를
            의미합니다.
          </li>
        </ol>
        <p className="mt-4 text-[14px] leading-[19.6px]">제3조 (약관의 효력 및 변경)</p>
        <ol className="list-inside list-decimal pl-1 text-[14px] leading-[19.6px]">
          <li className="pl-4 -indent-4">
            본 약관은 서비스를 이용하려는 모든 회원에게 적용됩니다.
          </li>
          <li className="pl-4 -indent-4">
            회사는 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지 또는 회원이 제공한 이메일로
            통지함으로써 효력이 발생합니다
          </li>
          <li className="pl-4 -indent-4">
            회원은 변경된 약관에 동의하지 않을 경우, 서비스 이용을 중단하고 탈퇴할 수 있습니다.
          </li>
        </ol>
        <p className="mt-4 text-[14px] leading-[19.6px]">제4조 (서비스 이용 계약)</p>
        <ol className="list-inside list-decimal pl-1 text-[14px] leading-[19.6px]">
          <li className="pl-4 -indent-4">
            서비스 이용 계약은 회원이 약관에 동의하고 서비스 가입 절차를 완료한 후, 회사가 이를
            승인함으로써 성립됩니다.
          </li>
          <li className="pl-4 -indent-4">
            회사는 다음과 같은 경우 서비스 신청을 거부할 수 있습니다.
            <ol className="list-disc">
              <li className="pl-4 -indent-4">허위 정보를 입력하거나 타인의 정보를 도용한 경우.</li>
              <li className="pl-4 -indent-4">기타 부정한 목적으로 신청한 경우.</li>
            </ol>
          </li>
        </ol>
        <p className="mt-4 text-[14px] leading-[19.6px]">제5조 (회원의 의무)</p>
        <ol className="list-inside list-decimal pl-1 text-[14px] leading-[19.6px]">
          <li className="pl-4 -indent-4">
            회원은 서비스를 이용함에 있어 다음의 행위를 해서는 안 됩니다.
            <ol className="list-disc">
              <li className="pl-4 -indent-4">
                타인의 개인정보를 무단으로 수집, 저장, 공개하는 행위.
              </li>
              <li className="pl-4 -indent-4">
                서비스 운영을 방해하거나 시스템에 손해를 가하는 행위.
              </li>
              <li className="pl-4 -indent-4">법령 및 공공질서에 위반되는 행위.</li>
            </ol>
          </li>
          <li className="pl-4 -indent-4">
            회원은 자신의 계정 정보(아이디, 비밀번호 등)를 안전하게 관리할 책임이 있습니다.
          </li>
        </ol>
        <p className="mt-4 text-[14px] leading-[19.6px]">제6조 (회사의 의무)</p>
        <ol className="list-inside list-decimal pl-1 text-[14px] leading-[19.6px]">
          <li className="pl-4 -indent-4">
            회사는 관련 법령에 따라 회원의 개인정보를 안전하게 관리하며, 서비스 운영 목적 외에는
            이를 사용하지 않습니다.
          </li>
          <li className="pl-4 -indent-4">
            회사는 회원이 원활하게 서비스를 이용할 수 있도록 최선을 다합니다.
          </li>
        </ol>
        <p className="mt-4 text-[14px] leading-[19.6px]">제7조 (결제 및 환불 정책)</p>
        <ol className="list-inside text-[14px] leading-[19.6px]">
          <li className="pl-4 -indent-2">
            A. 결제 정책
            <ol className="list-inside list-decimal">
              <li className="pl-4 -indent-4">
                회원은 서비스 이용료를 결제해야만 유료 서비스를 이용할 수 있습니다.
              </li>
              <li className="pl-4 -indent-4">
                구독 서비스는 월 단위로 자동 갱신되며, 회원이 구독 취소를 요청하지 않는 한 매월
                동일한 금액이 청구됩니다.
              </li>
              <li className="pl-4 -indent-4">
                프리미엄 패키지 결제는 일회성 결제로, 매칭 12회 및 부가 혜택이 포함된 상품입니다.
              </li>
            </ol>
          </li>
        </ol>
        <ol className="list-inside text-[14px] leading-[19.6px]">
          <li className="pl-4 -indent-2">
            B. 환불 정책
            <ol className="list-inside">
              <li className="pl-1 text-[14px] leading-[19.6px]">1. 구독 서비스:</li>
            </ol>
            <ol className="list-inside list-disc">
              <li className="pl-4 -indent-4">
                회원은 서비스 이용료를 결제해야만 유료 서비스를 이용할 수 있습니다.
              </li>
              <li className="pl-4 -indent-4">
                구독 서비스는 월 단위로 자동 갱신되며, 회원이 구독 취소를 요청하지 않는 한 매월
                동일한 금액이 청구됩니다.
              </li>
              <li className="pl-4 -indent-4">
                프리미엄 패키지 결제는 일회성 결제로, 매칭 12회 및 부가 혜택이 포함된 상품입니다.
              </li>
            </ol>
            <ol className="list-inside">
              <li className="pl-1 text-[14px] leading-[19.6px]">2. 프리미엄 서비스:</li>
            </ol>
            <ol className="list-inside list-disc">
              <li className="pl-4 -indent-4">
                매칭 또는 부가 혜택(파티 참석 등)을 1회라도 사용한 경우, 환불이 불가합니다.
              </li>
              <li className="pl-4 -indent-4">
                매칭 또는 부가 혜택(파티 참석 등)을 1회라도 사용한 경우, 환불이 불가합니다.
              </li>
            </ol>
          </li>
        </ol>
        <ol className="list-inside text-[14px] leading-[19.6px]">
          <li className="pl-4 -indent-2">
            C. 취소 정책
            <ol className="list-inside list-decimal">
              <li className="pl-1 text-[14px] leading-[19.6px]">
                구독 서비스는 만료일 전까지 회원이 직접 취소하지 않으면 자동 갱신됩니다.
              </li>
              <li className="pl-1 text-[14px] leading-[19.6px]">
                오프라인 파티 예약은 파티 시작일 기준 3일 전까지 취소 가능하며, 취소 시 전액
                환불됩니다.
              </li>
            </ol>
            <ol className="list-disc pl-3">
              <li className="pl-4 -indent-4 text-[14px] leading-[19.6px]">
                파티 시작일 기준 3일 이내 취소 시 환불이 불가능합니다.
              </li>
            </ol>
          </li>
        </ol>
        <p className="mt-4 text-[14px] leading-[19.6px]">제8조 (서비스 제공 및 제한)</p>
        <ol className="list-inside list-decimal pl-1 text-[14px] leading-[19.6px]">
          <li className="pl-4 -indent-4">
            회사는 회원의 가치관과 성향에 기반한 매칭 서비스를 제공하며, 필요에 따라 단체 파티 및
            관련 부가 서비스를 운영합니다.
          </li>
          <li className="pl-4 -indent-4">
            회사는 다음과 같은 경우 서비스 제공을 제한할 수 있습니다.
            <ol className="list-disc pl-3">
              <li className="pl-4 -indent-4 text-[14px] leading-[19.6px]">
                회원이 약관을 위반하거나 타인의 권리를 침해한 경우.
              </li>
              <li className="pl-4 -indent-4 text-[14px] leading-[19.6px]">
                시스템 점검, 기술적 문제 등 불가피한 사유가 있는 경우.
              </li>
            </ol>
          </li>
        </ol>
        <p className="mt-4 text-[14px] leading-[19.6px]">제9조 (책임의 제한)</p>
        <ol className="list-inside list-decimal pl-1 text-[14px] leading-[19.6px]">
          <li className="pl-4 -indent-4">
            회사는 회원 간의 개인적 연결, 대화, 만남에서 발생하는 분쟁에 대해 책임을 지지 않습니다.
          </li>
          <li className="pl-4 -indent-4">
            회사는 천재지변, 기술적 결함 등 불가항력적인 사유로 인해 발생한 서비스 장애에 대해
            책임을 지지 않습니다.
          </li>
        </ol>
        <p className="mt-4 text-[14px] leading-[19.6px]">제10조 (개인정보 보호)</p>
        <ol className="list-inside list-decimal pl-1 text-[14px] leading-[19.6px]">
          <li className="pl-4 -indent-4">
            회사는 관련 법령에 따라 회원의 개인정보를 보호하며, 개인정보 처리에 관한 세부 사항은
            개인정보처리방침에 따릅니다.
          </li>
          <li className="pl-4 -indent-4">
            회원은 자신의 개인정보가 잘못된 경우 이를 수정할 권리가 있습니다.
          </li>
        </ol>
        <p className="mt-4 text-[14px] leading-[19.6px]">제11조 (분쟁 해결 및 관할)</p>
        <ol className="list-inside list-decimal pl-1 text-[14px] leading-[19.6px]">
          <li className="pl-4 -indent-4">
            회사와 회원 간 분쟁은 상호 신뢰를 바탕으로 원만히 해결합니다.
          </li>
          <li className="pl-4 -indent-4">
            협의가 어려운 경우, 관할 법원은 회사 본사 소재지의 법원으로 합니다.
          </li>
        </ol>
        <p className="mt-4 text-[14px] leading-[19.6px]">부칙</p>
        <p className="pl-4 text-[14px] leading-[19.6px]">
          본 약관은 2024년 12월 10일부터 시행됩니다.
        </p>
      </div>
    </PopupContainer>
  );
}
