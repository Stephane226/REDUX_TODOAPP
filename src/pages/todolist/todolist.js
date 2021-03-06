// IMPORT DEPENDENCIES
import React, {useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import { deleteListService, creerListStatusCancel,viewİtem,writeİtem } from "../../actions/todo/todo";


//INPORT CSS
import classes from '../../assets/css/todolist.module.css';

const Todolist = () => {

    
 
    const dispatch = useDispatch()
    const todolist = useSelector(state => state.TodoReducer.todolist);

    useEffect(() => {
        dispatch(creerListStatusCancel())
       
    }, []);


    const handleDelete = (item) => {
        const dataId = item.id
      
        dispatch(deleteListService(dataId))
        
    }

    const seeİtem = (item)=>{
        const  itemİd = item.id
      dispatch(viewİtem(itemİd))
    }

    
    const editİtem = (item)=>{
        const  itemİd = item.id
    dispatch(writeİtem(itemİd))
    }


    let list = todolist.map((item,index)=>{
        return(
            
            <div  key={index} className={classes.Container_bar_container}>
            <div className={classes.Container_text_container}>
                <div className={classes.container_text}>
                    <p>{item.nom}</p>
                </div>
                <div className={classes.container_text}>
                    <p>{item.prenom}</p>
                </div>
                <div className={classes.container_text}>
                    <p>{item.age}</p>
                </div>
            </div>
            <div className={classes.Container_button_container}>
                <div className={classes.container_button} onClick={()=>handleDelete(item)}>
                    <p  >Supprimer</p>
                </div>
                <div className={classes.container_button}>
                <p> <Link to="/editer" onClick={()=> editİtem(item)}> Editer</Link></p>
                </div>
                <div className={classes.container_button}>
                    <p> <Link to="/voir" onClick={()=>seeİtem(item)}> Voir</Link></p>
                </div>
            </div>
        </div>
        )
    })

    return (
        <div className={classes.Container}>
            <div className={classes.Container_todo_container}>
                <h2>Todo App</h2>
                <Link to="/creer-list" className={classes.creer} >Creer</Link>
            </div>
           {list}
        </div>
    )
}

export default Todolist;
