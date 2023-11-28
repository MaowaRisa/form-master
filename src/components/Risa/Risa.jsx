import Son from "../Son/Son";

const Risa = ({asset}) => {
    return (
        <div>
            <h1>My self Risa</h1>
            <section className="flex">
                <Son asset={asset}></Son>
            </section>
        </div>
    );
};

export default Risa;