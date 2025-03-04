import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import Card from "../components/Card";
import styled from "styled-components";




const Cardscontainer = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px; 
    margin-bottom: 20px;
    max-width: 600px; 
`

const Home = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=> {
        axios
            .get(`https://reqres.in/api/users?page=1&per_page=9`)
            .then((res)=> {
                setUsers(res.data.data);
            })
            .catch((e)=> {
                console.log(e);
            });
    },[]);
    return (
        <> 
            <h1>User List </h1>
            <Cardscontainer>
                {users.map(user=>(
                    <Card key={user.id} id={user.id} img={user.avatar} name={`${user.first_name} ${user.last_name}`}/>
                ))}
            </Cardscontainer>
            
            <Link to="/Menu">메뉴 페이지로 이동</Link>
        </>
    );
};

export default Home;

