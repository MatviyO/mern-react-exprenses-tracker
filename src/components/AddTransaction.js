import React, {useState} from 'react';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0)
    return (
        <>
           <h3>Add new transation</h3>
            <form >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}  placeholder="Enter text ..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Enter amount ..."/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    );
}

