import {memo, FC} from "react";
import { Container } from "@mui/material";
import StaticDatePickerLandscape from '../DatePicker'
import './style.css'
import AcccessibleTable from "../Table";

const ExchangeRate: FC= () => {
    return(
        <Container maxWidth="xl"> 
         <div className="exchange-box">
         <AcccessibleTable/>
         <StaticDatePickerLandscape/>
         </div>
        </Container>
        
      
    )
}

export default memo(ExchangeRate)