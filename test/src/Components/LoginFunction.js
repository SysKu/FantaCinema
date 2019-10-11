import React, { Component } from 'react'

export default class LoginFunction extends Component {
    render() {
        return (
            <div>
                <div id="id01" class="modal">
                    <form class="modal-content animate" action="/action_page.php" method="post">
                        <div class="imgcontainer">
                             <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close">&times;
                                <div class="container">
                                     <label for="email"><b>E-mail</b></label> 
                                     <input type="text" placeholder="Enter E-mail address" name="email" required title="Fill in this field"/>
                                    <label for="booking"><b>Booking number</b></label>
                                     <input type="booking" placeholder="Enter Booking number" name="booking" required title= "Fill in this field"/>
                                     <button type="submit">Login</button>

                                </div>
                            </span>
                        </div>  
                    </form>
                </div>
            </div>
        )
    }
}
