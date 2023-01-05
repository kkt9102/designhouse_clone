import images from "../../resources/img/img";

const LoadingItems = [
  {
    type: "4",
    img: `${images.content3}`,
    title: "문성환ㆍ고진영 부부의 최소한의 집",
    contents: "고정관념을 깨는 것은 때로는 전혀 예상치 못한 방향으로 성과를 내기도 한다. 공간 디자인에서도 마찬가지. 작은 공간은 오픈 플랜 방식으로 구성해야 답답해 보이지 않는다, 방은 사방이 막혀 있어야 한..."
  },
  {
    type: "1",
    img: `${images.content4}`,
    title: "다음 세대를 위한 디자인 스쿨 브랜딩 ",
    contents: "로드아일랜드 디자인 대학교(Rhode Island School of Design, RISD)와 일리노이 공과대학교 디자인 대학(IIT Institue of Design, ID)이 비슷한 시기에 새로운 아이덴티티 디자인을 내놓았다. RISD의 리뉴얼은 블랙 라이브스 ..."
  },
  {
    type: "3",
    img: `${images.content5}`,
    title: "2022 서울라이트 DDP",
    contents: "독창적인 미디어 아트로 DDP의 은빛 패널을 가득 채우는 빛의 축제가 올해도 어김없이 돌아왔다. 오는 연말에는 ‘우주적 삶’을 주제로 관람객의 상상력을 한껏 자극할 예정이다. "
  },
  {
    type: "2",
    img: `${images.content6}`,
    title: "WINTER BREEZE",
    contents: "추운 겨울날 연말 선물 추천"
  },
  {
    type: "4",
    img: `${images.content7}`,
    title: "에피그램 강진에서 준비한 한옥에서의 하루",
    contents: "‘일상의 발견과 가치 소비’를 모토로 하는 라이프스타일 브랜드 에피그램은 2017년부터 국내 소도시 한 곳을 정해 그곳의 문화를 알리는 로컬 프로젝트를 전개하고 있다. 지역의 아름다운 경치와 사람, ..."
  },
  {
    type: "3",
    img: `${images.content8}`,
    title: "2022 인스타그램 키워드 '갓생'",
    contents: "올해 국내 인스타그램 이용자들이 관심을 가진 인기 해시태그 트렌드는 바로, 생산적인 삻을 의하는 '갓생(God+生)'이었다."
  },
  {
    type: "3",
    img: `${images.content9}`,
    title: "전설적 아트 딜러의 귀환",
    contents: "얼마 전 한국 화단의 거장 박서보 화백이 SNS에 이런 글을 올렸다. “위층에서 삐거덕삐거덕 나무 복도를 걷는 소리가 난다. 유서 깊은 공간이 무척 아름다운 갤러리다.” 91세 나이에도 정정한 현역 화가의..."
  },
  {
    type: "1",
    img: `${images.content10}`,
    title: "올해 주목받은 아이템 35",
    contents: "뷰티 스킨케어부터 보디, 헤어, 메이크업, 향수 등 각 카테고리에서 두각을 나타낸 제품 서른다섯 개를 꼽았다. 선정된 주인공들의 사연을 듣다 보면, 올 한 해 업계 동향과 우리가 아름다움을 가꾸는 데 ..."
  }
]

const LoadingItemarray = () => {
  return(
    <>
      {LoadingItems.map((contents, index) =>
        <li key={index}>
          <div className="img_box">
            <img src={contents.img} alt=""/>
          </div>
           <div className="type">
                {contents.type === "1" ? "DESIGN" : 
                  (contents.type === "2" ? "STYLE" : 
                    (contents.type === "3" ? "CULTURE" :  "LIVING")
                  ) 
                }
               </div>
              <div className="tit">{contents.title}</div>
              <div className="contents">{contents.contents}</div>
        </li>
      )}
    </>
  )
}

export default LoadingItemarray;