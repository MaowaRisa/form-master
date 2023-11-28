import { data } from 'autoprefixer'
import './App.css'
// import HookForm from './components/HookForm/HookForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
import GrandPa from './components/GrandPa/GrandPa'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import RefForm from './components/refForm/refForm'

function App() {
  const handleSignUpSubmit = data =>{
    console.log('Sign Up Form Data', data)
  }
  const handleUpdateProfileSubmit = data =>{
    console.log('Update Profile Data',data)
  }
  return (
    <>
      <GrandPa></GrandPa>
      <h1>Simple form </h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm/> */}
      <ReusableForm formTitle={"Sign Up"}
       handleSubmit={handleSignUpSubmit}>
        <div>
          <h1>Sign Up</h1>
          <p>Enter valid credentials to sign up</p>
        </div>
       </ReusableForm>
       
      <ReusableForm formTitle={"Profile Update"} submitBtnText={'Update'} handleSubmit={handleUpdateProfileSubmit}>
        <div>
          <h1>Update Profile</h1>
          <p>Always try to keep your profile updated</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
