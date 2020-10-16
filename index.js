# demofunction Mendchilgee (){// функц component. props-гүй
    return <h1>hello world</h1>
}
function Mendchilgee123 (props){// функц component. props-тай
    return <h1>{props.ner}</h1>
}
function Mendchilgee456 (props){// функц component. props-тай
    return (
        <div>
            < h1>{props.ner}</h1>
            <p>{props.nas}</p>
        </div>
    )
}

function EtsegComp(props){
    return(
        <div>
            <Mendchilgee/>
            <Mendchilgee123 ner={props.ner}/>
            <Mendchilgee456 ner={props.ner} nas={props.nas}/>
            <table>
                <tr><td> {props.angi[0]}</td></tr>
                <tr><td> {props.angi[1]}</td></tr>
                <tr><td> {props.angi[2]}</td></tr>


            </table>
        </div>
    )
}
ReactDOM.render(
   // mendchilgee /
   //<Mendchilgee123 ner =" hello bat"/> ,
  //< Mendchilgee456 ner="Hello dorj" nas='20'/>,
 < EtsegComp ner="james" nas="25" angi={[ 'Пх','МС','НББМС']}/>,
    document.getElementById('root')
  );
