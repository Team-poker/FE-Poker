import React, {useEffect, useState} from 'react';
import Cards from "../Card/Card";
import './Game-settings.scss';
import Switch from "../../../../components/Switch/Switch";
import {connect} from "react-redux";
import {createPlayer, createTimer, createTimerSettings} from "../../../../redux/actions";


const GameSettings = ( props: any, {isDealerPlayer} : any) => {
    const [value, onChange] = useState(1);
    useEffect(()=>{
        const ele = document.querySelector<HTMLElement>('.buble');
        if (ele) {
            ele.style.left = `${Number(value / 4)}px`;
        }
    })

    const chooseDealerToPlay = () => {
        // {!isDealerPlayer ? false : props.createPlayer(true) };
        props.createPlayer(true);
    }

    const chooseTimer = () => {
        props.createTimerSettings(true);
    }
    const getTimer = () => {
        const time = {
            time: 60,
            minutes: 1,
            seconds: 0
        }
        props.createTimer(time);
    }
    return (
        <>
            <h3 className="settings-main">Game settings:</h3>
            <div className="scrum-list">
                <div className="game-title">Scram master as player:
                    <span className="switch-game" onChange={chooseDealerToPlay}>
                        <Switch props="first-switch" />
                    </span>
                </div>
                <div className="game-timer">Is timer needed: <span className="switch-game" onChange={chooseTimer}><Switch props="third-switch" /> </span></div>
                <div className="game-round">Round time(minutes):<span className="input" onChange={getTimer}><input className="input-range" type="range" value={value}
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
const mapStateToProps = (state: any) => {
    return {
        isDealerPlayer: state.isDealerPlayer,
        isTimerSet: state.isTimerSet,
        timer: state.timer,
    }
}
const mapDispatchToProps = {
    createPlayer,
    createTimerSettings,
    createTimer,
}

export default connect(mapStateToProps, mapDispatchToProps)(GameSettings);