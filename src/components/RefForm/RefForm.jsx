import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(phoneRef.current.value);
    }
    useEffect(() =>{
        nameRef.current.focus();
    },[])
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} className="border-2 placeholder-slate-400 p-2" name="name" type="text" placeholder="Enter Your Name"/> <br />
                <input ref={emailRef} className="border-2 placeholder-slate-400 p-2" name="email" type="text" placeholder="Enter Your Email"/>
                <br />
                <input ref={phoneRef} className="border-2 placeholder-slate-400 p-2" name="phone" type="text" placeholder="Enter Your Phone"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;