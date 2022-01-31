

import { Contacts } from './components/ContactList';
import { Form } from './components/Form';
import { Filter } from './components/Filter';
import style from './components/phonebook.module.css';
import { getContact, getFilter }  from './redux/selector';
import { useSelector } from 'react-redux';



function App() {

const contacts =  useSelector( getContact)
const filter = useSelector(getFilter)

const findContacts = () => { 

const normalizedFilter = filter.toLowerCase()
  const visibleContacts =  contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter) )
return visibleContacts 
  
}



   return (
     
<>

<Form 

/>
 <h2 className={style.contact}>Contacts</h2>

<Filter 


/>


 <Contacts 
         contacts={findContacts()}


/>   

</>
)
}


export default App;

