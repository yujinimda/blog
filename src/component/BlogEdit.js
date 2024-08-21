import React,{useState,useRef} from 'react'

function BlogEdit({onCreate}) {
  // const [title,setTitle] = useState('');
  // const [content,setContent] = useState('');
  // state변수를 객체로 묶어서 return한다
  const [state,setState] = useState({
    title:'',
    author:'',
    content:'',
    grade:1,
  });

  const titleInput = useRef()
  const authorInput = useRef()
  const contentInput = useRef()

  const handleChange = (e)=>{
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = ()=>{
    if(state.title.length<1){
      //alert("제목은 최소 1글자 이상 입력해주세요");
      titleInput.current.focus()
      return false;
    }
    if(state.author.length<1){
       //alert("작성자은 최소 1글자 이상 입력해주세요");
      authorInput.current.focus();
      return false;
    }
    if(state.content.length<5){
      // alert("본문 내용은 최소 5글자 이상 입력해주세요")
      contentInput.current.focus();
      return false;
    }
    console.log(state)
    onCreate(state.title, state.author, state.content, state.grade , state.date, state.id);
    alert("저장되었습니다")
    // 초기화
    setState({
      title:"",
      author:"",
      content:"",
      grade:1,
    })
  }

  return (
    <div className="blogEdit">
      <h2>오늘의 Blog</h2>
      <div>
        <input ref={titleInput} type="text" name="title" value={state.title}  placeholder='제목을 입력하세요' onChange={handleChange}/>
      </div>
      <div>
        <input ref={authorInput} type="text" name="author" value={state.author} onChange={handleChange} placeholder='작성자를 입력해주세요'/>
      </div>
      <div>
        <textarea ref={contentInput} name="content" value={state.content} placeholder="내용을 입력해주세요" onChange={handleChange}></textarea>
      </div>
      <div>
        평점:
        <select name="grade" value={state.grade} onChange={handleChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          </select>
      </div>
      <div>
        <button onClick={handleSubmit}>저장하기</button>
      </div>
    </div>
  )
}

export default BlogEdit