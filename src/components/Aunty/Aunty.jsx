import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../GrandPa/GrandPa";

const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h1>Aunty</h1>
            <section className="flex">
                <Cousin name={'Ritu'}></Cousin>
                <Cousin name={'Pritom'}></Cousin>
            </section>
            <p>Money: {money}</p>
            <button className="text-white p-4 bg-emerald-500 rounded-md" onClick={() => {setMoney(money + 1000)}}>Add Money</button>
        </div>
    );
};

export default Aunty;