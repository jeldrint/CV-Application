import Icon1 from '../images/mail.png'
import Icon2 from '../images/phone.png'
import Icon3 from '../images/location.png'
import { useEffect, useState } from 'react'

export default function CVOutput (props) {
    useEffect(()=>{
        //console.log(props.workExpOut)
    },[props.workExpOut])

    const handleRemoveWorkExp = (e) => {
        if(e.target.parentNode.parentNode.className === 'output-work-exp'){
            props.setWorkExpOut(details=>
                details.filter((item,index)=>e.target.parentNode.id != index)
            )
        }
        if(e.target.parentNode.parentNode.className === 'output-educ-exp'){
            props.setEducExpOut(details=>
                details.filter((item,index)=>e.target.parentNode.id != index)
            )
        }
    }
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
                        <span style={{fontSize:'10px', textAlign:'right'}}>{props.genInfoOut.email}</span>                
                        <img src={Icon1} style={{width:'20px'}}/>
                    </div>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'flex-end', columnGap:'2px'}}>
                        <span style={{fontSize:'10px', textAlign:'right'}}>{props.genInfoOut.phoneNum}</span>                
                        <img src={Icon2} style={{width:'20px'}} />
                    </div>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'flex-end', columnGap:'2px'}}>
                        <span style={{fontSize:'10px', textAlign:'right'}}>{props.genInfoOut.location}</span>                
                        <img src={Icon3} style={{width:'20px'}} />
                    </div>
                </div>
            </div>
            <div className='output-header-description'>{props.genInfoOut.desc}</div>

            <hr />
            <div className='output-work-exp'>
                <span style={{fontFamily:'Varela Round', fontSize: '21px', fontWeight:'400'}}>Work Experience</span>
                    {props.workExpOut.map((workItem,index)=>
                        <>
                            <ul className='work-exp-ul' key={index} id={index}>
                                <button className='remove-btn' onClick={handleRemoveWorkExp}>Remove</button>
                                <div>
                                    <li style={{fontSize:'18px', fontWeight:'700', listStyleType:'none'}}>{workItem.jobTitle} ({workItem.yrStart} to {workItem.yrEnd})</li>
                                    <li style={{fontSize:'16px', fontWeight:'400', listStyleType:'none'}}>{workItem.address}</li>
                                    <ul style={{fontSize: '14px'}}>
                                        <li>{workItem.desc}</li>
                                    </ul>
                                </div>
                            </ul>
                        </>
                    )}
            </div>
            <hr />
            <div className='output-educ-exp'>
                <span style={{fontFamily:'Varela Round', fontSize: '21px', fontWeight:'400'}}>Educational Background</span>
                    {props.educExpOut.map((educItem,index)=>
                        <>
                            <ul className='work-exp-ul' key={index} id={index}>
                                <button className='remove-btn' onClick={handleRemoveWorkExp}>Remove</button>
                                <div>
                                    <li style={{fontSize:'18px', fontWeight:'700', listStyleType:'none'}}>{educItem.school} ({educItem.yrStart} to {educItem.yrEnd})</li>
                                    <li style={{fontSize:'16px', fontWeight:'400', listStyleType:'none'}}>{educItem.course}</li>
                                    <ul style={{fontSize: '14px'}}>
                                        <li>Address: {educItem.address}</li>
                                    </ul>
                                </div>
                            </ul>
                        </>
                    )}
            </div>
        </>
    )
}