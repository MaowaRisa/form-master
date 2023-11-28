import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';
export const AssetContext = createContext('Gold');
export const MoneyContext = createContext(1000);
const GrandPa = () => {
    const [money, setMoney] = useState(1000);
    const asset = 'Diamond';
    return (
        <div className="grandpa mx-auto">
            <h1>Grandpa</h1>
            <p>Grandpa has : {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="Gold">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default GrandPa;

/**
 * If you want to use context API 
 * 1. Create a context and export it.
 * 2. Add provider for the context with a value.
 * 3. useContext to access value to the context API 
 */