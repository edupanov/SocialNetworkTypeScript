import React from "react";
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../../redux/state";

const Dialogs: React.FC<DialogsPageType> = (props) => {

    const dialogsElements = props.dialogs.map(dialog =>
        <DialogItem name ={dialog.name} id={dialog.id}/>
    );

    const messagesElements = props.messages.map(message =>
        <Message message={message.message}/>
    );

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;
