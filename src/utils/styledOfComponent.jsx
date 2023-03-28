import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "./colors";
import backroundImage from "../assets/backgroundImage.svg";

export const HomePage = styled.div`
  min-width: 100%;
`;

export const BodyPage = styled.div`
  background: url(${backroundImage}) no-repeat center;
  background-size: cover;
  height: 100vh;
  min-width: 100%;
  margin: 0;
  padding: O;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
export const BodyPageImg = styled.div`
  background: ${colors.light} center;
  background-size: cover;
  height: 100vh;
  min-width: 100%;
  margin: 0;
  padding: O;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const MainPage = styled.div`
  position: fixed;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 18vh;
  height: 100vh;
`;
export const MainContainer = styled.div`
  border-sizing: border-box;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: center;
`;
export const MainTitle = styled.h1`
  color: ${colors.light};
  font-size: 18vh;
  display: flex;
  align-self: center;
`;
export const MainBtn = styled.div`
  background-color: ${colors.light};
  cursor: pointer;
  width: 30vh;
  height: 10vh;
  border-radius: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: end;
  &:hover {
    background-color: ${colors.lightHover};
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: ${colors.sideBarSolid};
  font-size: 30px;
  font-weight: bold;
  &:hover {
    color: ${colors.sideBarSolid};
  }
`;

export const SideBar = styled.div`
  background-color: ${colors.sideBar_clr};
  height: 100vh;
  min-width: calc(40%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SideBarClose = styled.div`
  background-color: ${colors.sideBar_clr};
  height: 100vh;
  min-width: calc(30%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SideBarContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;
export const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 100%;
  height: 10%;
`;
export const LabelTop = styled(Link)`
  font-size: 20px;
  color: ${colors.light};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${colors.light};
  }
`;
export const BottomContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100%;
  height: 10%;
`;
export const ExitBtn = styled.div`
  background-color: ${colors.light};
  position: absolute;
  min-width: calc(60px);
  height: calc(60px);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${colors.lightHover};
  }
`;
export const ExitIcon = styled.img`
  width: 40px;
  height: 40px;
`;
export const RightPart = styled.div`
  height: 100vh;
  min-width: calc(60%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const RightPartContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  box-sizing: border-box;
`;

export const Navbar = styled.div`
  display : flex;
  flex-direction: row;
  
`
