import { useEffect, useState } from "react";
import InputArea from "../components/InputArea";
import TodoList from "../components/TodoList";
import "./tab.css";
import axios from "axios";

const Tab = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
      const FetchData = async () => {
          const data = await axios.get("https://todo-server-eight-liard.vercel.app/");
          SetData(data.data);
      };

      FetchData();
  }, []);
    return (
        <div className="tab">
            <div className="Header">Todo</div>
              <div className="Wrapper">
              {
                data.map((d,i) => (
                  <div key={i} className="">
                    <TodoList task={d.task} id={d._id} />
                  </div>
                ))
              }
              </div>
            <InputArea />
        </div>
    );
};

export default Tab;
