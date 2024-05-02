
const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
    }
    return (
        <div className="my-4">
            <form onSubmit={handleSubmit}>
                <input className="border-2 mb-2" type="text" name="name" />
                <br />
                <input className="border-2 mb-2" type="email" name="email" />
                <br />
                <input className="border-2" type="phone" name="phone" />
                <br />
                <button className="bg-amber-300 p-1 rounded-md m-2 text-red-900" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;