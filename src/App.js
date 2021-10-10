import React from 'react'
import './App.css';
import Timeline from './components/Timeline';

function App() {

   const [steps, setSteps] = React.useState([
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
   ])
   const [currentStep, setCurrentStep] = React.useState(0)
   const [underTitle, setUnderTitle] = React.useState(false)
   const [buttonValue, setButtonValue] = React.useState(false)
   const [stepsLikeDot, setStepsLikeDot] = React.useState(false)


   const addStepHandler = () =>{
      setSteps(
         [...steps, {
            id: steps.length + 1,
            status: ''
         }]
      )
   }

   const onUnderHadler = () =>{
      setUnderTitle(!underTitle)
   }

   const onStartHandler = () =>{
      setButtonValue(!buttonValue)
      if(steps[currentStep].status === ''){
         steps[currentStep].status = 'active'
      }else if(steps[currentStep].status === 'active'){
         steps[currentStep].status = 'finish'
      }else{
         setCurrentStep(currentStep + 1)
         steps[currentStep + 1].status = 'active'
      }
      const cloneSteps = [...steps]
      setSteps(cloneSteps)
   }

   return (
      <div>
         <div className={`timeline__wrap ${stepsLikeDot ? 'step-center' : ''}`}>
            <Timeline 
               steps={steps}
               underTitle={underTitle}/>
         </div>
         <div className="timeline-controls">
            <button 
               className="toggle"
               onClick={() => setStepsLikeDot(!stepsLikeDot)}
            >
               Тип
            </button>
            <button 
               disabled={steps[steps.length - (stepsLikeDot ? 2 : 1)].status === 'finish'}
               className="start"
               onClick={onStartHandler}
            >{buttonValue ? 'Завершить выполнение' : 'Приступить к выполнению'}</button>
            
            <button 
               onClick={onUnderHadler}
            >
               Вид заголовков
            </button>
            <button 
               className="add-step"
               onClick={addStepHandler}
            >Добавить шаг</button>
         </div>
      </div>
   );
}

export default App;
