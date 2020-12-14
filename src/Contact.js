import React from 'react'
import Avatar from 'react-avatar';
import { Link } from "react-router-dom";
// using destructuring
function Contact({ contact }) {

    const { name, phone, email } = contact;
    return (
        <tr>
            <td>
                <div className="custom-control  custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td><Avatar className="mr-2" name={name} size="75" round={true} />{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to="/#">
                    <span className="material-icons mr-2">edit</span>
                </Link>
                <Link to="/">
                    <span className="material-icons text-danger">remove_circle</span>
                </Link>
            </td>
        </tr>


    )
}

export default Contact

{/*
function Contact(props) {
    return (
        <tr>
            <td>
                <div className="custom-control  custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td>{props.contact.name}</td>
            <td>{props.contact.phone}</td>
            <td>{props.contact.email}</td>
        </tr>

    )
}


export default Contact;


*/}



