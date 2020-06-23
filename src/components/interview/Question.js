import React from 'react'

const Question = (props) => {
  return (
     <div>
       <form>
           <div className="form-group green-border w-50">
           <label htmlFor="exampleFormControlTextarea5 " >Question{props.question.id}</label>
           <textarea className="form-control" id="exampleFormControlTextarea5" rows="3" value={props.question.body} disabled></textarea>
           </div>
       </form>
     </div>
      )
}

export default Question
