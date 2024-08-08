import React, { useState, useEffect, useCallback } from "react";
import "./style.css"
import ScoreBoard from "./scoreboard";
import HowToPlay from "./HowToPlay";
import DifficultySelect from "./DifficultySelect";
import DifficultyAdjust from "./DifficultyAdjust";
import TimeSkipButton from "./TimeSkipButton";
import StartButton from "./StartButton";
import Board_function from "./board copy";

function App() {
    const [time, setTime] = useState(45)
    const [observeTime, setObserveTime] = useState(20)
    const [width, setWidth] = useState(3)
    const [height, setHeight] = useState(3)
    const [lives, setLives] = useState(2)
    const [current, setCurrent] = useState(0)
    const [gameStarted, setGameStarted] = useState(0)
    const [countdownSkipped, setCountdownSkipped] = useState(0)
    const [timeElapsed, setTimeElapsed] = useState(0)
    const [gameEnded, setGameEnded] = useState(0)
    const [flash, setFlash] = useState(-1)

    const endGame = useCallback((win) => {
        if (win === 0) {
            alert("GAME OVER\nYou scored " + current + " / " + (width * height) + "\nYour time: " + msToTime(timeElapsed) + "s");
        }
        else {
            alert("YOU WIN!\nYour time: " + msToTime(timeElapsed) + "s");
        }
        window.location.reload();

    }, [current, height, timeElapsed, width])
    const msToTime = (duration1) => {
        if (duration1 <= -1) return 0;
        var duration = duration1 * 10
        var milliseconds = Math.floor((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }
    useEffect(() => {
        if (countdownSkipped) {
            const countdown1 = setInterval(() => {
                if (time === 0) {
                    clearInterval(countdown1)
                    endGame(0);
                }
                else {
                    setTime(time - 1)
                    setTimeElapsed(timeElapsed + 1)
                }

            }, 10)
            return () => clearInterval(countdown1)

        }
    }, [countdownSkipped, endGame, time, timeElapsed]);

    useEffect(() => {
        if (gameStarted) {
            let countdown = setInterval(() => {
                if (observeTime < 0) {
                    clearInterval(countdown)
                    setCountdownSkipped(1)
                }
                else {
                    setObserveTime(observeTime - 1)
                }
            }, 10)
            return () => clearInterval(countdown)
        }

    }, [observeTime, time, gameStarted])

    useEffect(() => {
        if (flash > -1) {
            let flashbang = setInterval(() => {
                if (flash < 0) {
                    clearInterval(flashbang)
                }
                else {
                    setFlash(flash - 1)
                }
            }, 10)
            return () => {
                clearInterval(flashbang)
            }
        }

    }, [flash])


    const skipCountdown = () => {
        setObserveTime(0)
        setCountdownSkipped(1)
        //Timer();
    }

    const handleChange = (type, value) => {
        if (value > 0) {
            if (type === "width")
                setWidth(value)
            if (type === "height")
                setHeight(value)
            if (type === "time")
                setTime(value)
            if (type === "observeTime")
                setObserveTime(value)
            if (type === "lives")
                setLives(value)
        }
    }
    const handleClick = (value) => {
        if ((gameEnded === 1) || (countdownSkipped === 0) || (value <= current)) {
            //not allowed to click
        }
        else {
            console.log("clicked " + value)
            if ((value === width * height) && (value === current + 1)) {
                //win
                setCurrent(current + 1)
                setTime(-1)
                setGameEnded(1)
                endGame(1)
            }
            else if (value === current + 1) {
                //progress
                setCurrent(current + 1)
            }
            else if ((value !== current + 1) && (lives > 1)) {
                setLives(lives - 1)
                setFlash(100)
                //alert("You misclicked\nYou have " + (lives - 1) + " lives left");

            }
            else {
                //game over
                setTime(-1)
                setGameEnded(1)
                endGame(0)
            }
        }
    }
    const start = () => {
        setObserveTime(observeTime * 100)
        setTime(time * 100)
        setGameStarted(1)
    }

    const renderGameBoard = () => (
        <div>
            <ScoreBoard info={{ flash: flash, lives: lives, observeTime: observeTime, current: current, time: time, gameStarted: gameStarted, width: width, height: height }} />
            <Board_function flash={flash} x={width} y={height} countdownSkipped={countdownSkipped} handleClick={handleClick} current={current} />
            <TimeSkipButton countdownSkipped={countdownSkipped} skipCountdown={skipCountdown} />
        </div>
    )

    const renderMenu = () => (
        <div>
            <HowToPlay />
            <DifficultySelect handleChange={handleChange} />
            <DifficultyAdjust width={width} height={height} time={time} observeTime={observeTime} lives={lives} handleChange={handleChange} />
            <StartButton observe={start} />
        </div>
    )


    return (
        <div className="center">
            {
                gameStarted ? renderGameBoard() : renderMenu()
            }
        </div>
    )

}

export default App