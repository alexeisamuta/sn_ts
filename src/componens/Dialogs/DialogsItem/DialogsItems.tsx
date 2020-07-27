import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {dialogsType} from "../../../redux/state";


function DialogsItem(props:dialogsType) {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
export default DialogsItem;