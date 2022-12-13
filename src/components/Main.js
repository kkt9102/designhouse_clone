import styled from "styled-components";
import Header from "./include/view/Header";
import Footer from "./include/view/Footer";

const Main = () => {
  const MainSection = {
    MainFrame: styled.div`
      padding: 0 4.5%;
    `,
  };
  return (
    <>
      <Header/>
      <MainSection.MainFrame>
        <div className="flex flex_jc_sb">
          
        </div>
        <Footer />
      </MainSection.MainFrame>
    </>
  );
};

export default Main;
