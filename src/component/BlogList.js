import React, {useState} from "react";
import BlogItem from "./BlogItem";

function BlogList({blogList,onDelete,onEdit}){
  return(
    <div className="blogList">
      <h2>BLOG List</h2>
      <h3>{blogList.length}개의 글이 있습니다.</h3>
      <div>
        {blogList.map(item => (
          /*<div key = {item.id}>
            <div>제목 : {item.title}</div>
            <div>작성자 : {item.author}</div>
            <div>평점 : {item.grade}</div>
            <div>내용 : {item.content}</div>
            <div>작성시간 : {item.date}</div>
          </div>*/
          <BlogItem key = {item.id} {...item} onDelete={onDelete} onEdit={onEdit}></BlogItem>
        ))}
      </div>
    </div>
  )
}
export default BlogList;