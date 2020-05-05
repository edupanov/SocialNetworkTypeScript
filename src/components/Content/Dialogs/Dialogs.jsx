import React from "react";
import style from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    Egor
                </div>
                <div className={style.dialog}>
                    Ira
                </div>
                <div className={style.dialog}>
                    Timur
                </div>
                <div className={style.dialog}>
                    Kirill
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>hi</div>
                <div className={style.message}>how are you</div>
                <div className={style.message}>yo</div>
                <div className={style.message}>lol</div>

            </div>
        </div>
    )
};

export default Dialogs;
