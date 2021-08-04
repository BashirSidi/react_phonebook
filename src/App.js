import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import personServices from './services/persons';
import Form from './components/Form'
import PersonsCom from './components/Persons'

const App = () => {
  const [Persons, setPersons] = useState([])
  const [NewName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [FilterValue, setFilterValue] = useState('')

  useEffect(() => {
    async function fetchData() {
      const data = await personServices.getAll();
      console.log(data)
      setPersons(data)
    }
    fetchData();
  }, [])

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

  const addPerson = async (event) => {
    event.preventDefault();
    const personObject = {
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
      const response = await personServices.create(personObject)
      setPersons(Persons.concat(response.data));
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
          handleSubmit={addPerson}
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