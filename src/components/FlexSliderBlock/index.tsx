import {FC, memo} from "react";
import FlexSlider from "../../components/FlexSlider";
import { IMAGE } from "../../Constants/IMAGES"
import "./style.css"

const FlexSliderBlock: FC = () => {
    return(
        <div className="slider-box">
        <FlexSlider title="Покупайте что хотите, время подождёт!" 
        subTitle="Карта «100 дней» для любых покупок и снятия наличных всего под 0,00001% годовых"
        color="rgb(72,22,120)"
        leftBorder="20px"
         url={IMAGE._100day}/>
        <FlexSlider title="500$ — и вы инвестор"
        subTitle="Покупайте и продавайте акции онлайн!"
        color="rgb(0,0,0)"
        url={IMAGE.invest}/>
        <FlexSlider title="Карты с бесплатной доставкой"
        color="rgb(7,80,108)"
        subTitle="Оформите онлайн
        до 3 карт в нужной валюте
        и пользуйтесь сразу после заказа"
        rightBorder="20px"
        url={IMAGE.pecets}/>
        </div>
    )
}

export default memo(FlexSliderBlock)