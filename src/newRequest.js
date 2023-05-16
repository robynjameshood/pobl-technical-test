import { useState } from 'react';
import './newRequest.css';
import ViewRequests from './viewRequests';

const CreateNewRequest = () => {
    let requests = [];
    let currentRequests = [];

    const handleSubmit = (e) => {
        e.preventDefault();

        currentRequests = JSON.parse([localStorage.getItem('requests')]);

        const formData = new FormData(e.target);

        requests.push({
            firstname: formData.get("firstname"),
            surname: formData.get("surname"),
            jobtitle: formData.get("jobtitle"),
            linemanager: formData.get("linemanager"),
            startdate: formData.get("startdate"),
            businessarea: formData.get("businessarea"),
            status: "imcomplete"
        });


        if (currentRequests.length) {
            const allRequests = [...requests, ...currentRequests]; // merge previous requests and new requests
            localStorage.setItem('requests', [JSON.stringify(allRequests)]); // store all in local storage.
        } else {
            localStorage.setItem('requests', [JSON.stringify(requests)]); // store all in local storage.
        }

        alert("Request submitted");

    }

    return (
        <div className='form-container'>
            <>
                <div className='heading'>Create New Request</div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <p id='heading'>Please use the fields below to enter the required information</p>
                    <input type='text' id="fname" name='firstname' placeholder='First Name' required></input>
                    <input type='text' id="sname" name='surname' placeholder='Surname' required></input>
                    <input type='text' id="jobTitle" name='jobtitle' placeholder='Job Title' required></input>
                    <input type='text' id="lineManager" name='linemanager' placeholder='Line Manager' required></input>
                    <input type='text' id="startDate" name='startdate' placeholder='Start Date' required></input>
                    <div className='business-area'>Business Area</div>
                    <select id="businessarea" name="businessarea">
                        <option value="engineer">Engineer</option>
                        <option value="support">Support</option>
                        <option value="customer-service">Customer Service</option>
                    </select>
                    <button type="submit" id='submitButton' >Submit</button>
                </form>
            </>


        </div>

    );
}

export default CreateNewRequest;