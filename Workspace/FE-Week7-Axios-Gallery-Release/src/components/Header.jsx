import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import styled from "styled-components";


const Profile = styled.div`
    display: flex;
    margin-left: 480px;
    margin-top: 70px;
    flex-direction: column;
    width: 150px;
    height: 70px;
    
`

const LionText = styled.div`
    width: 470px;
    height: 70px;
    margin-left: 170px;
    margin-top: -160px;
`

const Header = () => {
    const [number,setNumber ] = useState('');

    useEffect(()=> {
        axios
            .get("http://3.36.127.43:8080/imageSize")
            .then((res)=> {
                setNumber(res.data);
                console.log(res);
            })
            .catch((e)=>{
                console.log(e);
            });
    },[] );

    return (
        <div>
        <Profile>
            <img src="https://avatars.githubusercontent.com/u/126320676?s=200&v=4" alt='Lions'></img>
            <LionText>
            <h2>likelion_12th_frontend</h2>
            <p>멋쟁이사자처럼 12기 여러분 화이팅! 어른사자로 폭풍성장중..🦁</p>
            <p>게시물 {number}개</p>
            </LionText>
        </Profile>
        </div>
    );
};

export default Header;