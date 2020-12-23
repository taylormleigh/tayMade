import Button from "./button.js";

const flex = {
  margin: `0 auto`,
  maxWidth: 560,
  flexDirection: `row`,
  justifyContent: `space-between`,
  width: `95vw`,
  borderTop: `0px`,
  borderBottom: `1px`,
  borderLeft: `0px`,
  borderRight: `0px`,
  borderStyle: `solid`,
  borderColor: `#d7bd3c`,
}

const buttons = {
  display: `flex`,
  height: `6.5vh`,
  alignItems: `center`,
  justifyContent: `space-between`,
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
