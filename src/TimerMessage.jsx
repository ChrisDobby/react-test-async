import React from "react";

const TimerMessage = () => {
    const [message, setMessage] = React.useState(null);
    const timer = 2000;

    React.useEffect(() => {
        setTimeout(() => setMessage("Hello"), timer);
    }, []);

    return (
        <div>
            {message && (
                <div className="message" aria-label="Message">
                    <h3>Message after {timer}</h3>
                    {message}
                </div>
            )}
        </div>
    );
};

export default TimerMessage;
