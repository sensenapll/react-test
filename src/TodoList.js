import React,{Component, Fragment} from 'react';

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
        this.setState({
            inputValue:e.target.value,
        })
        // this.Setstate.inputValue = e.target.value;
        console.log(e.target.value);
    }
    // 提交事件
    handleBtnOnclick =()=>{
        // 重新改变值
        this.setState({
            // 
            list:[...this.state.list,this.state.inputValue],
            // 提交之后input清空
            inputValue:''
        })
    }
    // 点击删除事件
    // index每个li的下标
    handleItemDelete (index){
        // 将list的值重新拷贝一份
        const list = [...this.state.list]
        // 删除每一个li
        list.splice(index,1)
        // 重新渲染li
        this.setState({
            list:list
        })
    }
    render() {
        return(
            <Fragment>
                <div>
                    <input
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnOnclick}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            // 因为要遍历数组，需要设置唯一标识key(暂时设置index下标)
                            return (
                                // 将下标index作为参数传入handleItemDelete中
                            <li key={index} onClick={this.handleItemDelete.bind(this,index)}>{item}</li>
                            )
                        })
                    }
                </ul>
            </Fragment>
            
        )
    }
}
export default TodoList;