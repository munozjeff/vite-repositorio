import "./profile.css"
function Profile({title}){
   return(
    <div className="title_section">
            <h2>{title}</h2>
            <hr></hr>
    </div>
   ) 
}
export {Profile}