import { useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import '../../css/hello.css';
import axios from 'axios';


export default function Hello({ header, context }) {
    const [inputText, setInputText] = useState('');
    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        message: '',
    });
    
    function submitHandler(e){
        e.preventDefault();

        post(route('hello'));
    }

    function axiosPostHandler(){
        axios.put(route('hello'), {message: inputText}).then(res => {
            console.log(res);
        });
    }

    return (
        <div>
            <p className='header'>{header}</p>
            <p className='context'>{context}</p>

            <div className='post-container'>
                <p className='header-2'>Post request to Laravel</p>
                <form onSubmit={submitHandler}>
                    <input type="text" onChange={(e) => setData('message', e.target.value)} />
                </form>
            </div>

            <div className='post-container'>
                <p className='header-2'>Axios request to Laravel</p>
                
                <input type="text" onChange={(e) => setInputText(e.target.value)} />
                <button onClick={axiosPostHandler}>Axios post</button>
            </div>

            <div className='post-container'>
                <p className='p-normal'>This code is just an example on how to do basic things like passing arguments to React components from Laravel, doing form and axios requests from React to Laravel, and also this code has login system via API provided by breeze.</p>
                <p className='p-important'>For the cleanest experience, you can safely delete these files:</p>
                
                <ul className='p-important fgap'>
                    <li>resources/js/Pages/Hello.jsx</li>
                    <li>resources/css/hello.css</li>
                </ul>

                <p className='p-danger'>All other files are important for React to work!</p>
            </div>
        </div>
    )
}
