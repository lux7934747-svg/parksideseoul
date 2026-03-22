
import React, { useState } from 'react';
import Section from './Section';
import { ReservationData } from '../types';

const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    time: '',
    privacy: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const privacyPolicy = `파크사이드(이하 "회사"라 함)는 이용자들의 개인정보보호를 매우 중요시하며, 이용자가 회사의 서비스를 이용함과 동시에 온라인상에서 회사에 제공한 개인정보가 보호 받을 수 있도록 최선을 다하고 있습니다. 이에 회사는 통신비밀보호법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 정보통신 서비스 제공자가 준수하여야 할 관련 법규상의 개인정보보호 규정 및 정보통신부가 제정한 개인정보보호지침을 준수하고 있습니다. 회사는 개인정보취급방침을 통하여 이용자들이 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.

회사는 개인정보취급방침을 홈페이지 첫 화면에 공개함으로써 이용자들이 언제나 용이하게 보실 수 있도록 조치하고 있습니다.

회사의 개인정보취급방침은 정부의 법률 및 지침 변경이나 회사의 내부 방침 변경 등으로 인하여 수시로 변경될 수 있고, 이에 따른 개인정보취급방침의 지속적인 개선을 위하여 필요한 절차를 정하고 있습니다. 그리고 개인정보취급방침을 개정하는 경우 회사는 개인정보취급방침 변경 시행 7일 전부터 더파크사이드 공지사항을 통하여 공지하고 버전번호 및 개정일자 등을 부여하여 개정된 사항을 이용자들이 쉽게 알아볼 수 있도록 하고 있습니다.

더파크사이드의 개인정보취급방침은 다음과 같은 내용을 담고 있습니다.

가. 개인정보 수집에 대한 동의
나. 개인정보의 수집목적 및 이용목적
다. 더파크사이드가 수집하는 개인정보의 보유 및 이용기간
라. 더파크사이드가 수집한 개인정보의 공유 및 제공
마. 이용자 자신의 개인정보 관리(열람,정정,삭제 등)에 관한 사항
바. 쿠키(cookie)의 운영에 관한 사항
사. 개인정보관련 기술적-관리적 대책
아. 개인정보의 위탁처리
자. 개인정보관련 의견수렴 및 불만처리에 관한 사항
차. 회사 개인정보 관리책임자 및 담당자의 소속 - 성명 및 연락처
카. 고지의 의무
가. 개인정보 수집에 대한 동의
회사는 이용자들이 회사의 개인정보취급방침 또는 이용약관의 내용에 대하여 「동의」 버튼 또는 「취소」 버튼을 클릭할 수 있는 절차를 마련하여, 「동의」 버튼을 클릭하면 개인정보 수집에 대해 동의한 것으로 봅니다.
나. 개인정보의 수집목적 및 이용목적
"개인정보"라 함은 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명, 연락처, 이메일 등의 사항에 의하여 당해 개인을 식별할 수 있는 정보(당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함)를 말합니다. 대부분의 더파크사이드 서비스는 별도의 사용자 등록이 없이 언제든지 사용할 수 있습니다. 그러나 회사는 로그인 기반의 회원 서비스를 통하여 이용자들에게 맞춤식 서비스를 비롯한 보다 더 향상된 양질의 서비스를 제공하기 위하여 이용자 개인의 정보를 수집하고 있습니다.
회사는 이용자의 사전 동의 없이는 이용자의 개인 정보를 공개하지 않으며, 수집된 정보는 아래와 같이 이용하고 있습니다. 첫째, 이용자들이 제공한 개인정보를 바탕으로 보다 더 유용한 서비스를 개발할 수 있습니다. 회사는 신규 서비스개발이나 컨텐츠의 확충시에 기존 이용자들이 회사에 제공한 개인정보를 바탕으로 개발해야 할 서비스의 우선 순위를 보다 더 효율적으로 정하고, 회사는 이용자들이 필요로 할 컨텐츠를 합리적으로 선택하여 제공할 수 있습니다.
둘째, 회사가 제공하는 각종 정보 및 서비스 등은 대부분 무료입니다. 회사는 이러한 무료 서비스를 제공하기 위해서 광고를 게재하고 있는데, 이용자들에 대한 정확한 개인정보를 바탕으로 각 서비스나 메뉴 등에 적절하게 광고와 내용들을 전달해 드릴 수 있으며, 이것은 궁극적으로 회사가 이용자 여러분들게 드리는 또 하나의 정보로서의 가치를 지니게 됩니다. 회사는 광고주들로부터 광고를 받아 광고주들이 대상으로 하려는 이용자의 유형에 맞게 광고를 보여줄 뿐, 광고주들에게는 절대로 이용자들의 개인정보를 보여주거나 제공하지 않습니다.
다. 더파크사이드가 수집하는 개인정보의 보유 및 이용기간
귀하의 개인정보는 다음과 같이 개인정보의 수집목적 또는 제공받은 목적이 달성되면 재생할 수 없는 방법으로 파기하는 것을 원칙으로 합니다. 다만, 회사는 불량 회원의 부정한 이용의 재발을 방지하기 위해, 이용계약 해지일로부터 1년간 해당 회원의 수집된 개인정보를 보유할 수 있습니다. 그리고 상법,전자상거래등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.

- 계약 또는 청약철회 등에 관한 기록 : 5년
- 대금결제 및 재화등의 공급에 관한 기록 : 5년
- 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
수집항목
수집방법 : 당사 서비스 가입시
필수항목 : 아이디, 비밀번호, 휴대전화번호, 이메일, 홈페이지 주소
회사는 귀중한 회원의 개인정보를 안전하게 처리하며, 유출의 방지를 위하여 다음과 같은 방법을 통하여 개인정보를 파기합니다.
라. 수집한 개인정보의 공유 및 제공
회사는 이용자들의 개인정보를 "나. 개인정보의 수집목적 및 이용목적"에서 고지한 범위내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.

- 이용자들이 사전에 공개에 동의한 경우
- 서비스 제공에 따른 요금정산을 위하여 필요한 경우
- 홈페이지에 게시한 서비스 이용 약관 및 기타 회원 서비스 등의 이용약관 또는 운영 원칙을 위반한 경우
- 서비스를 이용하여 타인에게 정신적, 물질적 피해를 줌으로써 그에 대한 법적인 조치를 취하기 위하여 개인정보를 공개해야 한다고 판단되는 충분한 근거가 있는 경우
- 기타 법에 의해 요구된다고 선의로 판단되는 경우 (ex. 관련법에 의거 적법한 절차에 의한 정부/ 수사기관의 요청이 있는 경우 등)
- 통계작성,학술연구나 시장조사를 위하여 특정개인을 식별할 수 없는 형태로 광고주, 협력업체나 연구 단체 등에 제공하는 경우
- 이용자의 서비스 이용에 따른 불만사항 및 문의사항(민원사항)의 처리를 위하여 고객센터를 운영하는 전문업체에 해당 민원사항의 처리에 필요한 개인정보를 제공하는 경우 회사는 귀중한 회원의 개인정보를 안전하게 처리하며, 유출의 방지를 위하여 다음과 같은 방법을 통하여 개인정보를 파기합니다.
마. 이용자 자신의 개인정보 관리(열람,정정,삭제 등)에 관한 사항
이용자는 언제든지 주식회사 스마트아이피를 이용하여 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다. 이용자들의 개인정보 조회 및 수정을 위해서는 케이웹미디어 회원관리 메뉴에서 아이디와 비밀번호를 사용하여 로그인(LOG-IN)하면 되는데, 아이디(ID)를 제외한 모든 입력사항을 수정할 수 있습니다. 또한, 비밀번호를 잊어버린 경우에는 회원 로그인 메뉴 하단에 있는 "비밀번호 찾기"를 클릭하여 고객센터의 안내사항에 따라 본인 확인에 필요한 사항을 입력하시면, 본인여부 확인 후 SMS를 통하여 임시 비밀번호를 알려 드리거나 즉시 비밀번호 변경이 가능하십니다.
바. 쿠키(cookie)의 운영에 관한 사항
이용자들에게 특화된 맞춤서비스를 제공하기 위해서 더파크사이드는 이용자들의 정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다. 쿠키는 웹사이트를 운영하는데 이용되는 서버(더파크사이드)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다. 이용자들이 스마트아이피에 접속한 후 로그인(LOG-IN)하여 회원서비스 및 주식회사 스마트아이피 등의 서비스를 이용하기 위해서는 쿠키를 허용하셔야 합니다. 더파크사이드는 이용자들에게 적합하고 보다 유용한 서비스를 제공하기 위해서 쿠키를 이용하여 아이디에 대한 정보를 찾아냅니다. 쿠키는 이용자의 컴퓨터는 식별하지만 이용자를 개인적으로 식별하지는 않습니다. 쿠키를 이용하여 이용자들이 방문한 더파크사이드의 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 이용자 규모 등을 파악하여 더욱 더 편리한 서비스를 만들어 제공할 수 있고 이용자에게 최적화된 정보를 제공할 수 있습니다. 이용자들은 쿠키에 대하여 사용여부를 선택할 수 있습니다. 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용할 수도 있고, 쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수도 있습니다. 다만, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 케이웹미디어의 일부 서비스는 이용할 수 없습니다.
사. 개인정보관련 기술적-관리적 대책
회사는 이용자들의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적 대책을 강구하고 있습니다. 이용자들의 개인정보는 비밀번호에 의해 철저히 보호되고 있습니다. 더파크사이드 회원 아이디(ID)의 비밀번호는 본인만이 알고 있으며, 개인정보의 확인 및 변경도 비밀번호를 알고 있는 본인에 의해서만 가능합니다. 따라서 이용자 여러분께서는 비밀번호를 누구에게도 알려주시면 안됩니다. 이를 위해 회사에서는 기본적으로 PC에서의 사용을 마치신 후 온라인상에서 로그아웃(LOG-OUT)하시고 웹브라우저를 종료하도록 권장합니다. 특히 다른 사람과 PC를 공유하여 사용하거나 공공장소(회사나 학교, 도서관, 인터넷 게임방 등)에서 이용한 경우에는 개인정보가 다른 사람에게 알려지는 것을 막기 위해 위와 같은 절차가 더욱 필요할 것입니다.
회사는 해킹이나 컴퓨터 바이러스 등에 의해 회원의 개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고 있습니다. 개인정보의 훼손에 대비해서 자료를 수시로 백업하고 있고, 최신 백신프로그램을 이용하여 이용자들의 개인정보나 자료가 누출되거나 손상되지 않도록 방지하고 있으며, 암호화통신 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있습니다. 그리고 침입 차단 시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있으며, 기타 시스템적으로 보안성을 확보하기 위한 가능한 모든 기술적 장치를 갖추려 노력하고 있습니다.
회사의 개인정보관련 취급 직원은 담당자에 한정시키고 있고 이를 위한 별도의 비밀번호를 부여하여 정기적으로 갱신하고 있으며, 담당자에 대한 수시 교육을 통하여 더파크사이드 개인정보취급방침의 준수를 항상 강조하고 있습니다. 그리고 사내 개인정보전담기구 등을 통하여 더파크사이드 개인정보취급방침의 이행사항 및 담당자의 준수여부를 확인하여 문제가 발견될 경우 즉시 수정하고 바로 잡을 수 있도록 노력하고 있습니다. 단, 이용자 본인의 부주의나 인터넷상의 문제로 ID, 비밀번호 등 개인정보가 유출해 발생한 문제에 대해 회사는 일체의 책임을 지지 않습니다.
아. 개인정보의 위탁처리
회사는 서비스 향상을 위해서 이용자들의 개인정보를 외부전문업체에 위탁하여 처리할 수 있습니다. 개인정보의 처리를 위탁하는 경우에는 미리 그 사실을 이용자들에게 공지할 것입니다. 또한 위탁계약 등을 통하여 서비스 제공자의 개인정보보호 관련 지시엄수, 개인정보에 관한 비밀유지, 제3자 제공의 금지 및 사고시의 책임부담 등을 명확히 규정하고 당해 계약내용을 서면 또는 전자적으로 보관할 것입니다.
자. 개인정보관련 의견수렴 및 불만처리에 관한 사항
회사는 개인정보보호와 관련하여 이용자 여러분들의 의견을 수렴하고 있으며 불만을 처리하기 위하여 모든 절차와 방법을 마련하고 있습니다. 이용자들은 하단에 명시한 "더파크사이드 개인정보 관리책임자 및 담당자의 소속-성명 및 연락처" 항을 참고하여 전화나 메일을 통하여 불만사항을 신고할 수 있고, 회사는 이용자들의 신고사항에 대하여 신속하고도 충분한 답변을 해 드릴 것입니다. 또는 정부에서 설치하여 운영중인 아래의 기관에 불만처리를 신청할 수 있습니다.
- 개인정보 침해신고센터 (https://privacy.kisa.or.kr/, 전화 (국번없이) 118)
- 개인정보 분쟁조정위원회 (https://www.kopico.go.kr/, 전화 (국번없이) 1833-6972)
- 대검찰청 사이버범죄수사단 (https://www.spo.go.kr/, 전화 02-3480-3573)
- 경찰청 사이버안전국 (http://cyberbureau.police.go.kr, 전화 (국번없이) 182)
- 경찰청 (https://www.police.go.kr/)
차. 회사 개인정보 관리책임자 및 담당자의 소속 - 성명 및 연락처
회사는 이용자가 좋은 정보를 안전하게 이용할 수 있도록 최선을 다하고 있습니다. 개인정보를 보호하는데 있어 이용자께 고지한 사항들에 반하는 사고가 발생할 경우 개인정보관리 책임자가 책임을 집니다.
이용자 개인정보와 관련한 아이디(ID)의 비밀번호에 대한 보안유지책임은 해당 이용자 자신에게 있습니다. 회사는 비밀번호에 대해 어떠한 방법으로도 이용자에게 직접적으로 질문하는 경우는 없으므로 타인에게 비밀번호가 유출되지 않도록 각별히 주의하시기 바랍니다. 공공장소에서 온라인상에서 접속해 있을 경우에는 더욱 유의하셔야 합니다. 회사는 개인정보에 대한 의견수렴 및 불만처리를 담당하는 개인정보 관리책임자 및 담당자를 지정하고 있습니다. (담당자 더파크사이드 : 02-793-4747)
카. 고지의 의무
현 개인정보취급방침의 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일 전부터 홈페이지의 '공지사항' 을 통해 고지할 것입니다.`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    setSubmitted(true);

    try {
      const response = await fetch('https://formspree.io/f/mojkzryg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          preferred_time: formData.time,
          privacy_agreed: formData.privacy ? 'Yes' : 'No'
        })
      });

      if (response.ok) {
        alert('관심 고객 등록이 완료되었습니다. 전문 컨설턴트가 곧 연락 드리겠습니다.');
        setFormData({ name: '', phone: '', time: '', privacy: false });
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          throw new Error(data.errors.map((error: any) => error.message).join(', '));
        } else {
          throw new Error('서버 응답 오류가 발생했습니다.');
        }
      }
    } catch (error: any) {
      console.error('Error submitting reservation:', error.message);
      alert('등록 중 오류가 발생했습니다. 잠시 후 다시 시도해주시거나 전화로 문의 부탁드립니다.');
    } finally {
      setSubmitted(false);
    }
  };

  return (
    <Section id="reservation" className="bg-[#F5F2ED] py-32 px-8">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="font-serif text-5xl">관심고객등록</h3>
            <p className="text-[#8C847E] font-light leading-relaxed">
              더 파크사이드 서울은 사전 예약제로 운영되는 프라이빗 홍보관입니다. <br />
              상담을 원하시는 고객님께서는 정보를 남겨주시면 전문 컨설턴트가 연락 드리겠습니다.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[10px] tracking-[0.3em] font-bold text-[#C5A059] mb-2 uppercase">Gallery Location</p>
              <p className="text-sm font-light">서울특별시 용산구 한남동 더 파크사이드 서울 홍보관</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] font-bold text-[#C5A059] mb-2 uppercase">분양문의</p>
              <p className="text-xl font-serif">02-793-4747</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-12 shadow-sm border border-[#D4C4B5]/30">
          <div className="space-y-6">
            <div className="relative border-b border-[#D4C4B5] pb-2">
              <input
                type="text"
                name="name"
                placeholder="이름 (Name)"
                className="w-full bg-transparent outline-none text-sm font-light placeholder:text-[#8C847E]"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div className="relative border-b border-[#D4C4B5] pb-2">
              <input
                type="tel"
                name="phone"
                placeholder="연락처 (Contact)"
                className="w-full bg-transparent outline-none text-sm font-light placeholder:text-[#8C847E]"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
            <div className="relative border-b border-[#D4C4B5] pb-2">
              <select
                name="preferred_time"
                className="w-full bg-transparent outline-none text-sm font-light text-[#2D2926]"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                required
              >
                <option value="" disabled>희망 상담 시간</option>
                <option value="morning">오전 (10:00 - 12:00)</option>
                <option value="afternoon">오후 (13:00 - 17:00)</option>
                <option value="evening">저녁 (17:00 - 19:00)</option>
              </select>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacy"
              className="mt-1 accent-[#C5A059]"
              checked={formData.privacy}
              onChange={(e) => setFormData({...formData, privacy: e.target.checked})}
            />
            <label 
              htmlFor="privacy" 
              className="text-[10px] text-[#8C847E] leading-tight cursor-pointer"
            >
              <span 
                onClick={(e) => {
                  e.preventDefault();
                  setShowPrivacy(true);
                }}
                className="underline hover:text-[#C5A059] transition-colors"
              >
                개인정보 수집 및 이용에 동의합니다.
              </span> (Private Data Policy)
            </label>
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="w-full bg-[#0A192F] text-[#F5F2ED] py-4 text-xs tracking-[0.4em] hover:bg-[#C5A059] transition-all disabled:opacity-50"
          >
            {submitted ? 'PROCESSING...' : 'SUBMIT REQUEST'}
          </button>
        </form>
      </div>

      {/* Privacy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl">
            <div className="p-6 border-b border-[#D4C4B5] flex justify-between items-center">
              <h4 className="font-serif text-xl">개인정보취급방침</h4>
              <button 
                onClick={() => setShowPrivacy(false)}
                className="text-[#8C847E] hover:text-[#2D2926] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-sm text-[#2D2926] leading-relaxed whitespace-pre-wrap font-light">
              {privacyPolicy}
            </div>
            <div className="p-6 border-t border-[#D4C4B5] flex justify-end">
              <button 
                onClick={() => setShowPrivacy(false)}
                className="bg-[#0A192F] text-white px-8 py-3 text-xs tracking-widest hover:bg-[#C5A059] transition-all"
              >
                닫기 (CLOSE)
              </button>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default ReservationForm;
