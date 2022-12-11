import { ExhibitionSection } from "../style/exhibitionStyle";

const ExhibitionList = () => {
  return(
    <ExhibitionSection.ListFrame>
      <h3 className="sc_tit">전시</h3>
      <ul className="exhibition_list flex">
        <li className="relative flex flex_jc_s">
          <div className="img_box">
            <img src="" alt=""/>
          </div>
          <div className="exhibition_info flex flex_dir_c">
            <div>
              <div className="exhibition_tit">서울리빙디자인페어</div>
              <div className="exhibition_date">2022.2.23~2.27</div>
              <div className="exhibition_location">코엑스</div>
            </div>
            <div></div>
          </div>
        </li>
        <li className="relative flex flex_jc_s">
          <div className="img_box">
            <img src="" alt=""/>
          </div>
          <div className="exhibition_info flex flex_dir_c">
            <div>
              <div className="exhibition_tit">서울디자인 페스티벌</div>
              <div className="exhibition_date">2022.12.20~12.23</div>
              <div className="exhibition_location">코엑스</div>
            </div>
            <div></div>
          </div>
        </li>
      </ul>
    </ExhibitionSection.ListFrame>
  )
}

export default ExhibitionList;