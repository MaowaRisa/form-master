import Brother from "../Brother/Brother";
import Risa from "../Risa/Risa";
import Sister from "../Sister/Sister";


const Dad = ({asset}) => {
    return (
        <div>
            <h1>Dad</h1>
            <section className="flex">
                <Risa asset={asset}></Risa>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;