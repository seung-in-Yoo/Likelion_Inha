import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";
import Card from '../components/Card';
import { Link } from 'react-router-dom';


const CardsContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: -90px;
    text-decoration: none;
`;
const StyleLink = styled(Link)`
    text-decoration: none;
    color:black;
`;

const MainPage = () => {
    
    const [images,setImages] = useState([]);
    
    useEffect(()=> {
        axios
            .get("http://3.36.127.43:8080/imageAll")
            .then((res)=> {
                setImages(res.data);
            })
            .catch((e)=>{
                console.log(e);
            });
    },[] );
    return (
        <div>
            <CardsContainer>
                <CardContainer>
                {images.slice(0,3).map(image=>(
                    <StyleLink key = {image.id} to={`/detail/${image.id}`}>
                        <Card key={image.id} id={image.id} img={image.imageURL} name={image.imageName} text={image.imageText}/>
                    </StyleLink>
                ))}
                </CardContainer>
                <CardContainer>
                {images.slice(3,6).map(image=>(
                    <StyleLink key = {image.id} to={`/detail/${image.id}`}>
                        <Card key={image.id} id={image.id} img={image.imageURL} name={image.imageName} text={image.imageText}/>
                    </StyleLink>
                ))}
                </CardContainer>
                <CardContainer>
                {images.slice(6,8).map(image=>(
                    <StyleLink key = {image.id} to={`/detail/${image.id}`}>
                        <Card key={image.id} id={image.id} img={image.imageURL} name={image.imageName} text={image.imageText}/>
                    </StyleLink>
                ))}
                </CardContainer>
            </CardsContainer>
        </div>
    );
};

export default MainPage;