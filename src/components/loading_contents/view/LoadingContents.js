import axios from "axios";
import { useState } from "react";
import LoadingItemarray from "../Array";
import { LoadingSection } from "../style/LoadingStyle";

const LoadingContents = () => {
  // const crawlingData = [];
  // const [crawlingData, setCrawlingData] = useState([]);
  // const crawling = () => {
  //   const cheerio = require("cheerio");
  //   axios
  //     .get(`https://cors-anywhere.herokuapp.com/http://www.designhouse.co.kr/`)
  //     .then((res) => {
  //       const $ = cheerio.load(res.data);
  //       const BodyList = $("body .main_container02 .photo_list").children("li");
  //       BodyList.each(function (i) {
  //         setCrawlingData[i] = {
  //           type: $(this).find(".cate_tit").text(),
  //           title: $(this).find(".tit").text(),
  //           contents: $(this).find(".txt").text(),
  //           img_url: $(this).find("img").attr("src"),
  //         };
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   return crawlingData;
  // };
  // console.log("crawlingData", crawlingData);
  // crawling();
  return (
    <LoadingSection.LoadingFrame>
      <ul className="flex flex_dir_c flex_flow_w flex_ai_s flex_jc_sb">
        <LoadingItemarray/>
      </ul>
    </LoadingSection.LoadingFrame>
  );
};

export default LoadingContents;
