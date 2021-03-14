import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TextInput} from "./components/TextInput";
import styles from "./components/layout.module.scss"
import {useLiffInfo} from "./index";
import {Link} from "@material-ui/core";
import utilStyles from "./styles/util.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "./redux/socket/action";
import {MessageState} from "./redux/chat/slice";
import {PopupMenu} from "./components/PopupMenu";

function App() {
    const {name, image} = useLiffInfo();
    const dispatch = useDispatch();
    const messageState = useSelector((state: { messageState: MessageState }) => state).messageState

    return (
        <div className="App">
            <header className={styles.header}>
                <img
                    src={image}
                    className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                    alt={name}
                />
                <h1 className={utilStyles.headingLg}>{name}</h1>
            </header>

            <PopupMenu loveMessage={[]} flag={messageState.updateFlag}></PopupMenu>
            <TextInput inputValue={messageState.inputMessage}
                       onInputEnter={(message: string) => {

                           //console.log("Lane num: ", laneNum)
                           dispatch(sendMessage(`{"action":"LOVE_MESSAGE2","message":"${messageState.inputMessage}"}`))

                       }}
                       onChangeValue={() => {
                       }}
            />


        </div>
    );
}

export default App;
