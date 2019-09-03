import React from "react";
import { cleanup, fireEvent, render, waitForElement } from "@testing-library/react";
import DisplayData from "./DisplayData";

describe("DisplayData", () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    const errorMessage = "**** ERROR ****";
    const successResult = "Some data";
    const getSuccess = jest.fn(() => Promise.resolve(successResult));
    const getFail = jest.fn(() => Promise.reject(new Error()));

    it("should display the string returned from the get function", async () => {
        const { getByLabelText, queryByLabelText } = render(<DisplayData get={getSuccess} />);

        const labelBeforeGet = queryByLabelText(/display/i);
        expect(labelBeforeGet).toBeNull();

        const button = getByLabelText(/get data/i);
        fireEvent.click(button);

        const labelAfterGet = await waitForElement(() => queryByLabelText(/display/i));

        expect(labelAfterGet.textContent).toEqual(successResult);
    });

    it("should display an error when the get function fails", async () => {
        const { getByLabelText, queryByLabelText } = render(<DisplayData get={getFail} />);

        const labelBeforeGet = queryByLabelText(/display/i);
        expect(labelBeforeGet).toBeNull();

        const button = getByLabelText(/get data/i);
        fireEvent.click(button);

        const labelAfterGet = await waitForElement(() => queryByLabelText(/display/i));

        expect(labelAfterGet.textContent).toEqual(errorMessage);
    });
});
