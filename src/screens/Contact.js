import "../App.css"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useState, useRef, useEffect } from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function Contact() {
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => { setIsShown(current => !current); };
    const [myContacts, setMyContacts] = useState([]);
    const dataUrl = 'http://127.0.0.1:3000/persons';
    useEffect(()=>{
        getData();
    }, []);

    function getData() {
        axios.get(dataUrl)
            .then(function (response) {
                // handle success
                console.log(response);
                setMyContacts(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }


    const nameRef = useRef();
    const phoneRef = useRef();
    function newContact() {
        const nome = nameRef.current.value;
        const phone = phoneRef.current.value;
        let newContact = { name: nome, phone: phone, }
        if (nome === "" || phone === "") { newContact = {name:"John Doe", phone: 132}}

        myContacts.push(newContact);
        myContacts.sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
        setMyContacts([...myContacts]);
        nameRef.current.value = null;
        phoneRef.current.value = null;

        setIsShown(current => !current);
    }

    return <>
        <span className='contactTitle'><b>Contacts</b></span> 
        <Fab className="addbutton2" onClick={handleClick} size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
        
        
        {isShown && (
            
            <div 
            
            className="newContactForm">
                <input ref={nameRef} type="text" placeholder="Name" ></input><br />
                <input ref={phoneRef} type="text" placeholder="Number" ></input><br />
                <button onClick={newContact} >New Contact</button>
            </div>
        )}
        
        
        
        
        {myContacts.map((contact, i) => (<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', }}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar >
                        {contact.name.charAt(0)}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText 
                primary={contact.name} 
                secondary={contact.phone} />
            </ListItem>
        </List>))}
        sas
        

    </>
}
