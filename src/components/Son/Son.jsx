
const Son = ({asset}) => {
    return (
        <div>
            <h1>My Son Aayan</h1>
            {
                asset && <p>has: {asset}</p>
            }
        </div>
    );
};

export default Son;