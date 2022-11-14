import Description from "../../atoms/Text/Description/Description"
import MainSubtitle from "../../atoms/Text/MainSubtitle/MainSubtitle"
import MainTitle from "../../atoms/Text/MainTitle/MainTitle"
import './MainText.scss'
const MainText = () => {
    return (
        <div className={'home-text'}>
            <MainSubtitle/>
            <MainTitle/>
            <Description/>
        </div>
    )
}

export default MainText