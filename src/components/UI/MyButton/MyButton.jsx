import React from 'react';
import styled from 'styled-components'

const MyStButton = styled.button`
  padding: 5px 15px;
  color: black;
  font-size: 14px;
  background: linear-gradient(90deg, #5a9eec, #8bc5d3, #76ece7);
  cursor: pointer;
  border: 1px solid black;
  border-radius: 30px;
`


const MyButton = (myButton) => {
	return (
		<MyStButton {...myButton}/>
	);
};

export default MyButton;