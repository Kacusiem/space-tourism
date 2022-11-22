import './Image.scss'

const Image = ({src, alt, customClassName}) => {
    return (
        <img src={src} alt={alt} className={`${customClassName} app-image`}/>
    )
}

export default Image