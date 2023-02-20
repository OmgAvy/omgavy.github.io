/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import './Todo.css'

const ToDo = () => {
    const [values, setValues] = useState([]);
    var [serverMessage, setServerMessage] = useState(null);

    const createTodo = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/todo-create/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            })
            const jsonData = await response.json();
            if (typeof jsonData === 'string' || jsonData instanceof String) {
                setServerMessage(jsonData)
            } else {
                setValues([...values, jsonData])
            }

        } catch (err) {
            console.error(err.message)
        };
    }

    const updateTodo = (index, id) => {
        try {
            fetch(`http://127.0.0.1:8000/todo-update/${id}/`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values[index])
            })
        } catch (err) {
            console.error(err.message)
        }
    }

    const deleteTodo = (id) => {
        try {
            fetch(`http://127.0.0.1:8000/todo-delete/${id}/`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
            if (typeof serverMessage === 'string') { setServerMessage(null) };
        } catch (err) {
            console.error(err.message)
        }

        // Filter undeleted items on dom
        setValues(
            values.filter(value => value.id !== id
            )
        )
    }

    const getTodos = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/todos", {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            const jsonData = await response.json();
            setValues(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    }

    const handleInputChange = (event, index) => {
        const newData = [...values];
        newData[index][event.target.name] = event.target.value;
        setValues(newData)
    }

    const handleCheckbox = (e, index) => {
        const newData = [...values];

        newData[index][e.target.name] = !newData[index][e.target.name];
        setValues(newData)
        updateTodo(index, newData[index].id)

    };

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <section id='todos' className='container'>
            <h3>Recent Work</h3>
            <h2>TO DO's</h2>
            <div className='todo__container'>
                {
                    values.map(({ id, title, completed, description }, index) => {
                        return (
                            <dl key={id}>
                                <dt className='todo_checkbox'>
                                    <input
                                        onChange={e => handleCheckbox(e, index)}
                                        name='completed' type="checkbox" checked={completed} />
                                    <input
                                        onBlur={() => updateTodo(index, id)}
                                        onChange={e => handleInputChange(e, index)}
                                        name='title' value={title} type="text" />
                                    <RxCross2 className='button__icon' onClick={() => deleteTodo(id)} />
                                    {/* <FaRegSave onClick={() => updateTodo(index, id)} /> */}
                                </dt>
                                <dd className='todo_description'>
                                    <small><textarea
                                        cols="10"
                                        onBlur={() => updateTodo(index, id)}
                                        onChange={e => handleInputChange(e, index)}
                                        name='description' value={description} type="text" /></small>
                                </dd>
                            </dl>
                        )
                    })
                }
                <a ><FaPlusCircle className="button__add_icon" onClick={() => createTodo()} /></a>
                <p><br />{serverMessage}</p>
            </div>
        </section>


    )
}

export default ToDo