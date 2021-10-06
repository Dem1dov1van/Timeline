import React from 'react'

function Timeline({ steps, }) {

    const [stepsArr, setStepsArr] = React.useState(null)
    
   return (
    
    <div className="timeline ">
        {steps && steps.map((item)=>{
                return(
                    <div 
                        className={` timeline__item ${item.status}`}
                        key = {item.id}
                    >
                        <p 
                            className="timeline__text"
                        >
                            {item.id} step
                        </p>
                        <div className="timeline__dot"></div>
                        <div className="timeline__line">
                            <div className="timelime__progress"></div>
                        </div>
                    </div>
                )
            })}
    </div>
   )
}

export default Timeline