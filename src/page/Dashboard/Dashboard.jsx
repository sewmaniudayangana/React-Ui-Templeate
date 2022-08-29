import React from 'react'
import "./Dashboard.css"

function Dashboardfrom() {
  return (
    <div class='wrapper'>
        <nav class="navbar">
            <ul>
            <li><a class="active" href="#">Home</a></li>
                     <li><a href="#">About</a></li>
                     <li><a href="#">Services</a></li>
                     <li><a href="#">Contact</a></li>
                     <li><a href="#">Feedback</a></li>
            </ul>
        </nav>

        <div class="center">
              <h1>Welcome To ReactJs</h1>
              <h2>Create Something New</h2>
              <div class="buttons">
                  <button>Explore More</button>
                  <button class="btn">Subscribe Us</button>
              </div>
          </div>

    </div>
  )
}

export default Dashboardfrom