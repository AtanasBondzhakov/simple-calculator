import './App.css';
import { BUTTONS } from './constants';

import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

function App() {
    return (
        <>
            <div className='main-wrapper'>
                <div>
                    <div className='result-screen'>
                    </div>
                </div>
                <div className='buttons-wrapper'>
                    <ButtonBox>
                        {BUTTONS.flat().map((btn, i) => {
                            return <Button
                                key={i}
                                className={btn === '=' ? 'long' : 'button'}
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