import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Todo.css';

function Todo() {
    const [Items, setItems] = useState("")
    const [show, setShow] = useState([])
    
        const handleChange = (e) => {
            setItems(e.target.value)
        }

        const handleClick = () => {
            setShow((oldItems) => {
                return [...oldItems, Items]
            })
            toast.success('Added Successfully', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setItems("")
        }

        const addItem = (e) => {
            if (e.key === "Enter") {
                setShow((oldItems) => {
                    return [...oldItems, Items]
                })
                setItems("")
                toast.success('Added Successfully', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        }
        const removeAll = () => {
            setShow([])
            toast.warn('Removed', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

        const deleteItem = (i) => {
            const newArr = show.filter((currentEle, indexNo) => {
                return indexNo !== i
            })
            setShow(newArr)
        }

        return (
            <div>
                <div>
                    <ToastContainer />
                </div>
                <section>
                    <div className=" main-container container d-flex justify-content-center align-items-center flex-column">
                        <div className="contanier text-start" style={{ width: "30%" }}>
                            <h3 className='heading-content text-white' >TODO LIST</h3>
                        </div>
                        <div className="todo-container">
                            <div className="container">
                                <div className="mt-1">
                                    <input type="text" onKeyPress={addItem} className="form-control" value={Items} id="exampleFormControlInput1" placeholder="Enter your Items" onChange={handleChange} />
                                </div>
                                <div className="container-items mt-2" >
                                    {
                                        show.map((itemsVal, index) => {
                                            return (
                                                <p className='d-flex justify-content-between mt-1 p-1 itemList' key={index}>{index + 1}. {itemsVal}<span onClick={() => deleteItem(index)}><i className="fa-solid fa-trash icon"></i></span></p>
                                            )
                                        })
                                    }
                                </div>

                                <button onClick={removeAll} type="button" className=" remove text-white">REMOVE</button>
                                <button onClick={handleClick} type="button" className=" buton text-white">ADD</button>
                            </div>
                        </div>
                    </div >
                </section >
            </div >
        )
    }
export default Todo
