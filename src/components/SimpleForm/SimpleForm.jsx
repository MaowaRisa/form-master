
const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value + " email: " + e.target.email.value)
        console.log("form submitted!");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="border-2 placeholder-slate-400 p-2" name="name" type="text" placeholder="Enter Your Name"/> <br />
                <input className="border-2 placeholder-slate-400 p-2" name="email" type="text" placeholder="Enter Your Email"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;