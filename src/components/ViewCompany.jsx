import React from 'react'

const ViewCompany = (props) => {
    return (
        <div className="card mb-3">
            <h3 className="card-header">Company Information</h3>
            <div className="card-body">
                <h5 className="card-title">{props.company.name}</h5>
                <h6 className="card-subtitle text-muted">{props.company.catch_phrase}</h6>
            </div>
            <img style={{height: "200px",  width: "100%",  display: "block"}} src={props.company.image} alt="Card" />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Owner: {props.company.owner}</li>
                    <li className="list-group-item">Location: {`${props.company.location}, ${props.company.country}`}</li>
                </ul>  
        </div>

    );
}

export default ViewCompany;