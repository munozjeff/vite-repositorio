import "./workInfo.css"
function WorkInfo({title,info}){
    return(
        <>
            {title && <h3 className="work-title">{title}</h3>}
            <p className="work-info">{info}</p>
        </>
    )
}
export{WorkInfo}