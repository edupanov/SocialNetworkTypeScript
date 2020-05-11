import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
const DialogItem  = (props) => {
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
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name = "Egor" id = "1"/>
                <DialogItem name = "Ira" id = "2"/>
                <DialogItem name = "Timur" id = "3"/>
                <DialogItem name = "Kirill" id = "4"/>

            </div>
            <div className={style.messages}>
                <Message message = "hi"/>
                <Message message = "how are you"/>
                <Message message = "yo"/>
                <Message message = "lol"/>
            </div>
        </div>
    )
};

export default Dialogs;
