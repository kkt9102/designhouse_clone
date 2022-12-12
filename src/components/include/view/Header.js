import { HeaderSection } from "../style/headerStyle";
import images from "../../../resources/img/img";
const Header = () => {
  return(
    <HeaderSection.HeaderFrame>
      <ul className="left_menu flex">
        <li className="bars_btn">
          <div className="img_box">
            <img src={images.bars_btn} alt=""/>
          </div>
        </li>
        <li className="drop_menu relative">
          <span>ABOUT</span>
          <ul className="absolute">
            <li>
              <span>BUSINESS</span>
            </li>
            <li>
              <span>COMPANY</span>
            </li>
          </ul>
        </li>
        <li>
          <span>DESIGN</span>
        </li>
        <li>
          <span>LIVING</span>
        </li>
        <li>
          <span>STYLE</span>
        </li>
        <li>
          <span>CULTURE</span>
        </li>
      </ul>
      <ul className="right_menu flex">
        <li className="logo">
          <div className="img_box flex flex_jc_s">
            <img src={images.Logo_web} alt=""/>
          </div>
        </li>
        <li>
          <span>LIBARY</span>
        </li>
        <li>
          <span>CLASS&TOUR</span>
        </li>
        <li>
          <span>MEMBERSHIP LOUNGE</span>
        </li>
        <li>
          <span>구독&쇼핑</span>
        </li>
        <li>
          <span>EVENT</span>
        </li>
        <li>
          <ul className="flex">
            <li className="login">
              <div className="login img_box">
                <img src={images.header_mypage} alt=""/>
              </div>
            </li>
            <li className="search">
              <div className="login img_box">
                <img src={images.header_search} alt=""/>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </HeaderSection.HeaderFrame>
  )
}

export default Header;