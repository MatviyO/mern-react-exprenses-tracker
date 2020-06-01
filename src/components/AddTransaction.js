import React, {useState, useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0)
    const {addTransaction} = useContext(GlobalContext)
    const onSubmit = e => {
        e.preventDefault()
        const newTransation = {
            id: Math.floor(Math.random() * 100000),
            text,
            amount: +amount
        }
        addTransaction(newTransation);
    }
    return (
        <>
           <h3>Add new transation</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}  placeholder="Enter text ..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Enter amount ..."/>
                </div>
                <button type="submit"  className="btn">Add transaction</button>
            </form>
        </>
    );
}

