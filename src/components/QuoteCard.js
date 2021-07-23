import  "./style.css";


const QuoteCard = ({TheSimpsons}) => {

    return(
        <div className="box">
            <img  className ="SimpsonsImage"src={TheSimpsons.image} alt={TheSimpsons.character} />

            <ul>
                <li>Character: {TheSimpsons.character} </li>
                <li>Quote: {TheSimpsons.quote}</li>
            </ul>
        </div>

    );
}


export default QuoteCard;