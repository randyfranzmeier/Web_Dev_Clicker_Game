/***
 * Author: Randy Franzmeier
 * Date: 11-13-2023
 * This is a simple component that displays the navbar.
 * Usually, there are links added to it if there are 
 * multiple pages involved
 */
import '../styles/Navbar.css';

export default function Navbar() {
    let navTitle = "Jello Clicker V2";
    //return the navigation bar by rendering the navTitle variable
    return (
        <div>
            <nav>
                <h1>{navTitle}</h1>
            </nav>
        </div>
    )
}