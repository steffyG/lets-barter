import './NavBar.scss';
import NavButton from "./NavButton";
import './Header.scss'

const NavBar = props => (
    <div className="NavBar">
        Welcome
        {props.navButtons.map(button => (
            <NavButton key={button.path} path={button.path} label={button.label} icon={button.icon}/>
        ))}
        <style jsx>{`
      background-color: red;
      color: white;
      width: 100%;
      height: 60px;
    `}</style>
    </div>
);

export default NavBar;
