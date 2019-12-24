import React,{Component, Fragment} from 'react';

class TodoList extends Component{
    constructor(props){
        super();
        this.state={
            inputValue:'',
            list:[]
        }
    }
    handleInputChange = e =>{
        this.setState({
            inputValue:e.target.value,
        })
        // this.Setstate.inputValue = e.target.value;
        console.log(e.target.value);
    }
    render() {
        return(
            <Fragment>
                <div>
                    <input
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    />
                    <button>提交</button>
                </div>
                <ul>
                    <li>英语</li>
                    <li>语文</li>
                    <li>数学</li>
                    <li>大数据</li>
                    <li>Java</li>
                </ul>
            </Fragment>
            
        )
    }
}
export default TodoList;