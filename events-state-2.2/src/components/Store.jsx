import { useState } from "react"
import products from "../products/products";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

export default function Store() {
    const [state, setState] = useState('view_list');
    return (
        <div>
            <IconSwitch icon={state} onSwitch={setState}/>
            {state==='view_list'? (<CardsView cards={products}/>):(<ListView items={products}  />)}
            
        </div>
    )
}