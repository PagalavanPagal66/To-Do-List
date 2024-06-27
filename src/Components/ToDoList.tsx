import { useState , useReducer } from "react";
import './ToDoList.css'

// interface Task{
//     task:string,
//     taskList : {
//         ctask : string,
//         isdone : boolean
//     }[]
// }

// const reducer = (state : Task,action) =>{
//     switch(action.type){


//     default:
//         return state;
// }
const ToDoList = () => {

    const [taskList,setTaskList] = useState<{task:string,isdone:boolean}[]>([]);
    const [task,setTask] = useState("");

    // const [state,dispatch] = useReducer(reducer,{
    //     task : "",
    //     taskList : [
    //         {
    //             ctask : "",
    //             isdone : false
    //         }
    //     ]
    // })
    const addtask = () => {
        const newtask : string = task;
        const newstate : boolean = false;
        const newobject = 
        {
            task : newtask,
            isdone : newstate
        }  
        setTaskList([...taskList,newobject]);
        setTask("");
    }
    
    const updatetask = (e : React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    }

    const deletetask = (index : number) => {
        setTaskList(taskList.filter(
            (element :{task:string , isdone:boolean} ,i : number) => i!==index
        ))
    }

    const markdone = (index : number) => {
        let newTaskList : {task : string, isdone:boolean}[] = []
        let i : number = 0;
        for(let iterTask of taskList){
            if(index!==i){
                newTaskList.push(
                    {"task" : iterTask.task  ,
                    "isdone" : iterTask.isdone}
                )
            }
            else{
                newTaskList.push(
                    {"task" : iterTask.task,
                    "isdone" : true}
                ) 
            }
            i++;
        }
        setTaskList(newTaskList);
    }   

    const markundone = (index : number) => {
        let newTaskList : {task : string, isdone:boolean}[] = []
        let i : number = 0;
        for(let iterTask of taskList){
            if(index!==i){
                newTaskList.push(
                    {"task" : iterTask.task  ,
                    "isdone" : iterTask.isdone}
                )
            }
            else{
                newTaskList.push(
                    {"task" : iterTask.task,
                    "isdone" : false}
                ) 
            }
            i++;
        }
        setTaskList(newTaskList);
    }   

    return(
        <div className = "main-div">
            <input className="input" type="text" value = {task} placeholder="Enter task" onChange={updatetask}/>
            <button onClick={addtask}>Submit</button>
            <h1>{task}</h1>
            <ol className="order-list">
                {taskList.map(
                    (currTask :{task:string , isdone:boolean} ,index : number) =>    
                            <li className = {currTask.isdone ? "doneclass" : "undoneclass"} key={index} id={index.toString()}>
                                <span>{currTask.task}</span>
                                <button  onClick={ () => deletetask(index)}>Delete</button>
                                <button  onClick = { () => markdone(index)}>Done</button>
                                <button  onClick={ () => markundone(index)}>Undone</button>
                            </li>
                )}
            </ol>   
        </div>
    )
}
export default ToDoList;