import React, { FC } from "react";

import styled from "styled-components";
import { IconContext } from "react-icons";
import { GiGolfFlag } from "react-icons/gi";
import { SidebarData } from "./SidebarData";
import Submenu from "./Submenu";

const SidebarNav = styled.div`
  /* Rectangle 30 */
  position: absolute;
  width: 60px;
  height: 954px;
  left: 0px;
  top: 0px;
  z-index: 2;

  background: #ffffff;
  /* Elevation / Depth8 */

  box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1),
    0px 3.2px 7.2px rgba(0, 0, 0, 0.13);
`;

const SidebarWrap = styled.div``;

const SidebarSetion = styled.div`
  width: 366px;
  height: 100vh;
  background-color: #fbfbfb;
  position: fixed;
  top: 0;
`;

const SidebarParagraph = styled.div`
  width: 306px;
  height: 419px;
  background-color: white;
  color: black;
  position: fixed;
  top: 0;
  margin-left: 60px;
`;

const SideInfoDiv = styled.div``;

const InfoParagraph = styled.p`
  width: 73px;
  height: 22px;
  margin-top: 10px;
  margin-left: 17px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */

  color: #4d4c4c;
`;

const InfoDivLat = styled.div`
  padding: 5px;
  margin-top: 10px;
`;

const InfoLabelLat = styled.label`
  width: 21px;
  height: 19px;
  left: 83px;
  top: 62px;
  margin-left: 20px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  /* identical to box height */

  color: #4d4c4c;
`;

const InfoLabelLong = styled.label`
  width: 22px;
  height: 19px;
  left: 83px;
  top: 62px;
  margin-left: 22px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  /* identical to box height */

  color: #4d4c4c;
`;

const InfoInput = styled.input`
  width: 147px;
  height: 33px;
  left: 120px;
  top: 54px;

  border: 0.5px solid #c7c7c7;
  box-sizing: border-box;
  border-radius: 5px;

  margin-left: 20px;
`;

const HorizontalDivider = styled.hr`
  width: 306px;
  height: 0px;
  left: 60px;
  top: 278px;

  border: 1px solid #f4f4f4;
`;

const Sidebar: FC = () => {
  return (
    <IconContext.Provider value={{ color: "#C7C7C7" }}>
      <SidebarSetion>
        <SidebarNav>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <Submenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
        <SidebarParagraph>
          <SideInfoDiv>
            <InfoParagraph>
              <GiGolfFlag /> Location
            </InfoParagraph>
            <form>
              <InfoDivLat>
                <InfoLabelLat>Lat</InfoLabelLat>
                <InfoInput></InfoInput>
              </InfoDivLat>
              <div>
                <InfoLabelLong>Lon</InfoLabelLong>
                <InfoInput></InfoInput>
              </div>
            </form>
            <br />
            <HorizontalDivider />
          </SideInfoDiv>
        </SidebarParagraph>
      </SidebarSetion>
    </IconContext.Provider>
  );
};

export default Sidebar;
