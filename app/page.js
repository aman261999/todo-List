"use client"
import React, { useState } from 'react';

const page = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [mainTask, setMainTask] = useState([]);

    const sumbitHandler = (e) => {
        e.preventDefault();
        setMainTask([...mainTask , { title, desc }]);
        setTitle('');
        setDesc('');
    }

    const deleteHandler = (i) => {
        let copyTask = [...mainTask];
        copyTask.splice(i,1);
        setMainTask(copyTask);
    }

    let renderTask = <h2>No Task Available.....</h2>

    if (mainTask.length > 0) {
        renderTask = mainTask.map((t, i) => {
            return (
                <li key={i} className='flex items-center justify-between'>
                    <div className='flex items-center justify-between mb-7 w-2/3'>
                        <h4 className='text-2xl font-semibold'>{t.title}</h4>
                        <h5 className='text-lg font-medium'>{t.desc}</h5>
                    </div>
                    <button
                        onClick={() => {
                            deleteHandler(i)
                        }}
                        className='bg-black text-white px-3 py-2 mb-5 font-bold rounded'>
                        Delete
                    </button>
                </li>
            );
        });
    }

    return (
        <React.Fragment>
            <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>
                My Todo List
            </h1>
            <form onSubmit={sumbitHandler}>
                <input
                    type='text'
                    className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2 rounded'
                    placeholder='Enter text here'
                    value={title}
                    onChange={(elem) => {
                        setTitle(elem.target.value);
                    }}
                />
                <input
                    type='text'
                    className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2 rounded'
                    placeholder='Enter text here'
                    value={desc}
                    onChange={(elem) => {
                        setDesc(elem.target.value);
                    }}
                />
                <button className='bg-red-800 text-white px-4 py-3 text-2xl rounded font-bold m-5'>
                    Add Task
                </button>
                <hr />
                <div className='p-8 bg-slate-300'>
                    <ul>
                        {renderTask}
                    </ul>
                </div>
                
            </form>
        </React.Fragment>
    )
}

export default page