import { useState } from "react";

const StatefulForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(password.length <6){
            setError('Error: Password must be 6 or longer!')
        }else{
            setError('')
        }
        console.log(`form submitted with: name: ${name}, email: ${email} and password: ${password}`)
    }
    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
        // console.log(e.target.value)
    }
    const handleNameChange = (e) =>{
        setName(e.target.value)
        // console.log(e.target.value)
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
        // console.log(e.target.value)
    }
    return (
        <div className="my-4">
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} className="border-2 mb-2" type="text" name="name" />
                <br />
                <input className="border-2 mb-2" onChange={handleEmailChange} type="email" name="email" />
                <br />
                <input onChange={handlePasswordChange} className="border-2" type="password" name="password" />
                <br />
                <button  className="bg-amber-300 p-1 rounded-md m-2 text-red-900" type="submit">Submit</button>
            </form>
            <div>
                {
                    error && <p>{error}</p>
                }
            </div>
        </div>
    );
};

export default StatefulForm;