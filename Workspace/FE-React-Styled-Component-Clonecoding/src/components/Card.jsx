import React from 'react';
import styled from "styled-components";
import image from "../assets/images/view.jpg";

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    justify-content: space-around;
    
`;

const CardBackground = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgray;
    margin: 10px;
    padding: 17px;
    width: 350px;
`;


const Image = styled.img`
    width: 100%; 
    height: auto; 
`;

const Text = styled.p`
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const ButtonContainar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Button1 = styled.button`
    width: 45px;
    margin: 9px 0; 
    background-color: white;
    border-radius: 2px;
`;

const Button2 = styled.button`
    width: 45px;
    margin: 9px 0; 
    background-color: white;
    border-radius: 2px;
`;

const Time = styled.p`
    margin-left: auto;

`;

const Card = () => {
    const cardData = [
        {
            id: 1,
            time: "9 mins"
        },
        {
            id: 2,
            time: "9 mins"
        },
        {
            id: 3,
            time: "9 mins"
        },
        {
            id: 4,
            time: "9 mins"
        },
        {
            id: 5,
            time: "9 mins"
        },
        {
            id: 6,
            time: "9 mins"
        },
        {
            id: 7,
            time: "9 mins"
        },
        {
            id: 8,
            time: "9 mins"
        },
        {
            id: 9,
            time: "9 mins"
        },
        
    ];

    return (
        <CardContainer>
            {cardData.map((card) => (
                <CardBackground key={card.id}>
                    <Image img src={image}/>
                        <Text>This is a wider card with supporting text <br/> below as a natural lead-in to additional <br/>content. This content is a little bit longer.</Text>
                        <ButtonContainar>
                            <Button1>View</Button1>
                            <Button2>Edit</Button2>
                            <Time>{card.time}</Time>
                        </ButtonContainar>
                </CardBackground>
            ))}
        </CardContainer>
    );
};

export default Card;
