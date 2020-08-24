import React from "react";
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const dialogs = [
        {id: 1, name: "Egor"},
        {id: 2, name: "Ira"},
        {id: 3, name: "Timur"},
        {id: 4, name: "Kirill"},
    ];

    const dialogsElements = dialogs.map(dialog =>
        <DialogItem name ={dialog.name} id={dialog.id}/>
    );

    const messages = [
        {id: 1, message : "hi"},
        {id: 2, message : "how are you?"},
        {id: 3, message : "yo"},
        {id: 4, message : "lol"},
    ];

    const messagesElements = messages.map(message =>
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
