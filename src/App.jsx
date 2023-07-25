import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import EducExp from './components/EducExp'

function App() {
  const [genInfo, setGenInfo] = useState({name: 'John', job: '', email: '', phoneNum: '', location: '', desc: ''})
  const [educExp, setEducExp] = useState({name: 'John', job: '', email: '', phoneNum: '', location: '', desc: ''})
  const [workExp, setWorkExp] = useState({name: 'John', job: '', email: '', phoneNum: '', location: '', desc: ''})

  return (
    <div className="container">
      <section className='input-area'>
        <form className='form'>
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
      </section>
      <section className='output-area'>2</section>
    </div>
  )
}

export default App
