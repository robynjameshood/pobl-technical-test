import { useEffect, useState } from 'react';
import './viewRequests.css';

const ViewRequests = () => {
    const [requests, setRequests] = useState([]);
    const [activeFilter, setActiveFilter] = useState(false);
    const [businessArea, setBusinessArea] = useState([
        { area: "support", active: false },
        { area: "engineer", active: false },
        { area: "customer-service", active: false }]);

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
        if (requests) {
            const filtered = requests.filter(item => item.businessarea === filter)
            setRequests(filtered);
            setActiveFilter(true);
        } else {
            loadRequests();
        }
    }

    const handleRemoveFilter = () => {
        setActiveFilter(false);
        loadRequests();
        let removeHighlight = businessArea.map((item) => {
            return {...item, active: false};
        });
        setBusinessArea(removeHighlight);
    }

    const handleHighlight = (clicked) => {
        let updateHighlight = businessArea.map((item) => {
            if (clicked.area === item.area) {
                return {...item, active: true};
            } else {
                return item;
            }
        });

        setBusinessArea(updateHighlight);
        
    }

    useEffect(() => {
        loadRequests();
    }, [])

    return (
        <div className="view-requests-container">
            My Requests
            <div id='filter'>Filter:
                <button className={activeFilter ? "remove-filter" : "show-all"} onClick={() => handleRemoveFilter()}></button>
                {businessArea ? businessArea.map((item, index) => {
                    return <button className={item.active ? "highlight" : "no-highlight"} onClick={() => {
                        handleHighlight(item)
                        handleFilter(item.area)
                    }}>{item.area}</button>
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
                            <div key={key} className='row-data'>{item.firstname}</div>
                            <div className='row-data' >{item.surname}</div>
                            <div className='row-data' >{item.jobtitle}</div>
                            <div className='row-data' >{item.linemanager}</div>
                            <div className='row-data' >{item.startdate}</div>
                            <div className='row-data' >{item.businessarea}</div>
                            <div className='row-data' >{item.status}</div>
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