import styled from "styled-components";

export const StyledInput = styled.input`
	width: 100%;
	display: block;
	padding: 7px;
	font-size: 18px;
	background-color: #efefef;
	border-radius: 3px;
	box-sizing: border-box;
	border: 3px solid gray;
	outline: none;

	&:hover,
	&:focus {
		border: 3px solid blue;
	}
`;
