import CustomLink from "../../atoms/Links/CustomLink"
import Logo from "../../atoms/Logo/Logo"
import './NavBar.scss'
const NavBar = () => {
    return (

        <div className={'navBar-wrapper'}>
            <Logo customClassName={'padding-logo'}/>
            <div className={'nav-line'}></div>
            <CustomLink/>
        </div>

    )
}

export default NavBar