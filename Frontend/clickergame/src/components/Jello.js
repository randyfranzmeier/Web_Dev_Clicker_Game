import '../styles/Jello.css';
import { useState, useEffect } from "react";
import jelloImage from '../images/jello.png';

export default function Jello() {
    
const [points, setPoints] = useState(0);
const [isDoubleClick, setIsDoubleClick] = useState(false);
const [isQuadClick, setIsQuadClick] = useState(false);
const [isMegaClick, setIsMegaClick] = useState(false);
const [clicks, setClicks] = useState(0);
//maybe use clickPoints and continuos points to avoid bugs

let bonusPoints = () => {
    setPoints(points + 5);
    }
    
    // useEffect(()=>{ //only use useEffect to check if achievements have been met
    //     setTimeout(()=>{
    //         setPoints(points + 1);
    //     }, 100000);
    //     });
    
    
    
    let handleClick = () => {
        if (isDoubleClick) {
            if (isQuadClick) {
                if (isMegaClick) {
                    setPoints(points + 50);
                }
                else {
                    setPoints(points + 4)
                }
            }
            else {
                 setPoints(points + 2);
            }
        }
        else {
            setPoints(points + 1);
        }
        setClicks(clicks + 1);
    }

let penalty = () =>{
    alert("Don't steal the jello!!! Penalty applied!!!");
    points < 50? setPoints(0): setPoints(points - 50);
   
}

    return (
        <div className="jelloListener">
                <h1 id="points">JPOINTS: {points} </h1>
                <img id="jello" src={jelloImage} alt='jello' onClick={handleClick} onDragEnd={penalty} onAuxClick={bonusPoints}/>
            </div>
    );
}

