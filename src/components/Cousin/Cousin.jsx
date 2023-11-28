
const Cousin = ({name, asset}) => {
    
    return (
        <div>
            <h1>{name}</h1>
            {
                asset && <p>has: {asset}</p>
            }
            
        </div>
    );
};

export default Cousin;