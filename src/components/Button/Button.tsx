import React from "react";
import style from "./Button.module.css";

interface IButtonProps {
	children: string;
	onClick: () => void;
}

export const Button = ({ children, onClick }: IButtonProps) => {
	return (
		<button
			data-testid="Button"
			type="button"
			className={style.button}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
