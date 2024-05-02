import Cousin from "../Cousin/Cousin";
const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex
            ">
                <Cousin name={'Ritu'} asset={asset}></Cousin>
                <Cousin name={'Chimi'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;