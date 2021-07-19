import "./style.css"
const Button = ({getQuote}) => {

    return(
        <div className="button">
            <button type=" button" onClick={getQuote}>Get a new quote

            </button>
        </div>
    );
}

export default Button;