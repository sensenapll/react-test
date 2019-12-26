import React,{Component, Fragment} from 'react';
import './index.css';
import TodoItem from './TodoItem'
class TodoList extends Component{
    constructor(props){
        super();
        this.state={
            inputValue:'',
            list:[]
        }
    }
    // 获取input框的值
    handleInputChange = e =>{
        // 因为setState是异步，所有要将值在改变之前存储起来
        const value = e.target.value;
        this.setState(()=>({
            inputValue:value
        }))
        // this.Setstate.inputValue = e.target.value;
        // console.log(e.target.value);
    }
    // 提交事件
    handleBtnOnclick =()=>{
        // 重新改变值
        // setState中有一个参数PrevState,是改变之前的值，相当于this.state
        this.setState((PrevState)=>({
            list:[...PrevState.list,PrevState.inputValue],
            // 提交之后input清空
            inputValue:''
        }));
    }
    // 点击删除事件
    // index每个li的下标
    handleItemDelete = index =>{
        // 将list的值重新拷贝一份
        const list = [...this.state.list]
        // 删除每一个li
        list.splice(index,1)
        // 重新渲染li
        this.setState(()=>({
            list
        }));
    }
    // 渲染列表方法
    getTodoItem = ()=>{
       return this.state.list.map((item,index)=>{
            // 因为要遍历数组，需要设置唯一标识key(暂时设置index下标)
            return (
                /** 
                 * 父组件通过属性content向子组件传item值,index下标
                */
                <TodoItem
                    key={index}
                    content={item}
                    index={index}
                    // 将handleItemDelete方法通过属性的方式传给子组件
                    ItemDelete={this.handleItemDelete}
                />                                    
                /*
                // 将下标index作为参数传入handleItemDelete中
                <li key={index} onClick={this.handleItemDelete.bind(this,index)}>{item}</li>
                */   
            )
        })
    }
    render() {
        return(
            <Fragment>
                <div>
                    <label>输入内容</label>
                    <input
                    className='input'
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnOnclick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
            
        )
    }
}
export default TodoList;