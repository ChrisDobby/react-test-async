import { act } from "react-dom/test-utils";
import React from "react";
import { render } from "@testing-library/react";
import TimerMessage from "./TimerMessage";

it("should show a hello message", () => {
    jest.useFakeTimers();

    const { queryByLabelText } = render(<TimerMessage />);

    const whenMounted = queryByLabelText(/message/i);
    expect(whenMounted).toBeNull();

    act(() => jest.runAllTimers());

    const afterTimer = queryByLabelText(/message/i);

    expect(afterTimer.textContent).toEqual("Hello");
});
