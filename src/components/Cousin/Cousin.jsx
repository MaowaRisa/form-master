import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";
import Friend from "../Frined/Friend";


const Cousin = ({name, asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h1>Cousin</h1>
            <p>{name}</p>
            {
                asset && <p>has: {asset}</p>
            }
            {
                gift && name === 'rubaiyat' && <p>has: {gift}</p>
            }
            {
                name === 'Chimi' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;