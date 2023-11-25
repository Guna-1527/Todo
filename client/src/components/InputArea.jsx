import { useState } from "react"
import "./Inputarea.css"
import axios from "axios";
import { PropTypes } from "prop-types";

const InputArea = () => {

  const [Input, SetInput] = useState("");


  const AddTask = () => {
    axios.post("todo-server-eight-liard.vercel.app/add-task", {
      task: Input
    }).then(() => {
      SetInput("")
      window.location.reload();
    })
  }

  return (
    <div className="InputContainer">
        <input type="text" value={Input} onChange={(e) => SetInput(e.target.value)}/>
        <button onClick={AddTask} className="btn-add">Add</button>
    </div>
  )
}

InputArea.propTypes = {
  UpdateTask: PropTypes.string
};

export default InputArea
