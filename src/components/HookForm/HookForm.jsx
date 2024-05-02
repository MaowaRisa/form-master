import useInputState from "../hooks/useInputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('Rojoni hooked');
    const emailState = useInputState('risa@mail.com')
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('form data', emailState.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} className="border-2 mb-2" type="text" name="name" /> */}
                <br />
                <input {...emailState} className="border-2 mb-2" type="email" name="email" />
                <br />
                <input className="border-2" type="password" name="password" />
                <br />
                <button className="bg-amber-300 p-1 rounded-md m-2 text-red-900" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default HookForm;