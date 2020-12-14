import React, { useState } from 'react';

function AddContact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const createContact = e => {
        e.preventDefault();

        console.log(name, phone, email);
    };

    return (
        <div className="card border-0 shadow">
            <div className="card-header">
                Add a Contact
            </div>
            <div className="card-body">
                <form onSubmit={(e) => createContact(e)}>
                    <input type="text" className="form-group"
                        placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                </form>
            </div>
            <div className="card-body">
                <form>
                    <input type="text" className="form-group"
                        placeholder="Enter Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </form>
            </div>
            <div className="card-body">
                <form>
                    <input type="text" className="form-group"
                        placeholder="Enter Your E-mail Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button className="btn btn-primary" type="submit" >Create Contact</button>
                </form>
            </div>



        </div >
    );
}

export default AddContact;
