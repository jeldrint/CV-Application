import { useState } from 'react';
import Icon1 from '../images/add.png'

export default function Experience (props) {
    const [changeToInput, setChangeToInput] = useState(false);

    const handleChange = (e) => {
        if(props.workExp) {
            switch(e.target.name) {
                case 'school-job-name':
                    props.setWorkExp({...props.workExp, jobTitle: e.target.value})
                    break;
                case 'diploma-company-name':
                    props.setWorkExp({...props.workExp, company: e.target.value})
                    break;
                case 'address-location':
                    props.setWorkExp({...props.workExp, address: e.target.value})
                    break;
                case 'desc':
                    props.setWorkExp({...props.workExp, desc: e.target.value})
                    break;
                case 'yr-start':
                    props.setWorkExp({...props.workExp, yrStart: e.target.value})
                    break;
                case 'yr-end':
                    props.setWorkExp({...props.workExp, yrEnd: e.target.value})
                    break;
             }
        }
        if(props.educExp) {
            switch(e.target.name) {
                case 'school-job-name':
                    props.setEducExp({...props.educExp, school: e.target.value})
                    break;
                case 'diploma-company-name':
                    props.setEducExp({...props.educExp, course: e.target.value})
                    break;
                case 'address-location':
                    props.setEducExp({...props.educExp, address: e.target.value})
                    break;
                case 'yr-start':
                    props.setEducExp({...props.educExp, yrStart: e.target.value})
                    break;
                case 'yr-end':
                    props.setEducExp({...props.educExp, yrEnd: e.target.value})
                    break;
             }
        }
        e.preventDefault();
    }

    const handleClickAdd = (e) => {
        if (e.target.parentNode.id === 'add-school' || e.target.parentNode.id === 'add-work' ) {
            setChangeToInput(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setChangeToInput(false);

        if (props.workExp){
            props.setWorkExpOut(prev=>[...prev,{jobTitle: props.workExp.jobTitle, company: props.workExp.company, address: props.workExp.address,
            yrStart: props.workExp.yrStart, yrEnd: props.workExp.yrEnd, desc: props.workExp.desc }])
        }
        if (props.educExp){
            props.setEducExpOut(prev=>[...prev,{school: props.educExp.school, course: props.educExp.course, address: props.educExp.address,
                yrStart: props.educExp.yrStart, yrEnd: props.educExp.yrEnd}])
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
                <input type='text' name='school-job-name' placeholder={props.educExp ? "Name of School / Institution / University" : 'Job Title / Position'} onChange={handleChange}/>
            </div>
            <div className="input-column">
                <input type='text' name='diploma-company-name' placeholder={props.educExp ? "Diploma / Course" : 'Company Name'} onChange={handleChange} />
            </div>
            <div className="input-column">
                <input type='text' name='address-location' placeholder="Address / Location" onChange={handleChange}/>
            </div>
            {!props.educExp ? 
            <textarea type='text' name='desc' placeholder='Give some details / description of your job' onChange={handleChange} /> 
            : '' }
            <div className="input-column">
                <label htmlFor='year-start' style={{fontSize:'14px'}}>Year Started: </label>
                <input id='year-start' name='yr-start' type='date' style={{width: '23%', fontSize: '12px'}} onChange={handleChange} />
                <label htmlFor='year-end' style={{fontSize:'14px'}}>Year Ended: </label>
                <input id='year-end' name='yr-end' type='date' style={{width: '23%', fontSize: '12px'}} onChange={handleChange} />
            </div>

            <button onClick={handleSubmit}>Submit</button>            
        </div>
    </>
    )
}