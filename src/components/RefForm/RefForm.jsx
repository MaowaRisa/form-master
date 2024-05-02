import { useEffect, useRef } from "react";

const SimpleForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    useEffect(()=>{
        nameRef.current.focus();
    },[])
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <div className="my-4">
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} className="border-2 mb-2" type="text" name="name" />
                <br />
                <input ref={emailRef} defaultValue={'risa@mail.com'} className="border-2 mb-2" type="email" name="email" />
                <br />
                <input ref={passwordRef} className="border-2" type="password" name="password" />
                <br />
                <button className="bg-amber-300 p-1 rounded-md m-2 text-red-900" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;