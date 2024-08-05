import React, { useEffect, useState, useRef, useCallback } from "react";
import "./style.css"

function Board_function(props) {
    const [board1, setBoard] = useState(Array.from({ length: props.x * props.y }, (_, i) => i + 1))


    const usePreviousValue = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }
    const prevProps_x = usePreviousValue(props.x)
    const prevProps_y = usePreviousValue(props.y)

    const generate = useCallback(() => {

        console.log("board generated");
        let board = Array.from({ length: props.x * props.y }, (_, i) => i + 1)
        let currentIndex = board.length;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [board[currentIndex], board[randomIndex]] = [
                board[randomIndex], board[currentIndex]];
        }
        //return board;
        setBoard(board)

    }, [props.x, props.y])


    useEffect(() => {
        if ((prevProps_x !== props.x) || (prevProps_y !== props.y)) {
            generate(props.x, props.y)
        }
    })


    return (
        <div id="board" style={{
            border: '2px solid black',
            'text-align': 'center',
            padding: '4px',
            margin: '3px 3px 3px 3px',
            'margin-left': 'auto',
            'margin-right': 'auto',
            'font-size': '2em',
            display: 'grid',
            gridTemplateColumns: `repeat(${props.x}, auto)`,
            gridTemplateRow: `repeat(${props.y}, auto)`,
            width: 'min-content'

        }}>
            {board1.map(board1 => (
                <div style={{
                    cursor: ((props.countdownSkipped && board1 > props.current) && 'pointer'),
                    width: 50,
                    aspectRatio: 1,
                    padding: '6px',
                    border: (props.countdownSkipped && '1px solid white') || (!props.countdownSkipped && '1px solid black'),
                    backgroundColor: ((props.countdownSkipped && board1 > props.current) && 'black') || (!props.countdownSkipped && 'white'),
                }}
                    onClick={() => props.handleClick(board1)}>
                    {(!props.countdownSkipped || board1 <= props.current) ? board1 : " "}
                </div>)
            )}
        </div>
    )

}

export default Board_function