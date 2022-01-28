import { memo, FC } from "react";
import ExchangeRateBlock from "../components/ExchangeRateBlock";
import FlexSliderBlock from "../components/FlexSliderBlock";
import OffersBlock from "../components/OffersBlock";

const MainPage: FC = () => {
    return(
        <>
   <FlexSliderBlock/>
   <OffersBlock/>
   <ExchangeRateBlock/>
   </>
    )
} 

export default memo(MainPage)