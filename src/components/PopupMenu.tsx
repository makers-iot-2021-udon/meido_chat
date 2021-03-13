// PopupMenu.js
import './PopupMenu.scss'
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import messageSlice, {MessageState} from "../redux/chat/slice";

interface OwnProps {
    loveMessage: string[][],
    flag: boolean
}

type Props = OwnProps


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PopupMenu: React.FC<Props> = props => {
    const dispatch = useDispatch();

    const [isShown, setIsShown] = useState(false)
    // const messageState = useSelector((state: { messageState: MessageState }) => state).messageState

    // //アニメーションフラグを折る
    // window.setTimeout(function () {
    //     dispatch(messageSlice.actions.notifyUpdateMessage(false))
    //
    // }, 5000)

    if (props.flag && props.loveMessage.length !== 0) {
        // dispatch(messageSlice.actions.notifyUpdateMessage(false))

        // window.setTimeout(function () {
        //     dispatch(messageSlice.actions.notifyUpdateMessage(false))
        //
        // }, 5000)
    }
    // if (props.loveMessage[0][0].length > 0 && props.loveMessage.length > 1) {
        return (
            <div className="popup-menu-container">
                <div
                    className={`popup-menu ${props.flag&&props.loveMessage[0][0].length > 0 && props.loveMessage.length > 1 ? 'shown' : ''}`}>
                    {
                        props.loveMessage.shift()!.map((str, index) => {
                            return <div>{str}</div>
                        })
                    }
                </div>
            </div>
        )
    // } else return (
    //     <div className="popup-menu-container">
    //
    //     </div>
    //
    // )
}


