import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../../data/constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

const Wrapper = styled.div`
    max-width: 1100px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 12px;
`;

const Title = styled.h1`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
    color: ${({theme})=>theme.text_primary};

    @media (max-width: 768px){
        margin-top: 12px;
        font-size: 32px;

    }
`

const Desc = styled.div`
    font-size: 18px;
    max-width: 600px;
    text-align: center;
    color: ${({theme})=>theme.text_secondary};

    @media (max-width: 768px){
        font-size: 16px;
    }
`;

const ToggleGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({theme})=>theme.primary};
    color: ${({theme})=>theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0;

    @media (max-width: 768px){
        font-size: 12px;
    }
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    cursor: pointer;
    border-radius: 6px;
    
    ${({active, theme})=>
        active &&
        `
        background-color: ${theme.primary+20};
        `
}
    &:hover{
        background-color: ${({theme})=>theme.primary+8}
    }
    
    @media (max-width: 768px){
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

const Divider = styled.div`
    width: 1.5px;
    background-color: ${({theme})=>theme.primary};
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 28px;

`;

const Projects = () =>{
    const [toggle, setToggle] = useState("all");
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    Here are some of my skills on which I have been working on for the past 2 years.
                </Desc>
                <ToggleGroup>
                    {toggle === "all" ? (
                    <ToggleButton active value="all" onClick={()=>setToggle("all")}>All</ToggleButton>
                    ):(
                        <ToggleButton value="all" onClick={()=>setToggle("all")}>All</ToggleButton>
                    )}
                    <Divider />
                    {toggle ==="web app"? (
                        <ToggleButton active onClick={()=>setToggle("web app")}>Web App</ToggleButton>
                    ):(
                        <ToggleButton onClick={()=>setToggle("web app")}>Web App</ToggleButton>
                    )}
                    <Divider/>
                    {toggle === "android app" ?(
                        <ToggleButton active onClick={()=>setToggle("android app")}>Android App</ToggleButton>
                    ):(
                        <ToggleButton onClick={()=>setToggle("android app")}>Android App</ToggleButton>
                    )}
                    <Divider/>
                    {toggle ==="machine learning"?(
                        <ToggleButton active onClick={()=>setToggle("machine learning")}>Machine Learning</ToggleButton>
                    ):(
                        <ToggleButton onClick={()=>setToggle("machine learning")}>Machine Learning</ToggleButton>

                    )}
                </ToggleGroup>
                <CardContainer>
                    {toggle === "all" && projects.map(project => <ProjectCard project ={project} /> )}
                    {projects.filter((item) =>item.category === toggle)
                    .map((project)=>(
                        <ProjectCard project={project}/>
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )

}

export default Projects;