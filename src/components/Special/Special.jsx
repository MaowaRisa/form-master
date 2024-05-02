import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Special = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Special</h2>
            {
                asset && <p>Has: {asset}</p>
            }
            {
                gift && <p>Also has: {gift}</p>
            }
            
        </div>
    );
};

export default Special;