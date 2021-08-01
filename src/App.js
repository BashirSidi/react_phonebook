import React, { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import PersonsCom from './components/Persons'

const App = () => {
  const [Persons, setPersons] = useState([
    { name: "Bashir Salisu Sidi", number: "08067753836" },
    { name: "Abba Ali", number: "07034284523" },
    { name: "Baba Ali", number: "08067239374" },
    { name: "Umar Baba", number: "07054743838" }
  ])
  const [NewName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [FilterValue, setFilterValue] = useState('')

  const nameC = Persons.find(p => p.name.toLowerCase() === NewName.toLowerCase());
  const numberC = Persons.find(p => p.number.toLowerCase() === number.toLowerCase());

  const filteredPersons = Persons.filter(p =>
    (p.name.toLowerCase().indexOf(FilterValue.toLowerCase()) > 0) ||
    (p.number.indexOf(FilterValue) > 0)
  )

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  const handleNumberChange = (event) => {
    setNumber(event.target.value)
  }
  const handleFilterValueChange = (event) => {
    setFilterValue(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault();
    const name = {
      name: NewName,
      number: number
    }

    if (nameC !== undefined) {
      alert(`${NewName} is already added to phonebook.`)
      setNumber('');
      setNewName('');
    } else if (numberC !== undefined) {
      alert(`${number} is already added to phonebook.`)
      setNumber('');
      setNewName('');
    } else {
      setPersons(Persons.concat(name));
      setNewName('')
      setNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter
          inputType="text"
          filterString={FilterValue}
          handleFilterValueChange={handleFilterValueChange}
        />
      </div>

      <div>
        <Form
          iType="text"
          handleNameChange={handleNameChange}
          handleNumberChange={handleNumberChange}
          Number={number}
          Name={NewName}
          handleSubmit={addName}
        />
      </div>

      <div>
        <PersonsCom
          persons={Persons}
          filteredPersons={filteredPersons}
          FilterValue={FilterValue}
        />
      </div>
    </div>
  )
}

export default App