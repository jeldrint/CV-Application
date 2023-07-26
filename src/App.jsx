import { useState } from 'react'
import './styles/App.css'
import GeneralInfo from './components/01_GeneralInfo'
import Experience from './components/02_Experience'
import CVOutput from './components/03_CVOutput'

const App = () => {
  const [genInfo, setGenInfo] = useState({firstName: '', lastName: '', job: '', email: '', phoneNum: '', location: '', desc: ''})
  const [genInfoOut, setGenInfoOut] = useState({firstName: '', lastName: '', job: '', email: '', phoneNum: '', location: '', desc: ''})
  const [educExp, setEducExp] = useState({school: '', course: '',  address: '', yrStart: '', yrEnd: '',})
  const [educExpOut, setEducExpOut] = useState({school: '', course: '',  address: '', yrStart: '', yrEnd: '',})
  const [workExp, setWorkExp] = useState({jobTitle: '', company: '', address: '',  yrStart: '', yrEnd: '', desc: ''})
  const [workExpOut, setWorkExpOut] = useState({jobTitle: '', company: '', address: '',  yrStart: '', yrEnd: '', desc: ''})

  return (
    <>
      <div className="container">
        <main className='main'>
          <form className='input-container'>
            <legend>General Information</legend>
            <GeneralInfo genInfo={genInfo} setGenInfo={setGenInfo} setGenInfoOut={setGenInfoOut} />
            <hr />
            <legend>Educational Experience</legend>
            <Experience educExp={educExp} setEducExp={setEducExp} />
            <hr />
            <legend>Work Experience</legend>
            <Experience workExp={workExp} setWorkExp={setWorkExp} />
            <hr />
          </form>
          <section className='output-container'>
            <CVOutput genInfoOut={genInfoOut}/>
          </section>
        </main>
        <footer className='footer'>2023 {String.fromCharCode(169)} jeldrint | Icons by{' '}
          <a href='https://icons8.com/' target='_blank'>Icons8</a>
        </footer>    
      </div>
    </>

  )
}

export default App
