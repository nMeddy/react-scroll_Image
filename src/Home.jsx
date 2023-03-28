import React from "react";
import { BodyPage } from "./utils/styledOfComponent";
import SideBarComponent from "./components/sideBar/sideBar";
import MainPart from "./components/mainPart/MainPart";
import { RightPart } from "./utils/styledOfComponent";
import { LabelTop } from "./utils/styledOfComponent";
import { RightPartContainer } from "./utils/styledOfComponent";


function Home() {
  return (
    <>
    <BodyPage>
      <MainPart/>
      <SideBarComponent />
      <RightPart>
        <RightPartContainer>
          <LabelTop>React-scroll-sys</LabelTop>
        </RightPartContainer>
      </RightPart>
    </BodyPage>
    </>
  );
}

export default Home;
