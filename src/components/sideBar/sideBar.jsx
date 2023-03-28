import { React, useState } from "react";
import { SideBar } from "../../utils/styledOfComponent";
import { SideBarContainer } from "../../utils/styledOfComponent";
import { SideBarClose } from "../../utils/styledOfComponent";
import { TopContent } from "../../utils/styledOfComponent";
import { BottomContent } from "../../utils/styledOfComponent";
import { ExitBtn } from "../../utils/styledOfComponent";
import { LabelTop } from "../../utils/styledOfComponent";

function SideBarComponent() {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <SideBar>
      <SideBarContainer>
        <TopContent>
          <div></div>
          <LabelTop to="/">React-scroll-sys</LabelTop>
        </TopContent>

        <BottomContent>
          <ExitBtn onClick={() => setIsOpen(false)}>-</ExitBtn>
        </BottomContent>
      </SideBarContainer>
    </SideBar>
  ) : (
    <SideBarClose>
      <SideBarContainer>
        <TopContent>
          <div></div>
          <LabelTop>React-scroll-sys</LabelTop>
        </TopContent>

        <BottomContent>
          <ExitBtn onClick={() => setIsOpen(true)}>+</ExitBtn>
        </BottomContent>
      </SideBarContainer>
    </SideBarClose>
  );
}

export default SideBarComponent;
