import React from "react";

import { StyledInput } from "./StyledInput";

export interface ITextInputProps {
	id: string;
	name: string;
	value: string;
	onChange: (e: any) => void;
}

export const TextInput = (props: ITextInputProps) => {
	return <StyledInput {...props} />;
};
