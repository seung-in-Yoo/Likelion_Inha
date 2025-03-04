import React from 'react';
import { styled } from 'styled-components';



const CardContainer = styled.div`
    width: 200px;
    margin: 5px;
    padding-top: 100px;
`

const CardImage = styled.img`
    width:100%;
    height: 200px;
    
`

const CardContent = styled.div`
    padding:5px;
`
const CardTitle = styled.div`
    margin: 0 0 5px 0;
`
const CardText = styled.div`
    font-size: 1em;
`

const Card = ({img, name, text}) => {
    return (
        <div>
            <CardContainer>
                <CardImage src={img} alt={name}/>
                <CardContent>
                    <CardTitle><h3>{name}</h3></CardTitle>
                    <CardText>{text}</CardText>
                </CardContent>
            </CardContainer>
            
        </div>
    );
};

export default Card;