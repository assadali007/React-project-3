
import Github from '../GitHub Icon.png'
import Facebook from '../Facebook Icon.png'
import Instagram from '../Instagram Icon.png'
import Twitter from '../Twitter Icon.png'
export default function Footer ()
{
    return (
        <div className="footer">
            <nav className="navigation-footer">
         <a><img src={Github}/></a>
            <a><img src={Facebook}/></a>
            <a><img src={Instagram}/></a>
            <a><img src={Twitter}/></a>
            </nav>
        </div>
    )
}