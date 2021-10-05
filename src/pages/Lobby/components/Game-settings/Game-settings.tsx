import React, {useEffect, useState} from 'react';
import Cards from "../Card/Card";
import './Game-settings.scss';
import Switch from "../../../../components/Switch/Switch";

const GameSettings = () => {
    const [value, onChange] = useState(1);
    useEffect(()=>{
        const ele = document.querySelector<HTMLElement>('.buble');
        if (ele) {
            ele.style.left = `${Number(value / 4)}px`;
        }
    })
    return (
        <>
            <h3 className="settings-main">Game settings:</h3>
            <div className="scrum-list">
                <div className="game-title">Scram master as player:
                    <span className="switch-game">
                        <Switch props="first-switch" />
                    </span>
                </div>
                <div className="game-cards">Changing card in round end:<span className="switch-game"><Switch props="second-switch"/></span></div>
                <div className="game-timer">Is timer needed: <span className="switch-game"><Switch props="third-switch" /> </span></div>
                <div className="game-score">Score type:<span><input type="text" className="input-game" /></span></div>
                <div className="game-type">Score type (Short):<span><input type="text" className="input-game" /></span></div>
                <div className="game-round">Round time(minutes):<span className="input"><input className="input-range" type="range" value={value}
                                                                    name="1" min="1" max="5" step=".5"
                                                                    onChange={({target: {value: radius}}) => {
                                                                        onChange(radius);
                                                                    }}/>
                </span>
                    <div className="bubble">
                    {value}
                    </div>
                </div>
            </div>
            <Cards isEditable={true} />

        </>
    );
};

export default GameSettings;