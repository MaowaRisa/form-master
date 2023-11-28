import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div>
            <h1>Uncle</h1>
            <section className="flex">
                <Cousin name={'Polash'} asset={asset}></Cousin>
                <Cousin name={'Rintu'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;