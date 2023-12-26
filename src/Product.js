import { useState } from "react";

export default function Product(props) {

    let [isAvailable,setIsAvailable] = useState("In stock");

    function makeNotAvailable(){
        setIsAvailable("Not in stock");
      }

    return (
        <div className="product">
            <img className="img" src={props.url} alt="productpic"></img>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <p>{isAvailable}</p>

            <button className='btn' onClick={makeNotAvailable}>Click</button>

        </div>
    );
}