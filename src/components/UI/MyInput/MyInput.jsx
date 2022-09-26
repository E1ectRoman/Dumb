import React from 'react';
import styled from 'styled-components'

const MyStInput = styled.input`
    width: 100%;
    padding: 15px;
    margin: 2px 0;
    border: 1px solid black;
  background: linear-gradient(90deg, #ee5c87, #f1a4b5, #d587b3);
  border-radius: 30px;
`

const MyInput = (myInput) => {
	return (
		<MyStInput  {...myInput}/>
	);
};

export default MyInput;