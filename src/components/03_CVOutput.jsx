import Icon1 from '../images/mail.png'
import Icon2 from '../images/phone.png'
import Icon3 from '../images/location.png'

export default function CVOutput (props) {
    return(
        <>
            <div className='output-header'>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <span style={{color:'navy', fontFamily:'Playfair Display SC', fontSize: '36px', fontWeight:'400'}}>
                        {props.genInfoOut.firstName} <b>{props.genInfoOut.lastName}</b>
                    </span>
                    <span style={{fontFamily:'Playfair Display SC', fontSize: '21px', fontWeight:'400'}}>
                        <b>{props.genInfoOut.job}</b>
                    </span>
                </div>
                <div className='contact-details'>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'flex-end', columnGap:'2px'}}>
                        <span style={{fontSize:'10px'}}>{props.genInfoOut.email}</span>                
                        <img src={Icon1} style={{width:'20px'}}/>
                    </div>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'flex-end', columnGap:'2px'}}>
                        <span style={{fontSize:'10px'}}>{props.genInfoOut.phoneNum}</span>                
                        <img src={Icon2} style={{width:'20px'}} />
                    </div>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'flex-end', columnGap:'2px'}}>
                        <span style={{fontSize:'10px'}}>{props.genInfoOut.location}</span>                
                        <img src={Icon3} style={{width:'20px'}} />
                    </div>
                </div>
            </div>
            <hr />
            <p>{props.genInfoOut.desc}</p>
        
        </>
    )
}