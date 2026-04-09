import appComponentStates from "./AppComponentStates";

const HelperSidebar = ({currentComponent, setChosenSubComponent}) => {
    return (
        <div>
           {currentComponent === appComponentStates.Home && <p>asd</p>}
        </div>
    )
}

export default HelperSidebar;

//<div> {
// contents.map((item, i) => (
//         <div key={i}>{item}</div>
// ))}
// </div>