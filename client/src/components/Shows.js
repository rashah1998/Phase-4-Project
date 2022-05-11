import { useState, useEffect } from "react";
import "../styles/Shows.css"
import ShowItem from "./ShowItem"

function Shows({shows}) {
    // sort((showA, showB) => showA.date_time -  b
    const renderShows = shows.sort((showA, showB) => (new Date(showA.date_time)) - (new Date(showB.date_time)))
        .map(show => <ShowItem key={show.id} show={show}/>)
    return (
        <section id="show_section">
            <div className="wrapper">
                <div id="btnWrapper">
                    <a href="#showTitle">
                        <button id="downBtn">ᐯ</button>
                    </a>
                </div>
            </div>

            <div className="shows-wrapper">
                <h2 id="showTitle">Shows</h2>
                {renderShows}
            </div>

        </section>
    );
}

export default Shows;