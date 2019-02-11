import React from 'react'
import { NavLink } from 'react-router-dom'

const Companies = (props) => {
    return (
        <div>
            <i>Click to view</i>
            <table className="table table-stripped table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Country</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                    props.companies.map( company => {
                        return (
                            <tr key={company.id}>
                                <td>{company.name}</td>
                                <td>{company.location}</td>
                                <td>{company.country}</td>
                                <td><NavLink to={`/companies/${company.id}`} ><i className="fa fa-eye"></i></NavLink></td>
                            </tr>
                        )
                    })
            }
            </tbody>
        </table>
        </div>
    );
}

export default Companies