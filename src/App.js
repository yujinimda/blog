import './App.css';
import BlogEdit from './component/BlogEdit';
import BlogList from './component/BlogList';
import {useState , useRef} from 'react';

// 가상의 데이타
/*const list = [
  {
    id:1,
    title:"이야기",
    author:"홍길동",
    content:"홍길동 이야기",
    grade:1,
    date:new Date().getTime(),
  },
  {
    id:2,
    title:"쇼핑몰",
    author:"한만종",
    content:"쇼핑몰 이야기",
    grade:3,
    date:new Date().getTime(),
  },
  {
    id:3,
    title:"react",
    author:"이젠",
    content:"React 이야기",
    grade:5,
    date:new Date().getTime(),
  },

];*/



function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(1);

  //새로운 블로그글을 추가하는 함수
  const onCreate = (title,author,content,grade) => {
    const date = new Date().getTime();
    const newItem = {
      title,
      author,
      content,
      grade,
      date,
      id : dataId.current
    }
    dataId.current += 1;
    setData([ newItem, ...data]);
  }

  //data 삭제하기
  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`)
    const newBlogList = data.filter((i)=> i.id !== targetId)
    console.log(newBlogList)
    setData(newBlogList)
  };

  //data 수정하기
  const onEdit = (targetId,newContent) => {
   console.log(`${targetId}번째 수정합니다.`) 
   setData(
    data.map((item)=> item.id === targetId? {...item,content:newContent}: item)
   )
   
  }
  return (
    <div>
      <BlogEdit onCreate={onCreate}></BlogEdit>
      <BlogList blogList={data} onDelete={onDelete} onEdit={onEdit}></BlogList>
    </div>
  );
}

export default App;
