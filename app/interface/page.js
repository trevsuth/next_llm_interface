'use client'

import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import styles from './Interface.module.css';

export default function Interface() {
    const [inputText, setInputText] = useState('');
    const [displayText, setDisplayText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setDisplayText(inputText);
            setInputText('');
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