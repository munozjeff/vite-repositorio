import "./figureParagraph.css"
function FigureParagraph({image}){
    return(
        <figure className="figure_paragraph">
            <img src={image}></img>
        </figure>
    )
}
export {FigureParagraph}