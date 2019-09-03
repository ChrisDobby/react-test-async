import { act } from "react-dom/test-utils";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import enzyme, { mount } from "enzyme";
import TimerMessage from "./TimerMessage";

it("should show a hello message", () => {
    enzyme.configure({ adapter: new Adapter() });
    jest.useFakeTimers();

    const wrapper = mount(<TimerMessage />);

    const whenMounted = wrapper.text();
    expect(whenMounted).toBe("");

    act(() => jest.runAllTimers());

    const afterTimer = wrapper.text();
    expect(afterTimer).toBe("Hello");
});
