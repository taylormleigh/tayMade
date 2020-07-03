import React from "react";
import Button from "./button.js";

const flex = {
  marginTop: `4vw`,
  // display: `flex`,
  // flexDirection: `row`,
  justifyContent: `center`,
  width: `100vw`,
  // padding: `4px`
}

const buttons = {
  display: `flex`,
  height: `5vh`,
  alignItems: `center`,
  justifyContent: `center`,
}

const Header = () => (
    <div style={flex}>
      <div style={buttons}>
        <Button className="headerLink" link={"/"} text={"About"} sitePage={true}/>
        <Button link={"/apps"} text={"Apps"} sitePage={true}/>
        <Button link={"https://github.com/taylormleigh"} text={"GitHub"} sitePage={false}/>
        <Button link={"https://www.linkedin.com/in/tay-huval/"} text={"LinkedIn"} sitePage={false}/>
      </div>
    </div>
)

export default Header;
