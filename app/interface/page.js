'use client'

import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import styles from './Interface.module.css';
import axios from 'axios';

export default function Interface() {
    const [inputText, setInputText] = useState('');
    const [displayText, setDisplayText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
        console.log('Input changed:', e.target.value); // Log input change
    };

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            console.log('Enter pressed, current input:', inputText); // Log when Enter is pressed
            setDisplayText(inputText);

            //send data to mongodb
            try {
                console.log('Sending data to the server:', inputText); // Log before sending data
                await axios.post('/api/saveChat', { text: inputText }); // Corrected API path
                console.log('Text saved to server');
            } catch (error) {
                console.error("Error saving text", error); // Log any error
            }

            setInputText('');
            console.log('Input text reset'); // Log after resetting the input
        }
    };

    return (
      <>
        <Sidebar />
        <div className={styles.interfaceContainer}>
            <div className={styles.textDisplay}>
                {displayText}
            </div>
            <div className={styles.textEntry}>
                <input 
                    type='text' 
                    className={styles.textInput} 
                    placeholder='Enter text here...' 
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
      </>
    );
}
