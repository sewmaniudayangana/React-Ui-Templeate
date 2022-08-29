import React from 'react'
import "./UserRegistration.css"

function UserRegistrationform() {
  return (
    <div className='main_form'>

        <form>
            <div className='container'>
                <h1>User Registration</h1>
                <p>Please fill this from to create an account</p>

                <label for="fistname"><b>Firstname</b></label>
                <input type="text" placeholder="Enter Firstname" name="" id="firstname" required></input>

                <label for="lastname"><b>Lastname</b></label>
                <input type="text" placeholder="Enter Lastname" name="" id="lastname" required></input>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="" id="email" required></input>

                <label for="contact"><b>Contact</b></label>
                <input type="text" placeholder="Enter Contact" name="" id="contact" required></input>

                <button type='submit' className='registrationbtn'>Registration</button>

              <div className='signin'>
                <p>Already have an account? <a href="#">Sign in</a></p>
              </div>

            </div>
        </form>
        
    </div>
  )
}

export default UserRegistrationform