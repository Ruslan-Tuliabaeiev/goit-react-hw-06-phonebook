

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

// const deleteContacts = (id) => {
//  setContacts(prevState =>  [...prevState.filter(contact => contact.id !== id)] )
// }


// const handleSubmit = ({name, id,  number}) => {
 
//   const findName = contacts.find(contact => contact.name === name)
//   if (findName){
//     alert('This name is already in the phone book')
//   } else { const contact = { name, number, id}
//    setContacts(prevState => [contact, ...prevState] )}

// }




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

