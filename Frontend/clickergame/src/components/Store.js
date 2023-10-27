//parent component

import '../styles/Store.css';

export default function Store() {
  //create 2-value list then send to product component to be rendered in this page
    return (
        <div className="store">

            <h1>Jello Store!</h1> <br/>

            <div id="itemCount">Items left: 8</div>
            <ul className="storeItemContainer">

                <div className="store-first-half"> 
                    <li id="item1">
                        <h1>More Jello</h1>
                        <h2>Points: 50</h2><button id="perk1">buy</button>
                    </li>
                    <li id="item2">
                        <h1>2x click's</h1>
                                <h2>points: 200</h2><button id="perk2">buy</button>
                    </li>
                </div>

                <div className="store-second-half">
                    <li id="item3">
                        <h1>Jello party</h1>
                                <h2>points: 1000</h2><button id="perk3">buy</button>
                    </li>
                    <li id="item4">
                        <h1>Jello Blast</h1>
                                <h2>points: 2500</h2><button id="perk4">buy</button>
                    </li>
                </div>

                <div className="store-third-half">
                    <li id="item5">
                        <h1>4x click's</h1>
                        <h2>points: 4000</h2><button id="perk5">buy</button>
                    </li>
                    <li id="item6">
                        <h1>Jello fever</h1>
                        <h2>points: 6000</h2><button id="perk6">buy</button>
                    </li>
                </div>

                <div className="store-fourth-half">
                    <li id="item7">
                        <h1>Jello frenzy</h1>
                        <h2>points: 8000</h2><button id="perk7">buy</button>
                    </li>
                    <li id="item8">
                        <h1>Mega click's</h1>
                        <h2>points: 12000</h2><button id="perk8">buy</button>
                    </li>
                </div>

            </ul>

        </div>
    );
}