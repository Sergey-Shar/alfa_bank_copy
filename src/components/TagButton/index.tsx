import {FC, memo} from "react";
import './style.css'




interface Props {
    text: string;
    id: string
    onChangeCards:any;
    data: string;
}

const TagButton: FC<Props> = ({text, id, onChangeCards, data}) => {
    return(
        <button 
         id={id}
         data-btn={data}
         onClick={onChangeCards}
         className='tag-btn'>
         {text}
        </button>
    )
}
 export default memo(TagButton)