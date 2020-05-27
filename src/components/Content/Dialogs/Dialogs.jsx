import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
};

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
