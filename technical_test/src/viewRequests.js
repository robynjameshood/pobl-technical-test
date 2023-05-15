import { useEffect, useState } from 'react';
import './viewRequests.css';

const ViewRequests = () => {
    const [requests, setRequests] = useState([]);
    const [businessArea, setBusinessArea] = useState(["Show All", "support", "engineer", "customer-service"]);

    const loadRequests = () => {
        setRequests(JSON.parse(localStorage.getItem('requests')));
    }

    const handleDelete = (item, itemIndex) => {
        const deleted = requests.filter((record, index) => index !== itemIndex)
        setRequests(deleted);
        localStorage.setItem('requests', [JSON.stringify(deleted)]);
    }

    const handleCompleted = (item, outerIndex) => {
        let update = requests.map((item, index) => {
            if (index === outerIndex) {
                return { ...item, status: "complete" };
            } else {
                return item;
            }
        });
        setRequests(update);
        localStorage.setItem('requests', [JSON.stringify(update)]);
    }

    const handleFilter = (filter) => {
        console.log(filter)
        if (filter !== "Show All") {
            const filtered = requests.filter(item => item.businessarea === filter)
            setRequests(filtered);
        } else {
            loadRequests();
        }
        //  else {
        //     loadRequests();
        // }
    }

    useEffect(() => {
        loadRequests();
        // localStorage.clear();
    }, [])

    return (
        <div className="view-requests-container">
            My Requests
            <div id='filter'>Filter: 
                {businessArea ? businessArea.map((item) => {
                    return <button onClick={()=>handleFilter(item)}>{item}</button>
                }) : ""}
            </div>
            <div className="requests-grid">
                <div className='firstname-heading'>Firstname</div>
                <div className='surname-heading'>Surname</div>
                <div className='jobtitle-heading'>Job title</div>
                <div className='linemanager-heading'>Line Manager</div>
                <div className='firstname-heading'>Start Date</div>
                <div className='businessarea-heading'>Business Area</div>
                <div className='status-heading'>Status</div>
                <div className='update-heading'>Update</div>
                <div className='delete-heading'>Delete</div>
                {requests ? requests.map((item, key) => {
                    return (
                        <>
                            <div className='row-data' key={key}>{item.firstname}</div>
                            <div className='row-data' key={key}>{item.surname}</div>
                            <div className='row-data' key={key}>{item.jobtitle}</div>
                            <div className='row-data' key={key}>{item.linemanager}</div>
                            <div className='row-data' key={key}>{item.startdate}</div>
                            <div className='row-data' key={key}>{item.businessarea}</div>
                            <div className='row-data' key={key}>{item.status}</div>
                            <button onClick={() => handleCompleted(item, key)} className='mark-complete'>Mark As Complete</button>
                            <button onClick={() => handleDelete(item, key)} className='delete-request'>Delete</button>
                        </>
                    )
                }) : ""}
                
            </div>
        </div>
    )
}

export default ViewRequests;