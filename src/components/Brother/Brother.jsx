import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

const Brother = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h1>Brother</h1>
            {
                gift && <p> has: {gift}</p>
            }
        </div>
    );
};

export default Brother;