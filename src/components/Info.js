import personalImage from '../asad.png'
import icon from '../Icon(1).png'
import linkedin from '../Vector.png'


export default function Info() {
    return (
        <div >
            <img className="card-image" src={personalImage} alt="image"/>
            <h1 className="card-name">Asad Zafar</h1>
            <p className="card-job-name">Frontend Developer</p>
            <a className="link" href="https://assadali007.github.io/personal-pages/" target="_blank">assadali007.github</a>
            <div className="card-button">
                <button className="btn1"><img src={icon}/>Email</button>
                <button className="btn2"><img src={linkedin}/>Linkedln</button>
            </div>
        </div>
    )
}