
import { Link } from "react-router-dom"
import "./Presentation.css"
function Presentation(){
    return(
        <section className="section-presentation">
            <div className="div-presentation">
                <h2 className="typing">Hi, my name is</h2>
                <h2 className="typing typing-delay">Jefferson</h2>
                <p className="typing typing-delay-1">I'm FrontEnd developer</p>
                <div className="buttons">
                        <ul>
                            <li><Link to="/about">ABOUT</Link></li>
                            <li><Link to="/works">WORKS</Link></li>
                            <li><Link to="/contacts">CONTACTS</Link></li>
                        </ul>
                </div>
            </div>
        </section>
        
    )
}
export {Presentation}