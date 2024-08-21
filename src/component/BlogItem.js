import React, { useState , useRef} from "react";

function BlogItem({id,author,title,content,grade,postDate,date,onDelete,onEdit}) {
  // 현재 상태가 수정 상태인지 아닌지 판단하는 변수
  const [isEdit, setIsEdit] = useState(false)
  // 새로운 컨텐츠 안에 새로운 데이터를 기억하는 변수
  const [editContent, setEditContent] = useState(content)

  const contentInput = useRef()

  const toggleEdit = () =>  setIsEdit(!isEdit) ;
  
  // 수정 취소를 클릭 -> 원래의 데이터로 변경 + 수정 이전 상태로 변경(false)
  const handleQuitEdit = () => {
    setEditContent(content);
    setIsEdit(false);
  }

  // 수정 완료를 클릭했을때 수정하는 함수
  const handleEdit = () => {
    if(editContent.length<5){
    //alert("본문 내용은 최소 5글자 이상 입력해주세요")
     contentInput.current.focus();
     return false;
   }
    onEdit(id, editContent)
    toggleEdit();
    alert(`${id}번째 글이 수정되었습니다.`)
  }

  const handleDelete = () => {
    if(window.confirm(`${id}번째 블로그글을 삭제하시겠습니까?`)){
      onDelete(id);
    }
  };

  return (
  <div key={id} className="blogItem">
    <div className="info">
      <p><span>제목 : {title}</span></p>
      <p><span>작성자 : {author} | 평점 : {grade}</span></p>
      <p className="date">{new Date(date).toLocaleString()}</p>
    </div>
    <div>
      {
        isEdit?<>
          <textarea ref={contentInput} value={editContent} onChange={(e)=>setEditContent(e.target.value)}></textarea>
        </>:<>
          <p><span><strong>내용 : {content}</strong></span></p>
        </>
      }
      </div>
      {
        isEdit?<>
        <button className="btn2" onClick={handleQuitEdit}>수정취소</button>
        <button className="btn2" onClick={handleEdit}>수정완료</button>
        </>:<>
        <button className="btn2" onClick={handleDelete}>삭제하기</button>
        <button className="btn2" onClick={toggleEdit}>수정하기</button>
        </>
      }
    
  </div>
  )
}

export default BlogItem;
