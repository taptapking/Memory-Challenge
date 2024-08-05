import React from "react";
import "./style.css"

function HowToPlay() {
    return (
        <div >
            <h1>
                <p>
                    Memory challenge
                </p>
            </h1>
            <h2>
                <p>
                    Click numbers in the correct order to win
                </p>
            </h2>
            <h4>
                <p>
                    - Width and Height specifiy how big the board is
                    <br />
                    - Observe time specifies how long the board is visible
                    <br />
                    - Time limit specifies how long you're allowed to play
                    <br />
                    - Lives specifies how many times you're allowed to misclick
                    <hr />
                </p>
            </h4>
        </div>
    )
}

export default HowToPlay