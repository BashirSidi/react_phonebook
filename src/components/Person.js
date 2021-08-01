import React from 'react'

const Person = ({ name, number }) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>{name}:</td>
                        <td>{number}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Person
