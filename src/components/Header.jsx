import React from 'react';
import styled from "styled-components";
import camera from "../assets/images/camera.svg";
import bar from "../assets/images/bar.svg";



const Headerstyle = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 56px;
    background-color: #343a40;
    display:flex;
    flex-direction: row;
    position: fixed;
    
`;

const Camerastyle = styled.div`
    width: 25px;
    height: 25px;
    margin-left: 235px;
    margin-top: 15px;
    background-color: white;
`;

const Textstyle = styled.div`
    text-decoration: dashed;
    color: white;
    padding-left: 270px;
    margin-top: -25px;
`
const Barstyle = styled.div`
    width: 30px;
    height: 30px;
    padding-left: 1320px;
    margin-top: -23px;
    color: darkgray;
`;


const Header = () => {
    return (
        <Headerstyle>
        <header>
            <div>
            <Camerastyle>
            <img src = {camera} />
            </Camerastyle>
            <Textstyle>ALBUM</Textstyle>
            </div>
            <Barstyle>
            <img src = {bar} />
            </Barstyle>
        </header>
        </Headerstyle>
    );
};



export default Header;