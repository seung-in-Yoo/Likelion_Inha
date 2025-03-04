import React from "react";
import styled from "styled-components";


const Textbanner = styled.div`
    display: flex;
    width: 100%;
    margin:200px;
    text-align: center;
    justify-content: center;
`

const Texttitle = styled.div`
    text-align: center;
    justify-content: center;
    color: black;
    margin-top: -70px;
    margin-left: 300px;
    margin-bottom: 10px;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
const Textmain = styled.div`
    display:flex;
    justify-items: center;
    text-align: center;
    margin-top: 20px;
    position: relative;
    left:-400px;
    
`;

const Buttons = styled.div`
    display: inline-block;
    text-align: center;
    padding-top: 70px;
    position: relative;
    right: 780px;
    top: 10px;
`

const Button1 = styled.button`
    display: inline-block;
    position: relative;
    font-size: 18px;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 30px;
    background-color: #007bff;
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
    height:40px;
    color: white;
`;

const Button2 = styled.button`
    display: inline-block;
    position: relative;
    font-size: 18px;
    padding-left: 10px;
    border-radius: 5px;
    margin-top: 40px;
    left: 5px;
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
    height:40px;
    background-color: darkgray;
    color: white;
`;

const Center = () => {
    return (
    <Textbanner>
        <Texttitle>
            <h1>Album example</h1>
        </Texttitle>
        <Textmain>
        Something short and leading about the collection below-its contents,<br/>
        the creator, etc. Make it short and sweet, but not too short so folks <br/>
                            don't simply skip over it entriely.
        </Textmain>
        <Buttons>
        <Button1>
        Main call to action
        </Button1>
        <Button2>
        Secondary action
        </Button2>
        </Buttons>
    </Textbanner>
        
    );
};

export default Center;