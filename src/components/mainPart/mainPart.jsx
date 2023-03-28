import React from "react";
import ImagePage from "../../ImagePage";
import { MainPage } from "../../utils/styledOfComponent";
import { MainTitle } from "../../utils/styledOfComponent";
import { MainContainer } from "../../utils/styledOfComponent";
import { MainBtn } from "../../utils/styledOfComponent";
import { LinkStyle } from "../../utils/styledOfComponent";

function MainPart() {
  return (
    <MainPage>
      <MainContainer>
        <MainTitle>React Scroll Système</MainTitle>
        <MainBtn>
          <LinkStyle to="./imagePage">Decouvrir</LinkStyle>
        </MainBtn>
      </MainContainer>
    </MainPage>
  );
}

export default MainPart;
