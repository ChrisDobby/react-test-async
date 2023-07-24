import React from "react";
import PropTypes from "prop-types";

const DisplayData = ({ get }) => {
    const [display, setDisplay] = React.useState(null);

    const getData = async () => {
        try {
            const data = await get();
            setDisplay(data);
        } catch (err) {
            setDisplay("**** ERROR ****");
        }
    };
    return (
        <>
        <hr/>
            <button type="button" onClick={getData} aria-label="get data">
                Get data
            </button>
            {display && (
                <div className="display" aria-label="display">
                    <h3>{display}</h3>
                </div>
            )}
            <hr/>
        </>
    );
};

DisplayData.propTypes = {
    get: PropTypes.func.isRequired,
};

export default DisplayData;
