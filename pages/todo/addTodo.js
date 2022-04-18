import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import tableStyles from '../common/style/table.module.css'
import { todoActions } from '../../redux/reducers/todoReducer.ts'
export default function AddTodo() {
    const [todo, setTodo] = useState({
      userid: '', task:'', completed:''
    })
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const handleChange = e =>{
      e.preventDefault()
      const{name, value} = e.target;
      setTodo({...todo, [name]: value})
    }
  return (
      <form onSubmit={ 
        e => {
          e.preventDefault()
          alert('진행1 : 일정등록')
          dispatch(todoActions.joinRequest(todo))
          setTodo({
            userid: '', task: '', completed: ''
          })
      }}>
        <table className={tableStyles.table}>
        <thead>
            <tr>
                <th colSpan={2}><h2>투두리스트</h2></th>
            </tr>
        </thead>
        <tbody>
        <tr >
                <td><label htmlFor='userid'>유저 아이디</label></td>
                <td>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          onChange={handleChange}
        />
        </td >
        </tr>
        <tr >
                <td><label htmlFor='task'>체크박스</label></td>
                <td>
                <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                onChange={handleChange}
              />
        </td >
        </tr>
        <tr >
                <td><label htmlFor='completed' >할일등록</label></td>
                <td>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          onChange={handleChange}
        />
       
        
        <button type="submit" style={{marginLeft:"20px"}}  className="btn btn__primary btn__lg">
          Add
        </button></td >
            </tr>
            <tr>
              <td>
                할일목록
              </td>
              <td>
                {data.length == 0 ? 
                <div>현재 등록된 일정이 없습니다</div>
               
                :data.map((todo) => (
                    <div key={todo.context}>
                        <div key={todo.context}></div>
                    </div>
                ))}
              </td>
            </tr>
                </tbody>
            </table>
            </form>
     
  );
}






