export default function GeneralInfo (props) {

    const handleChange = (e) => {
        console.log(props.genInfo)
        e.preventDefault();
    }

    return (
    <>
        <div className="input-column">
            <input type='text' placeholder="First Name..." />
            <input type='text' placeholder="Last Name..." />
        </div>
        <div className="input-column">
            <input type='text' placeholder="Position / Job applying for?" />
            <input type='email' placeholder="E-mail Address" />
        </div>
        <div className="input-column">
            <input type='tel' placeholder="Phone Number" />
            <input type='text' placeholder="Address / Location" />
        </div>
        <div className="input-column">
            <textarea type='text' placeholder="Description"></textarea>
        </div>
        <button onClick={handleChange}>Submit</button>    
    </>
    )
}