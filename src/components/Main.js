import ExhibitionList from "./exhibition/view/ExhibitionList";
import Footer from "./include/view/Footer";
import HeaderMenu from "./include/view/HeaderMenu";
import { MainSection } from "./style/mainStyle";

const Main = () => {
  return(
    <>
      <HeaderMenu/>
        <MainSection.MainFrame>
          <ExhibitionList/>
          <Footer/>
        </MainSection.MainFrame>
      
    </>
  )
}

export default Main;