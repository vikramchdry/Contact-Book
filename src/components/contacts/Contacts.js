import React from 'react';

import { useSelector } from "react-redux";
import Contact from '../../Contact';

function Contacts() {

    const contacts = useSelector((state => state.contacts))
    console.log(contacts)
    return (
        <div>
            <table className="table shadow">
                <thead>
                    <tr>
                        <th scope="col">
                            <div className="custom-control  custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <label className="custom-control-label"></label>
                            </div>
                        </th>
                        <th scope="col">First</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map(contact => (
                            <Contact contact={contact} />
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
}

export default Contacts;
