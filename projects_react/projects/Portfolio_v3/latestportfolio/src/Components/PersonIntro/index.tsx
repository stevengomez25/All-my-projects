import styled from 'styled-components';
import {Bio} from '../../data/constants.js';

const PersonContainer = styled.div`

`
const LeftPersonContainer = styled.div`

`
const Title = styled.div`
    color: red;


`


const Person = () =>{
    return (
        <div id="about">
            <PersonContainer>
                <LeftPersonContainer>
                    <Title>
                        Hola! soy <br/>
                        {Bio.name}
                    </Title>
                </LeftPersonContainer>
            </PersonContainer>
        </div>
    )
}

export default Person