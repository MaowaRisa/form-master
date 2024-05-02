
const ReusableFrom = ({formTitle, handleSubmit, submitBtnText, children}) => {
    const handleLocalSubmit = (e) =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit({data})
    }
    return (
        <div className="my-4">
            <h2>{formTitle}</h2>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input className="border-2 mb-2" type="text" name="name" />
                <br />
                <input className="border-2 mb-2" type="email" name="email" />
                <br />
                <input className="border-2" type="password" name="password" />
                <br />
                <button className="bg-amber-300 p-1 rounded-md m-2 text-red-900" type="submit">{submitBtnText}</button>
            </form>
        </div>
    );
};

export default ReusableFrom;