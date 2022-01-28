import {FC, memo, useCallback, useState} from "react";
import './style.css'

interface Props {
    url: string;
    title: string;
    subTitle: string;
    color: string;
    leftBorder?: string;
    rightBorder?: string;
}
const FlexSlider: FC<Props> = ({url,
     title,
      subTitle, 
      color,
      leftBorder,
      rightBorder,
    }) => {
      
     const [className, setClassName] = useState('slider') 
     const [classNameImage, setClassNameImage] = useState('slider-image') 

     const onHover = useCallback(():void => {
        setClassName('slider active')
        setClassNameImage('slider-image active')
     },[setClassName,setClassNameImage])

     const onOutHover = useCallback(():void => {
        setClassName('slider')
        setClassNameImage('slider-image')
     },[setClassName,setClassNameImage])

    return(
        <div
        onMouseOver={onHover} 
        onMouseOut={onOutHover}
        style={{backgroundColor:`${color}`, 
        borderBottomLeftRadius:`${leftBorder}`,
        borderBottomRightRadius:`${rightBorder}`,
    }} 
        className={className}>
        <div>
        <h1 className="slider-title">{title}</h1>
        <h3 className="slider-subtitle">{subTitle}</h3>
        </div>
        <img 
         onMouseOver={onHover} 
         onMouseOut={onOutHover}
        className={classNameImage} src={url} alt="logo"/>
        </div>
    )
}
export default memo(FlexSlider)