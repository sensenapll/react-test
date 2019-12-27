import React,{Component} from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    // 一个组件要从父组件接受参数
    // 只要父组件的render函数被重新执行了，自组件的这个生命周期函数就会被执行
    // 如果这个组件第一次存在于父组件中，不会执行
    // 如果这个组件之前存在父组件中，才会执行
    componentWillReceiveProps(){
        console.log('Child componentWillReceiveProps');   
    }
    // 当 这个组件即将被从页面中剔除的时候，会被执行
    componentWillUnmount(){
        console.log('Child componentWillUnmount');
        
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

    // 
    
    render() {
        // console.log('Child render');
        
        const {content,test} = this.props;
        return(
        <div onClick={this.handleDeleteItem}>
            {/** 
             * 通过props接受父组件传过来的值content
            */}
            {test}-{content}
        </div>
        )
    }
}
// PropTypes做传入的值做属性校验
TodoItem.propTypes={
    // rest父组件并没有传过来值
    rest: PropTypes.string.isRequired,
    // content属性校验，值类型为字符串
    content: PropTypes.oneOfType([PropTypes.number,PropTypes.array]),
    // ItemDelete做校验，值类型为函数
    ItemDelete: PropTypes.func,
    // number做校验，值类型为number类型
    index: PropTypes.number
}
// 定义默认值defaultProps
// 父组件没有给子组件传值，我们定义test的默认值
TodoItem.defaultProps={
    test:'hello world'
}
export default TodoItem;