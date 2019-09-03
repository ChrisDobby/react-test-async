import React from "react";

const TimerMessage = () => {
    const [message, setMessage] = React.useState(null);

    React.useEffect(() => {
        setTimeout(() => setMessage("Hello"), 20000);
    }, []);

    return (
        <div>
            {message && (
                <div className="message" aria-label="Message">
                    {message}
                </div>
            )}
        </div>
    );
};

export default TimerMessage;
