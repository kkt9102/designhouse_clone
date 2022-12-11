import { useState } from "react";
import { HeaderSection } from "../style/headermenuStyle";
import images from "../../../resources/img/img";

const HeaderMenu = () => {
  const [ search, setSearch ] = useState(false);

  const onSearchModeToggle = () => {
    setSearch(search);
  };
  
  return(
    <HeaderSection.HeaderFrame>
      <ul className="left_menu flex flex_ai_c">
        <li className="bars_btn">
          <div className="img_box">
            <img src={images.bars_btn} alt="전체메뉴 열기"/>
          </div>
        </li>
        <li className="relative">
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
      <ul className="right_menu flex flex_jc_sb flex_ai_c">
        <li className="logo">
          <div className="img_box flex flex_jc_s">
            <img src={images.Logo_web} alt=""/>
          </div>
        </li>
        <ul className="relative flex flex_jc_sb flex_ai_c">
          <li className={`${search !== true ? "" : "active"} search_mode absolute`}>
            <label htmlFor=""></label>
            <input type="text" placeholder="SEARCH FOR INFOMATION"/>
            <button className="search_btn flex flex_jc_c flex_ai_c img_box">
              <img src={images.header_search_active} alt="통합검색 바로가기"/>
            </button>
          </li>
          <li>
            <span>LIBRARY</span>
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
          <li className="flex flex_jc_sb flex_as_st">
            <div className="flex flex_jc_c flex_ai_c img_box">
              <img src={images.header_mypage} alt="마이페이지 바로가기"/>
            </div>
            <div className="flex flex_jc_c flex_ai_c img_box" onClick={onSearchModeToggle}>
              <img src={images.header_search} alt="통합검색 바로가기"/>
            </div>
          </li>
        </ul>
      </ul>
    </HeaderSection.HeaderFrame>
  )
}

export default HeaderMenu;