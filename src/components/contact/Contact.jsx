import "./contact.css"
function Contact({image,url}){
    return(
        <a className="contact" href={url}>
            <figure className="contact-figure">
                <img className="contact-img" src={image}></img>
            </figure>
        </a>
    )
}
export {Contact}