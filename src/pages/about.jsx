
import { FigureParagraph } from "../components/figure_paragraph/FigureParagraph"
import { Paragraph } from "../components/paragraph/Paragraph"
import { Profile } from "../components/profile/profile"
import { NavBar } from "../components/navBar/NavBar"
import "./about.css"

function About(){
    let text_1 = "I am a junior front-end web developer with a passion for creating unique and engaging digitalexperiences. My focus is primarily on implementing attractive and efficient designs, using technologies such as HTML, CSS,JavaScript and React."
    let text_2 = "I take pride in my ability to quickly learn and apply new techniques in my work. I am always looking to improve my skills and am willing to take risks and face challenges. My goal is to work in a dynamic and collaborative environment, where I can learn from experienced professionals and contribute my skills to achieve team goals."
    let text_3 = "My front-end development experience includes creating websites, applications, and content management systems. I am excited for the opportunity to apply my skills and knowledge in a challenging environment, where I can significantly contribute to interesting and ambitious projects."
    return(
        <>  <NavBar></NavBar>
            <Profile title="About"></Profile>
            <article className="about-article">
                <section className="section_paragraph">
                    <div className="div_paragraphe">
                        <Paragraph text={text_1}></Paragraph>
                    </div>
                    <div className="div_figure">
                        <FigureParagraph image={"./assets/img_1.png"}></FigureParagraph>
                    </div>
                </section>
                <section className="section_paragraph two">
                    <div className="div_figure">
                        <FigureParagraph image={"./assets/img_2.png"}></FigureParagraph>
                    </div>
                    <div className="div_paragraphe">
                        <Paragraph text={text_2}></Paragraph>
                    </div>
                </section>
                <section className="section_paragraph">
                    <div className="div_paragraphe">
                        <Paragraph text={text_3}></Paragraph>
                    </div>
                    <div className="div_figure">
                        <FigureParagraph image={"./assets/img_3.png"}></FigureParagraph>
                    </div>
                </section>
                <p>If you are interested in my work, please do not hesitate to get in touch. I am ready to join your team and take your projects to the next level!"</p>
            </article>
        </>
    )
}
export{About}