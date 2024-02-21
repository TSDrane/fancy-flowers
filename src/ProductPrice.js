export function ProductPrice(props) {
    return (
        <div className="products">
            <h2>{props.name}</h2>
            <img src={props.pic} alt="flowers"/>
            <p>{props.description}</p>
            <p>${props.price}</p>
            <p className="onSale">
                {props.sale === true ? "On Sale!" : ""}
            </p>
            <button>Buy Now</button>
            
        </div>
    )
}