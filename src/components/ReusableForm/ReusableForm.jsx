
const ReusableForm = ({formTitle, handleSubmit, submitBtnText="Submit", children}) => {
    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data)
    }
    return (
        <div>
            <form onSubmit={handleLocalSubmit}>
                {/* <h1>{formTitle}</h1> */}
                {children}
                <input className="border-2 placeholder-slate-400 p-2" name="name" type="text" placeholder="Enter Your Name"/> <br />
                <input className="border-2 placeholder-slate-400 p-2" name="email" type="text" placeholder="Enter Your Email"/>
                <br />
                <input className="border-2 placeholder-slate-400 p-2" name="password" type="password" placeholder="Enter Your Password"/>
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;