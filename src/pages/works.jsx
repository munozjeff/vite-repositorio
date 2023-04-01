import { Profile } from "../components/profile/profile"
import { Work } from "../components/work/Work"
import { WorkInfo } from "../components/work_info/WorkInfo"
import { NavBar } from "../components/navBar/NavBar"

function Works(){
    let bis = ""
    return(
        <>
            <NavBar></NavBar>
            <Profile title="Works"></Profile>
            <article>
                <WorkInfo 
                    title={"Ferroelectrics and Solutions Muñoz website"}
                    info={"This project is a website for a tools and construction materials store, developed using the technologies of HTML, CSS, and JavaScript. The site includes a homepage consisting of a presentation section, a section for the most viewed products, and a contact section, a products page, and a services page. You can view the source code of the project on my GitHub profile."}></WorkInfo>
                <Work image="./assets/ferroelectricos.png"></Work>
            </article>
            <article>
                <WorkInfo 
                    title={"Search filter for BIS company"}
                    info={"This project consisted of creating a search filter for Bis, a construction company. The main objective was to allow users to filter construction projects according to different options, which would enable them to efficiently find the projects that best fit their needs."}>
                </WorkInfo>
                <WorkInfo 
                    info={"The search filter includes various filtering options, such as project category, use, location, year of construction, and size in square meters. Additionally, it has been designed with an intuitive and user-friendly interface so that users can quickly find the projects they are looking for."}>
                </WorkInfo>
                <WorkInfo 
                    info={"This project has been of great importance to Bis, as it has improved the user experience on their website and made project searching easier. Furthermore, it has allowed the company to obtain valuable information about the projects that are most popular among users, which has helped them make more informed decisions about their business."}>
                </WorkInfo>
                <WorkInfo 
                    info={"In summary, this search filter project has been a success for Bis, a construction company, by improving the user experience and providing valuable information for decision-making."}>
                </WorkInfo>
                <Work image="./assets/BIS.jpg"></Work>
            </article>
        </>
    )
}
export {Works}