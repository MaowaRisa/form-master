import { useContext } from "react";
import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";
import { MoneyContext } from "../Grandpa/Grandpa";


const Dad = ({asset}) => {
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h2>Dad</h2>
            <p>Grandpa has: ${money}</p>
            <section className="flex">
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;