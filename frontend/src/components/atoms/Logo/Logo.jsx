import logo from '../../../assets/shared/logo.svg'
import { Link } from 'react-router-dom'
import { routes } from '../../../routes'
import './Logo.scss'

const Logo = ({customClassName, disable}) => {
    return (
        <Link to={routes.home} className={`${customClassName} logo-style ${disable ? 'erase-events' : ''}`}>
            <img
                src={logo}
                alt={'logo-space-tourism'}
            />
        </Link>
    )
}

export default Logo