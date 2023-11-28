import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState('Diana');
    const [email, setEmail] = useState('example@domain.com');
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');
    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be 6 characters or longer!')
        }else{
            setError('')
            console.log(name, email, password)
        }
    }
    const handleNameChange = e =>{
        setName(e.target.value)
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} value={name} className="border-2 placeholder-slate-400 p-2" name="name" type="text" placeholder="Enter Your Name"/> <br />
                <input className="border-2 placeholder-slate-400 p-2" name="email" type="email" onChange={handleEmailChange} value={email} placeholder="Enter Your Email"/>
                <br />
                <input className="border-2 placeholder-slate-400 p-2" name="password" type="text" onChange={handlePasswordChange} placeholder="Enter Your Password" required/>
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p className="text-red-700">{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;