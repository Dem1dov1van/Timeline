import React from 'react'
import './App.css';
import Timeline from './components/Timeline';

function App() {

   
   let steps = [
      
      {
      id: 1,
      status: ''
      },
      {
      id: 2,
      status: ''
      },
      {
      id: 3,
      status: ''
      },
   ]

   
   const [stepsLikeDot, setStepsLikeDot] = React.useState(false)
   const [nextStepStart, setNextStepStart] = React.useState(false)

   const nextMove = () =>{
      setNextStepStart(!nextStepStart)

   }

   // const addStep = () =>(
   //    [...steps, 
   //       {
   //          id: steps.length + 1,
   //          status: 'default'
   //       }]
   // )

   const addStep = () =>{
      let newStep = {
         id: steps.length + 1,
         status:''
      }
      console.log(newStep);
      steps.push(newStep)
      console.log(steps);
   }

   console.log(steps);
   
   window.onload = () =>{

      const start = document.querySelector('.start')
      const finish = document.querySelector('.finish')
      // const toggle = document.querySelector('.toggle')
      const steps = document.querySelectorAll('.timeline__item')
      start.addEventListener('click', startStep)
      finish.addEventListener('click', finishStep)
      
      // toggle.addEventListener('click', ()=>{
      //    document.querySelector('.timeline').classList.toggle('step-center')
      // })
      
      let d = 0
      let f = 0
      function startStep(){
         for(let i = 0; steps.length > i; i++){
            steps[d].classList.add('active')
         }
         d++
         // steps.forEach(item => item[i].classList.add('active'))
      }
      function finishStep(){
         for(let i = 0; steps.length > i; i++){
            steps[f].classList.add('finish')
         }
         f++
         // steps.forEach(item => item[i].classList.add('finish'))
      }
   }
  return (

   <div>
      <div className={`timeline__wrap ${stepsLikeDot ? 'step-center' : ''}`}>
         <Timeline steps={steps}/>
      </div>
      <div className="timeline-controls">
         <button 
            className="start"
            onClick={nextMove}
         >start</button>
         <button 
            className="toggle"
            onClick={() => setStepsLikeDot(!stepsLikeDot)}
         >
             type
            </button>
         <button className="finish">finish</button>
         <button 
            className="add-step"
            onClick={()=>addStep()}
         >add-step</button>
      </div>
   </div>
     
   //  <div classNameName="modal">
   //    <form action="post">
   //       <h1 classNameName="modal__title">Create a new account</h1>
   //       <Input 
   //          label="Enter your name"
   //          errorMessage="Please enter a valid name"
   //          classNameNameForInput="modal__name-input"
   //          haveValue={setName}
   //          isInvalid={isInvalidName}
   //       />
   //       <Input 
   //          label="Mail"
   //          errorMessage="Please enter a valid email address"
   //          classNameNameForInput="modal__mail-input"
   //          haveValue={setMail}
   //          isInvalid={isInvalidMail}
   //       />
   //       <Input 
   //          label="Password"
   //          errorMessage="Password must contain at least 6 symbols"
   //          classNameNameForInput="modal__pass-input"
   //          type='password'
   //          haveValue={setPass}
   //          isInvalid={isInvalidPass}
   //       />
   //       <Country 
   //          choosenCountry={choosenCountry}
   //          setCountry={setCountry}
   //          countries={countries}
   //          isInvalid={isInvalidCountry}
   //          errorMessage="You must select your country"/>
   //       <Sex 
   //          errorMessage='You must select the gender'
   //          isInvalid={isInvalidSex}
   //          haveValue={setRadio}/>
   //       <Accept 
   //          haveValue={setAccept}
   //          isInvalid={isInvalidAccept}
   //          errorMessage="You must accept the policies"
   //          onChange ={setAccept}/>
   //       <Button 
   //          loading={loading}
   //          onClick={onClickSubmit}
   //          disabled={name && mail && pass && radio && accept}/>
            
   //    </form>
   // </div>
  );
}

export default App;
