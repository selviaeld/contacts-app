import React from 'react';
import ContactItemImage from './ContactItemImage';
import ContactItemBody from './ContactItemBody';

const ContactItem = ({ imageUrl, name, tag }) => {
    return (
        <div className='contact-item'>
            <ContactItemImage imageUrl={imageUrl} />
            <ContactItemBody name={name} tag={tag} />
        </div>
    );
}

export default ContactItem;
