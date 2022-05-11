import { useState, useEffect } from "react";
import "./Show.css"
import ShowItem from "./ShowItem"

function Shows({shows}) {
    const [showList, setShowList] = useState([])


    return (
        <section id="show_selection">
            <div className="wrapper">
                <div id="btnWrapper">
                    <a href="#showTitle">
                        <button id="downBtn">ᐯ</button>
                    </a>
                </div>
            </div>

            <div className="wrapper">
                <h2 id="showTitle">Shows</h2>
            </div>

        </section>
    );
}

export default Shows;