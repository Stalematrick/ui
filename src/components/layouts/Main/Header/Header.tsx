import Button from "@/components/common/Button/Button";
import React from "react";
import { VscArchive } from "react-icons/vsc";
import Comments from "../../Comments";
// import { NAME } from "PATH";
import * as Style from "./index.styled";

type HeaderProps = {
  switchTheme: () => void;
};

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo>
          
          <Style.Name>We offer film reviews, interviews with movie industry stars, and news from the world of cinema.</Style.Name>
        </Style.Logo>

        <Style.Buttons>
          <Button
            name={<VscArchive />} //NAME
            action={() => props.switchTheme()}
          />
        </Style.Buttons>
      </Style.Content>
      
    </Style.Header>

{/* <Comments/> */}
</>
  );
};
export default Header;
