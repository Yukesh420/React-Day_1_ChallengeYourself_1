function App()
{
    const name1="Kabil";
    const name2="Kabil";
    const object1={name:"Kabil"}
    const object2={name:"Kabil"}
    let name=(name1===name2)?"True":"False"
    let object=(object1===object2)?"True":"False"

    const Compare1=()=>{alert(name)}
    const Compare2=()=>{alert(object)}
    return(
        <div>
            <button onClick={Compare1}>Comapre Name</button>
            <button onClick={Compare2}>Comapre Object</button>
        </div>
    )

}
ReactDOM.render(<App/>,document.getElementById("mydiv"))