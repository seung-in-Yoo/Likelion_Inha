import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const NotfoundPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


const Notfound = () => {
    const navigate = useNavigate()
    return (
        <div>
        <NotfoundPage>
            <h2>멋쟁이 사자가 당신을 기다리고 있습니다</h2>
            <img src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202001/01/e5472ff3-f2f2-415f-ae8a-95ede4a81109.jpg" alt="Lions"/>
            <p>어흥..</p>
            <button onClick={()=> navigate(-1)}>뒤돌아서 도망가기!</button>
        </NotfoundPage>
        </div>
    );
};

export default Notfound;