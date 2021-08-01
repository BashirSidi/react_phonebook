import React from 'react'

const Form = (props) => {
    return (
        <div>
            <h2>Add new</h2>
            <form onSubmit={props.handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Fullname:</td>
                            <td>
                                <input
                                    type={props.iType}
                                    value={props.Name}
                                    onChange={props.handleNameChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Number:</td>
                            <td>
                                <input
                                    type={props.iType}
                                    value={props.Number}
                                    onChange={props.handleNumberChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form
