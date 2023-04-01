import "./work.css"
function Work({image}){
    return(
        <section className="works">
            <figure className="laptop"><img src="./assets/laptop.png"></img></figure>
            <div className="screen">
                <figure>
                    <img src={image}></img>
                </figure>
            </div>
        </section>
    )
}

export {Work}