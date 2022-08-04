import React from 'react'

const Main = () => {

    return (
        <main>
            <div className="linkesDiv">
                <div id="bubble">
                    <p id="output"></p>
                    <p id="dateOutput"></p>
                </div>
            </div>
            <div className="rechtesDiv">
                <h1>Neue Notiz</h1>
                <textarea type="text" name="input" id="inputText" className="eingabefeld" />
            </div>
        </main>
    )
}

export default Main