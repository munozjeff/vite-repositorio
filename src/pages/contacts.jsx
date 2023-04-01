import { Contact } from "../components/contact/Contact"
import { Profile } from "../components/profile/profile"
import { NavBar } from "../components/navBar/NavBar"
import "./contacts.css"

function Contacts(){
    return(
        <article className="contacts">
            <NavBar></NavBar>
            <Profile title="Contacts"></Profile>
            <h3>¡Come on, let's work together!</h3>
            <section className="contacts-section">
                <Contact image="./assets/telegram.png" url="https://t.me/ste046"></Contact>
                <Contact image="./assets/linked-in.png" url="https://www.linkedin.com/in/jefferson-muñoz-dev"></Contact>
            </section>
        </article>
    )
}

export {Contacts}