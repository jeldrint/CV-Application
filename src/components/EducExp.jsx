import { useState } from 'react';
import Icon1 from '../images/add.png'

export default function EducExp (props) {

    const [changeToInput, setChangeToInput] = useState(false);

    const handleChange = (e) => {
        console.log(props.educExp)
        setChangeToInput(false);
        e.preventDefault();
    }

    const handleClickAdd = (e) => {
        if (e.target.parentNode.id === 'add-school') {
            setChangeToInput(true);
        }
        if (e.target.parentNode.id === 'add-work') {
            setChangeToInput(true);
        }
    }

    return (
    <>

        <div className="add-exp" id={props.educExp ? 'add-school' : 'add-work'} onClick={handleClickAdd} style={{display: changeToInput ? 'none' : 'flex'}}>
            <img src={Icon1} style={{height: '35px'}}/>
            <div style={{fontSize:'16px'}}>{props.educExp ? 'Add School' : 'Add Work'}</div>
        </div>
        <div className='input-area' style={{display: !changeToInput ? 'none' : 'flex'}}>
        <div className="input-column">
                <input type='text' placeholder="Name of School / Institution / University"/>
            </div>
            <div className="input-column">
                <input type='text' placeholder="Diploma / Course"/>
            </div>
            <div className="input-column">
                <label for='year-start' style={{fontSize:'14px'}}>Year Started: </label>
                <input id='year-start' type='date' style={{width: '20%', fontSize: '12px'}} />
                <label for='year-end' style={{fontSize:'14px'}}>Year Graduated: </label>
                <input id='year-end' type='date' style={{width: '20%', fontSize: '12px'}} />
            </div>
            <button onClick={handleChange}>Submit</button>            
        </div>
    </>
    )
}