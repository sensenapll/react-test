This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 先装脚手架

npm install -g create-react-app

create-react-app 你的项目名

cd 进去

npm run start

OK 了

## React Diff算法理解

1、state数据
2、JSX模板
3、数据+模板 结合，生成真实的DOM来显示
<div id='abc'><span>hello world</span></div>
4、生成虚拟DOM,(虚拟DOM就是一个JS对象，用它来描述真实的DOM)（损耗了性能）
['div',{id:'abc'},['span',{},'hello world']]
5、state发生了变化
6、数据+模块生成新的虚拟DOM(极大提升了性能)(原因：虚拟DOM本质就是一个JS对象,JS中去比较js对象不怎么耗性能，但是比较真实的DOM会很耗性能)
['div',{id:'abc'},['span',{},'bye bye']]
7、比较原始虚拟DOM和新的虚拟DOM的区别，找到区别时span中的内容(极大提升了性能)
8、直接操作DOM，改变span中的内容
