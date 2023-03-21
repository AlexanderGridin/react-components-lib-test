import React, { ReactNode } from "react";
import MuiChip from "@mui/material/Chip";

export interface IChipProps {
	children: ReactNode;
}

export const Chip = ({ children }: IChipProps) => {
	return <MuiChip label={children} />;
};
