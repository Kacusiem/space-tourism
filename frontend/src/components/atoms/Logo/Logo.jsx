import logo from '../../../assets/shared/logo.svg'
import { Link } from 'react-router-dom'
const Logo = ({customClassName, disable}) => {
    return (
        <Link className={`${customClassName} ${disable ? 'erase-events' : ''}`}>
            <img
                src={logo}
                alt={'logo-space-tourism'}
            />
        </Link>
    )
}

export default Logo