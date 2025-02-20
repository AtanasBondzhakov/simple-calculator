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
        // '+-': plusMinusHandler
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

    const calculateResult = (a, b, operator) => {
        return OPERATORS[operator](Number(a), Number(b));
    };

    function clearHandler() {
        setCalc({
            num: 0,
            sign: '',
            result: ''
        });
    };

    function equalHandler() {
        if (calc.result && calc.num !== 0) {
            const calculatedResult = parseFloat(calculateResult(calc.result, calc.num, calc.sign).toFixed(10))
            updateCalc({
                num: 0,
                sign: '',
                result: calculatedResult
            });
        }
    };

    function percentageHandler() {
        if (calc.num) {
            updateCalc({
                num: calc.num / 100,
                result: calc.result,
            });
        }
    }
    

    const signHandler = (value) => {
        const calculatedRes = calc.result && calc.sign
            ? calculateResult(calc.result, calc.num, calc.sign)
            : calc.result || calc.num;
        updateCalc({ num: 0, sign: value, result: calculatedRes });
    };

    const numberDotHandler = (value) => {
        if (typeof value === 'number') {
            updateCalc({ num: calc.num === 0 ? value : calc.num + value.toString() })
        } else if (!calc.num.toString().includes(value)) {
            updateCalc({ num: calc.num.toString() + '.' })
        }
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