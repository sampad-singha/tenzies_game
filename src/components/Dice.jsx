
const Dice = (props) => {
    const styles = {
        backgroundColor : props.isHeld?"#59E391" : "white"
    }
    return (
        <div onClick={props.handleClick} style={styles} className={"dice"}>
            <h2 className={"dice-number"}>{props.value}</h2>
        </div>
    );
};

export default Dice;