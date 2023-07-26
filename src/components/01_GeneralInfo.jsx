export default function GeneralInfo ({genInfo, setGenInfo, setGenInfoOut}) {

    const handleChange = (e) => 
    {
        switch (e.target.name){
            case 'firstName':
                setGenInfo({...genInfo, firstName: e.target.value})
                break;
            case 'lastName':
                setGenInfo({...genInfo, lastName: e.target.value})
                break;
            case 'job':
                setGenInfo({...genInfo, job: e.target.value})
                break;
            case 'email':
                setGenInfo({...genInfo, email: e.target.value})
                break;
            case 'phoneNum':
                setGenInfo({...genInfo, phoneNum: e.target.value})
                break;
            case 'location':
                setGenInfo({...genInfo, location: e.target.value})
                break;
            case 'desc':
                setGenInfo({...genInfo, desc: e.target.value})
                break;

        }
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setGenInfoOut(genInfo);
    }

    return (
    <div className="input-area">
        <div className="input-column">
            <input type='text' name='firstName' placeholder="First Name..." onChange={handleChange} />
            <input type='text' name='lastName' placeholder="Last Name..."  onChange={handleChange} />
        </div>
        <div className="input-column">
            <input type='text' name='job' placeholder="Position / Job applying for?" value={genInfo.job} onChange={handleChange} />
            <input type='email'  name='email' placeholder="E-mail Address"  value={genInfo.email} onChange={handleChange} />
        </div>
        <div className="input-column">
            <input type='tel' name='phoneNum' placeholder="Phone No." style={{width: '35%'}} value={genInfo.phoneNum} onChange={handleChange} />
            <input type='text' name='location' placeholder="Address / Location" value={genInfo.location} onChange={handleChange}/>
        </div>
        <div className="input-column">
            <textarea type='text' name='desc' placeholder="Description" value={genInfo.desc} onChange={handleChange}></textarea>
        </div>
        <button onClick={handleSubmit}>Submit</button>
    </div>
    )
}