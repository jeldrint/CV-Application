import { useState } from 'react'
import './styles/App.css'
import GeneralInfo from './components/01_GeneralInfo'
import EducExp from './components/02_Experience'

function App() {
  const [genInfo, setGenInfo] = useState({name: '', job: '', email: '', phoneNum: '', location: '', desc: ''})
  const [educExp, setEducExp] = useState({school: '', course: '', yrStart: '', yrEnd: '', location: ''})
  const [workExp, setWorkExp] = useState({name: '', job: '', email: '', phoneNum: '', location: '', desc: ''})

  return (
    <>
      <div className="container">
        <main className='main'>
          <form className='input-container'>
            <legend>General Information</legend>
            <GeneralInfo genInfo={genInfo} setGenInfo={setGenInfo} />
            <hr />
            <legend>Educational Experience</legend>
            <EducExp educExp={educExp} setEducExp={setEducExp} />
            <hr />
            <legend>Work Experience</legend>
            <EducExp workExp={workExp} setWorkExp={setWorkExp} />
            <hr />
          </form>
          <section className='output-container'>2</section>
        </main>
        <footer className='footer'>2023 {String.fromCharCode(169)} jeldrint | Icons by{' '}
          <a href='https://icons8.com/' target='_blank'>Icons8</a>
        </footer>    
      </div>
    </>

  )
}

export default App
