import { useRef } from "react";
import EmojiPicker from "./emojiPicker";

export default function EmojiPickerInput(){
    const ref = useRef(null)//indica que el valor inicial es nulo
    
    return(
        <div>
            <input />
            <button>Da click</button>
            <EmojiPicker/>
        </div>
    )
};