import "./styles/Header.css"

export default function Header(props){


    return(
        <header>
            <div className="headerText">
            <div><h1>Welcome to the memory App</h1></div>
            <p><strong>Click on an image to play.</strong></p>
            <p>Avoid Clicking Same image more than once.</p>
            </div>

            <div className="score"> 
                <p>Current Score: {props.currentScore} </p>
                <p>Highest Score: {props.highScore}</p>
            </div>
        </header>
    )
}