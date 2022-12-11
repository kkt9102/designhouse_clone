import { HeaderSection } from "../style/headerStyle";
import images from "../../../resources/img/img";
const Header = () => {
  return(
    <HeaderSection.HeaderFrame>
      <ul className="left_menu flex">
        <li className="bars_btn">
          <span></span>
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
          <span>STLYE</span>
        </li>
        <li>
          <span>CULTURE</span>
        </li>
      </ul>
      <ul className="right_menu flex">
        <li className="logo">
          <div className="img_box">
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
          <ul>
            <li className="login">
              <span></span>
            </li>
            <li className="search">
              <span></span>
            </li>
          </ul>
        </li>
      </ul>
    </HeaderSection.HeaderFrame>
  )
}

export default Header;