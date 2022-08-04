import React from 'react'
import Main from './Main'
let bubble = document.getElementById('bubble');
let output = document.getElementById('output');
let inputText = document.getElementById('inputText'); //Line 13 not working, wenn man statt getElementById die Variable einträgt
let dateOutput = document.getElementById('dateOutput'); //hier ebenso

const Nav = () => {

    //bubble.style.display = 'none';

    function newNote() {
        document.getElementById('output').innerHTML += document.getElementById('inputText').value;
        document.getElementById('dateOutput').innerHTML = new Date().toDateString();
        console.log(new Date());
        //bubble.style.display = 'block';

        //const btn = document.createElement("button");
        // document.createElement("button").innerHTML = 'hi';
        // document.getElementById('bubble').appendChild(document.createElement("button"));


        //document.createElement("p").appendChild(document.createTextNode('Test'));
        // const node = document.createElement("bubble");
        // const textnode = document.createTextNode(inputText.value);
        // document.getElementById("linkesDiv").appendChild(textnode);
        // document.getElementById("linkesDiv").appendChild(node);
    }

    return (
        <div className="nav">
            {/* <form action=""> */}
            <input type="text" placeholder="Suchen" name="search" className="searchbar" />
            <input type="submit" value="🔍" className="searchSubmit"></input>
            {/* </form> */}
            <input type="submit" value="🗑" />
            <input type="submit" value="✍︎" onClick={() => newNote()} />
        </div >
    )
}

export default Nav

// Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 