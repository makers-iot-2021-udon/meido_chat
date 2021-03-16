import React from 'react';
import './App.css';
import {TextInput} from "./components/TextInput";
import styles from "./components/layout.module.scss"
import {useLiffInfo} from "./index";
import utilStyles from "./styles/util.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "./redux/socket/action";
import {MessageState} from "./redux/chat/slice";
import {PopupMenu} from "./components/PopupMenu";
import {HappyGauge} from "./components/HappyGauge";
import {AnimationText} from "./components/AnimationText";
import {Meido} from "./components/Meido";

function App() {
    const {name, image} = useLiffInfo();
    const dispatch = useDispatch();
    const messageState = useSelector((state: { messageState: MessageState }) => state).messageState

    return (
        <div className="App">
            <div>
                <header className={styles.header}>
                    <img
                        src={image}
                        className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                        alt={name}
                    />
                    <h1 className={utilStyles.headingLg}>{name}</h1>
                </header>
                <HappyGauge inputValue={messageState.progressPoint}/>
            </div>

            <div className="MeidoContainer">
                <Meido score={0}/>
                <PopupMenu loveMessage={[]} flag={messageState.updateFlag}></PopupMenu>

            </div>

            {(() => {
                return messageState.progressPoint >= 1000 ?
                    <AnimationText textArray={["たくさんプレイしてくれてありがとう！！ I Love you! by あなたの推しのメイドちゃんより"]}/> : <div></div>

            })()}


            <TextInput inputValue={messageState.inputMessage}
                       onInputEnter={(message: string) => {

                           //console.log("Lane num: ", laneNum)
                           dispatch(sendMessage(`{"action":"LOVE_MESSAGE","message":"${messageState.inputMessage}"}`))

                       }}
                       onChangeValue={() => {
                       }}
            />


        </div>
    );
}

export default App;
