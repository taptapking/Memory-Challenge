import React from "react";
import "./style.css"


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board1: Array.from({ length: this.props.x * this.props.y }, (_, i) => i + 1)
        }
    }
    generate(x, y) {

        console.log("board generated");
        let board = Array.from({ length: this.props.x * this.props.y }, (_, i) => i + 1)
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
        this.setState({ board1: board })

    }

    componentDidMount() {
        console.log("shuffled")
        this.generate(this.props.x, this.props.y)
    }
    componentDidUpdate(prevProps) {
        if ((prevProps.x !== this.props.x) || (prevProps.y !== this.props.y)) {
            this.generate(this.props.x, this.props.y)
        }
    }

    render(props) {
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
                gridTemplateColumns: `repeat(${this.props.x}, auto)`,
                gridTemplateRow: `repeat(${this.props.y}, auto)`,
                width: 'min-content'

            }}>
                {this.state.board1.map(board1 => (
                    <div style={{
                        cursor: ((this.props.countdownSkipped && board1 > this.props.current) && 'pointer'),
                        width: 50,
                        aspectRatio: 1,
                        padding: '6px',
                        border: (this.props.countdownSkipped && '1px solid white') || (!this.props.countdownSkipped && '1px solid black'),
                        backgroundColor: ((this.props.countdownSkipped && board1 > this.props.current) && 'black') || (!this.props.countdownSkipped && 'white'),
                    }}
                        onClick={() => this.props.handleClick(board1)}>
                        {(!this.props.countdownSkipped || board1 <= this.props.current) ? board1 : " "}
                    </div>)
                )}
            </div>
        )
    }
}

export default Board