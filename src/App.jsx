import { useState } from 'react';

import './App.css';
import { BUTTONS } from './constants';
import { OPERATORS } from './constants';

import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

function App() {
    const [calc, setCalc] = useState({
        num: 0,
        sign: '',
        result: ''
    });

    const isOperator = (value) => Object.keys(OPERATORS).includes(value);

    const updateCalc = (updates) => setCalc(prevCalc => ({ ...prevCalc, ...updates }));

    const buttonsMap = {
        'C': clearHandler,
        '=': equalHandler,
        '%': percentageHandler,
        '+-': plusMinusHandler
    };

    const buttonClickHandler = (value) => {
        if (buttonsMap[value]) {
            buttonsMap[value]();
        } else if (isOperator(value)) {
            signHandler(value);
        } else {
            numberDotHandler(value);
        }
    };

    const signHandler = (value) => {
       
    };

    const numberDotHandler = (value) => {
       
    };

    return (
        <>
            <div className='main-wrapper'>
                <div>
                    <div className='result-screen'>
                        {calc.num || calc.result || 0}
                    </div>
                </div>
                <div className='buttons-wrapper'>
                    <ButtonBox>
                        {BUTTONS.flat().map((btn, i) => {
                            return <Button
                                key={i}
                                className={btn === '=' ? 'long' : 'button'}
                                onClick={() => buttonClickHandler(btn)}
                                value={btn}
                            />
                        })}
                    </ButtonBox>
                </div>
            </div>
        </>
    )
}

export default App;