import Icon1 from '../images/add.png'

export default function EducExp (props) {

    const handleChange = (e) => {
        console.log(props.educExp)
        e.preventDefault();
    }

    const handleClickAdd = (e) => {
        if (e.target.parentNode.id === 'add-school' || e.target.id === 'add-school') {
            console.log('school!')
        }
        if (e.target.parentNode.id === 'add-work' || e.target.id === 'add-work') {
            console.log('work!')
        }
    }

    return (
    <>
        <div className="add-exp" id={props.educExp ? 'add-school' : 'add-work'} onClick={handleClickAdd}>
            <img src={Icon1} style={{height: '35px'}}/>
            <div style={{fontSize:'16px'}}>{props.educExp ? 'Add School' : 'Add Work'}</div>
        </div>
        <button onClick={handleChange}>Submit</button>    
    </>
    )
}