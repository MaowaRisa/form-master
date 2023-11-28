import useInputState from "../hooks/useInputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('Risa');
    const emailState = useInputState('risa@mail.com');
    console.log(emailState)
    const handleSubmit = e =>{
        console.log('form data', emailState.value)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input className="border-2 placeholder-slate-400 p-2" name="name" value={name} onChange={handleNameChange} type="text" placeholder="Enter Your Name"/> <br /> */}
                <input className="border-2 placeholder-slate-400 p-2" name="email" {...emailState} type="text" placeholder="Enter Your Email"/>
                <br />
                <input className="border-2 placeholder-slate-400 p-2" name="password" type="password" placeholder="Enter Your password"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;