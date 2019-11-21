import React from 'react';
import ContactCard from './contact_card';
import contactData from '../data/contacts';

class ContactList extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            contacts: contactData
        }

        
    }

    render() {

        const list = this.state.contacts.map((item, index) => {
            //console.log('item:', item);
            return (
                <ContactCard key={index} contact={item} />
            )
        });
        
        //console.log('Contact Data:', this.state.contacts);

       return (
            <div className='col-8'>
                <div className='row'>{list}</div></div>)
    }

}

export default ContactList;