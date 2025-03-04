import React from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import styled from 'styled-components';


const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const ImageContainer = styled.div`
    max-width: 800px;
    width: 100%;
    img {
        width: 100%;
        height: auto;
    }
`;

const CommentContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
`;
const CommentList = styled.ul`
    list-style: none;
    padding: 0;
`;
const CommentItem = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

const CommentInput = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    input {
        flex: 1;
        padding: 10px;
        margin-right: 10px;
    }
    button {
        padding: 10px 20px;
    }
`;



const DetailPage = () => {
    const {imageId} = useParams();
    const [imageInfo,setImageInfo] = useState({});
    const [comments,setComments] = useState([]);
    const [newComment,setNewComment] = useState('');

    useEffect(()=> {
        axios
            .get(`http://3.36.127.43:8080/imageAll`)
            .then((res)=> {
                const imageDetail = res.data.find(detailimage => detailimage.id === imageId);
                if (imageDetail) {
                    setImageInfo(imageDetail);
                    }
                })
            .catch((e)=> {
                console.log(e);
            });
    },[imageId]);

    useEffect(() => {
        axios
            .get(`http://3.36.127.43:8080/${imageId}/comments`)
            .then((res)=> {
                console.log('Fetched comments for images :', res.data);
                setComments(res.data);
            })
            .catch((e)=> {
                console.log(e);
            });
    },[imageId]);

    const handleAddComment = () => {
        if (newComment.trim() === '') return;
        axios
            .post(`http://3.36.127.43:8080/${imageId}/comments`,
                {
                    commentBody: newComment,
                })
            .then((res)=> {
                console.log('Added comment:', res.data);
                setComments([...comments,res.data]);
                setNewComment('');
            })
            .catch((e)=> {
                console.log(e);
            });
    };

    const handleDeleteComment = (commentId) => {
        axios
            .delete(`http://3.36.127.43:8080/${imageId}/comments/${commentId}`)
            .then(()=> {
                console.log('Deleted comment:', commentId); 
                setComments(comments.filter(comment => comment.id !== commentId));
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
        <Background>
            <h2>{imageInfo.imageName}</h2>
            <p>{imageInfo.imageText}</p>
            <ImageContainer>
                <img src={imageInfo.imageURL} alt={imageInfo.imageName}/>
            </ImageContainer>
        <CommentContainer>
            <h3>댓글 {comments.length}개</h3>
            <CommentInput>
            <input 
                type="text"
                value={newComment}
                onChange={(e)=>setNewComment(e.target.value)}
                placeholder='댓글 작성..'
            />
            <button onClick={handleAddComment}>게시</button>
            </CommentInput>
            <CommentList>
                {comments.map(comment=> (
                    <CommentItem key={comment.id}>
                        <span>{comment.commentBody}</span>
                        <button onClick={() => handleDeleteComment(comment.id)}>삭제</button>
                    </CommentItem>
                ))}
            </CommentList>
        </CommentContainer>
    </Background>
    );
};

export default DetailPage;