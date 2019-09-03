import React from "react";
import Adapter from "enzyme-adapter-react-16";
import enzyme, { shallow } from "enzyme";
import DisplayData from "./DisplayData";

describe("displayData", () => {
    enzyme.configure({ adapter: new Adapter() });

    const errorMessage = "**** ERROR ****";
    const successResult = "Some data";
    const getSuccess = jest.fn(() => Promise.resolve(successResult));
    const getFail = jest.fn(() => Promise.reject(new Error()));

    it("should display the string returned from the get function", async () => {
        const wrapper = shallow(<DisplayData get={getSuccess} />);
        const displayDivBeforeClick = wrapper.find(".display");
        expect(displayDivBeforeClick.exists()).toBe(false);

        const getButton = wrapper.find("button");
        getButton.simulate("click");

        return new Promise(resolve => setImmediate(resolve)).then(() => {
            const displayDivAfterClick = wrapper.find(".display");

            expect(displayDivAfterClick.exists()).toBe(true);
            expect(displayDivAfterClick.text()).toEqual(successResult);
        });
    });

    it("should display an error when the get function fails", async () => {
        const wrapper = shallow(<DisplayData get={getFail} />);
        const displayDivBeforeClick = wrapper.find(".display");
        expect(displayDivBeforeClick.exists()).toBe(false);

        const getButton = wrapper.find("button");
        getButton.simulate("click");

        return new Promise(resolve => setImmediate(resolve)).then(() => {
            const displayDivAfterClick = wrapper.find(".display");

            expect(displayDivAfterClick.exists()).toBe(true);
            expect(displayDivAfterClick.text()).toEqual(errorMessage);
        });
    });
});
