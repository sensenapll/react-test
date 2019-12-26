import React,{Component} from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    // 点击删除事件
    handleDeleteItem =()=>{
        // 通过props接收父组件传过来的ItemDelete方法
        // index是父组件传过来的每一项的下标
        const {ItemDelete,index} = this.props;
        ItemDelete(index);
        // this.props.ItemDelete(this.props.index)
        // console.log(this.props.index);
    }
    render() {
        const {content} = this.props;
        return(
        <div onClick={this.handleDeleteItem}>
            {/** 
             * 通过props接受父组件传过来的值content
            */}
            {content}
        </div>
        )
    }
}
// PropTypes做传入的值做属性校验
TodoItem.propTypes={
    // content属性校验，值类型为字符串
    content: PropTypes.string,
    // ItemDelete做校验，值类型为函数
    ItemDelete: PropTypes.func,
    // number做校验，值类型为number类型
    index: PropTypes.number
}
export default TodoItem;