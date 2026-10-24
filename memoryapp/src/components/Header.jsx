

export default function Header(){


    return(
        <header>
            <div className="headerText">
            <div><h1>Welcome to the memory App</h1></div>
            <p><strong>Click on an image to play.</strong></p>
            <p>Avoid Clicking Same image more than once.</p>
            </div>

            <div className="score"> 
                <p>Current Score: 0 </p>
                <p>Highest Score: 3</p>
            </div>
        </header>
    )
}