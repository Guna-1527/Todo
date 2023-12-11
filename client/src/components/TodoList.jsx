import "./Todolist.css";
import axios from "axios";
import { PropTypes } from "prop-types";

const TodoList = ({task, id}) => {
    console.log(id);
    

    const HandleDelete = () => {
        axios.delete(`https://todo-server-eight-liard.vercel.app/${id}`)
        .then(() => {
            window.location.reload();
        })
    }

    return (
        <div className="">
                <div>
                    <div className="TodoContainer">
                        <div className="TodoContainerLeft">
                            <p className="TodoContent">{task}</p>
                        </div>
                        <div className="TodoContainerRight">
                            <div onClick={HandleDelete}>
                            <img className="deleteIcon" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

TodoList.propTypes = {
    task: PropTypes.string,
    id: PropTypes.string,
  };

export default TodoList;
