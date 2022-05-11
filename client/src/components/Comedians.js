import ComediansList from "./ComediansList";

function Comedians({comedians}){
    const renderComedians = comedians.sort((comediansA, comediansB) => (comediansA.name) - (comediansB.name))
        .map(comedian => <ComediansList key={comedian.id} comedian={comedian}/>)

    return(
        <div>
        {renderComedians}
        </div>
    )
}
export default Comedians;