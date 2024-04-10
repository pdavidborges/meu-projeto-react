import { useState } from "react";
import { Task } from "../Task/Task";
import { StyledList } from "./styles";

export function List(){
    
    /*const taskList = [
        {id: 1, title: 'Pagar contas'},
        {id: 2, title: 'Fazer compras'},
        {id: 3, title: 'Estudar React'},
    ]*/

    //nome do estado, função atualizadora do estado
    const [taskList, setTaskList] = useState([]);    
    const [newTask, setNewTask] = useState('');
    
    function addTask(e){
        //console.log('Tarefa adicionada');
        e.preventDefault(); //Previnir a ação padrão do formulário

        //taskList.push({title : 'Nova tarefa', id:5});
        //...spread (espalhar)
        setTaskList([{id: new Date().getTime(), title: newTask}, ...taskList]);  
        setNewTask('');
    }

    function removeTask(id){
        //console.log(`Tarefa ${id} removida com sucesso`);

        setTaskList(
            //retorna um novo objeto com todos os itens que tem id diferente do passado no click
            taskList.filter(task => (task.id !== id))
        );
        
    }

    return(
        <StyledList>          
            {console.log(taskList)} 
            <form onSubmit={addTask}>
                <input 
                    type="text" placeholder="Digite sua tarefa" value={newTask} onChange={(e)=>setNewTask(e.target.value)}
                />
                <button type="submit" onClick={addTask} disabled={newTask === ''}> Criar</button>
            </form>

            {
                taskList.map((task) => (
                    <Task title={task.title} id={task.id} key={task.id} onRemove={removeTask} />
                ))
            }
        </StyledList>
    )
}

