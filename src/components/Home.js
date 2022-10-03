import { Store } from 'react-notifications-component';

function Home() {

    const handleOnClickDefault = (buttonType) => {
        const notification = {
            title: "Wonderful!",
            message: "success on top right",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                showIcon: true,
                onScreen: true
            }
        };
        switch (buttonType) {
            case "success":
                Store.addNotification({
                    ...notification,
                    message: "success on top right",
                    type: "success",

                })
                break;

            case "danger":
                Store.addNotification({
                    ...notification,
                    message: "danger on top right",
                    type: "danger",
                });
                break;
            case "default":
                Store.addNotification({
                    ...notification,
                    message: "default on top right",
                    type: "default",
                });
                break;

            case "info":
                Store.addNotification({
                    ...notification,
                    message: "info on top right",
                    type: "info",
                });
                break;

            case "warning":
                Store.addNotification({
                    ...notification,
                    message: "warning on top right",
                    type: "warning",
                });
                break;

            default:
                return false;
        }

    };

    return (
        <div>

            <p>Type can be set from predefined values success, default, warning, info, danger or custom to suit your needs</p>

            <button className="button" onClick={() => handleOnClickDefault("success")} >
                Success
            </button>
            <button className="button" onClick={() => handleOnClickDefault("danger")}>
                Danger
            </button>
            <button className="button" onClick={() => handleOnClickDefault("default")}>
                Default
            </button>
            <button className="button" onClick={() => handleOnClickDefault("info")}>
                Info
            </button>
            <button className="button" onClick={() => handleOnClickDefault("warning")}>
                Warning
            </button>
        </div>
    )
}
export default Home;
