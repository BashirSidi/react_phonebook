import React from 'react'
import Person from './Person'

const Persons = ({ persons, filteredPersons, FilterValue }) => {
    return (
        <div>
            <h2>Numbers</h2>
            {FilterValue === '' ?
                (
                    persons.map((p, i) => (
                        <div key={i}>
                            <Person
                                name={p.name}
                                number={p.number}
                            />
                        </div>
                    ))
                ) :
                (
                    filteredPersons.map((p, i) => (
                        <div key={i}>
                            <Person
                                name={p.name}
                                number={p.number}
                            />
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default Persons