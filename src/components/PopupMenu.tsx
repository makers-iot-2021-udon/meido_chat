// PopupMenu.js
import './PopupMenu.scss'
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import messageSlice, {MessageState} from "../redux/chat/slice";

interface OwnProps {
    loveMessage: string[][]
    // flag: boolean
}

type Props = OwnProps


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PopupMenu: React.FC<Props> = props => {
    const dispatch = useDispatch();

    const [isShown, setIsShown] = useState(true)
    // const messageState = useSelector((state: { messageState: MessageState }) => state).messageState

    const handleToggleButtonClick = () => {
        setIsShown(true)
    }

    const handleCloseButtonClick = () => {
        setIsShown(false)
    }

    //5秒後にステートを書き変えて強制的に0にする
    if (props.loveMessage.length !== 0) {

        window.setTimeout(function () {
            // dispatch(messageSlice.actions.loveMessage([""]))
        }, 5000);
    }

    return (
        <div className="popup-menu-container">
            <div className={`popup-menu ${props.loveMessage.length !== 0 ? 'shown' : ''}`}>
                {props.loveMessage[0].map((str, index) => {
                    return <p>{str}</p>
                })}

            </div>
        </div>
    )
}

