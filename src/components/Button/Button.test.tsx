import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "./Button";

describe("Button", () => {
	it("renders properly", async () => {
		const handleClick = jest.fn();
		const user = userEvent.setup();

		render(<Button onClick={handleClick}>Test button</Button>);

		const button = screen.getByTestId("Button");
		await user.click(button);

		expect(button).toBeInTheDocument();
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
