import ExhibitionList from "./exhibition/view/ExhibitionList";
import Footer from "./include/view/Footer";
import HeaderMenu from "./include/view/HeaderMenu";
import SlideContents from "./slide_contents/view/SlideContents";
import { MainSection } from "./style/mainStyle";

const Main = () => {
  return (
    <>
      <HeaderMenu />
      <MainSection.MainFrame>
        <div className="flex flex_jc_sb">
          <SlideContents/>
        </div>
        <ExhibitionList />
        <Footer />
      </MainSection.MainFrame>
    </>
  );
};

export default Main;
