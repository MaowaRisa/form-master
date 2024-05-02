// import SimpleForm from "./components/SimpleForm/SimpleForm"
// import StatefulForm from "./components/StatefulForm/StatefulForm"
// import RefForm from "./components/RefForm/RefForm"

import Grandpa from "./components/Grandpa/Grandpa"
import ReusableFrom from "./components/ReusableForm/ReusableFrom"

// import HookForm from "./components/HookForm/HookForm"

function App() {
  const handleSignUpSubmit = (data) =>{
    console.log('Sign Up Data :', {data})
  }
  const handleUpdateProfile = (data) =>{
    console.log('Profile Update :', {data})
  }
  return (
    <>
      <div className="text-center"> 
        <Grandpa></Grandpa>
        {/* <SimpleForm/> */}
        {/* <StatefulForm/> */}
        {/* <RefForm></RefForm> */}
        {/* <HookForm></HookForm> */}
        <ReusableFrom 
        formTitle={'Sign Up'} 
        submitBtnText={'Save'} 
        handleSubmit={handleSignUpSubmit}>
          <div>
            <h2>Login details</h2>
            <p>Please login now</p>
          </div>
        </ReusableFrom>
        <ReusableFrom 
        formTitle={'Profile Update'} 
        submitBtnText={'Update'} 
        handleSubmit={handleUpdateProfile}>
          <div>
            <h2>Profile details</h2>
            <p>Always keep your profile update.</p>
          </div>
        </ReusableFrom>
      </div>
    </>
  )
}

export default App
