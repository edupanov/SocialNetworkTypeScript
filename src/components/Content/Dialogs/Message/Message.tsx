import React from "react";
import style from "./../Dialogs.module.css"

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
};

export default Message;
