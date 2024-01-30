

function Header(){
    return(
    <header>
        <div className="current-page">
            <p>Assingments</p>
        </div>
        <div className="icons">
            <a href="messages.html">
                <i className="fa-solid fa-message"></i>
            </a>
            <a href="announcements.html">
                <i className="fa-solid fa-bell"></i>
            </a>
            <a href="">
                <i className="fa-solid fa-right-from-bracket"></i>
            </a>
        </div>
    </header>
    )
}

export default Header;