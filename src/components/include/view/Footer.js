import images from "../../../resources/img/img";
import { FooterSection } from "../style/footerStyle";

const FooterTopMenu = [
  {
    tit: "월간디자인"
  },
  {
    tit: "행복이 가득한 집"
  },
  {
    tit: "럭셔리"
  },
  {
    tit: "서울리빙디자인페어"
  },
  {
    tit: "부산디자인워크"
  },
  {
    tit: "서울디자인페스티벌"
  },
  {
    tit: "크리에이터스그라운드"
  },
];
const FooterBottomMenu = [
  {
    tit: "회사소개"
  },
  {
    tit: "서비스이용약관"
  },
  {
    tit: "개인정보처리방침"
  },
  {
    tit: "고객센터"
  },
  {
    tit: "정기구독"
  },
  {
    tit: "제휴문의"
  },
  {
    tit: "광고문의"
  },
];
const Footer = () => {
  return(
    <FooterSection.FooterFrame>
      <div className="top_section flex flex_dir_c">
        <div className="footer_logo flex flex_jc_c img_box">
          <img src={images.footer_logo} alt=""/>
        </div>
        <ul className="flex flex_jc_c">
          {FooterTopMenu.map((item, index) => 
            <li key={index} className="cursor_p">{item.tit}</li>
          )}
        </ul>
      </div>
      <div className="bottom_section flex flex_dir_c flex_ai_c flex_jc_c">
        <ul className="flex flex_jc_c">
          {FooterBottomMenu.map((item, index) => 
            <li key={index} className="cursor_p">{item.tit}</li>
          )}
        </ul>
        <ul className="comp_info flex flex_jc_c">
          <li>서울시 중구 동호로 272 ㈜ 디자인하우스</li>
          <li>대표자 이영혜</li>
          <li>사업자등록번호 203-81-43529</li>
          <li>전화번호 02-2275-6151</li>
        </ul>
        <p className="copyright flex flex_jc_c">Copyright © 2016 Designhouse inc. All rights reserved.</p>
      </div>
    </FooterSection.FooterFrame>
  )
}

export default Footer;