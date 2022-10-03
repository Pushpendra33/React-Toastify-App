import React, { useEffect, useState } from 'react'
import { Store } from 'react-notifications-component';


function Success() {

    const [randomNumber, setrandomNumber] = useState(0);

    const [notification, setNotification] = useState({
        title: "Wonderful!",
        message: "Configurable",
        insert: "top",
        container: "top-right",
        // type: ["success", "danger", "warning", "info", "default"],
        animationIn: ["animate__animated animate__fadeIn"],
        animationOut: ["animate__animated animate__fadeOut"],
        dismiss: {
            duration: 5000,
            showIcon: true,
            onScreen: true
        }

    });

    const [colorState, setColorState] = useState("");
    useEffect(() => {
        if (randomNumber === 1) {
            setColorState("success")
        }
        else if (randomNumber === 2) {
            setColorState("danger")
        }
        else if (randomNumber === 3) {
            setColorState("info")
        } else if (randomNumber === 4) {
            setColorState("default")
        } else {
            setColorState("warning")
        }

    }, [randomNumber])

    // console.log(randomNumber, "randomNumber");

    // const handleChange = () => {
    //     setNotification({
    //         ...notification,
    //         type: "success",
    //     })
    // }

    // const randomChange = () => {
    //     const random = Math.floor(Math.random() * notification.type.length)
    //     return notificaition.type[random];
    // }

    // const randomChange = () => {
    //    const randomOutput =  setNotification({ type: ["success", "danger", "warning", "info", "default"] })
    //     const random = Math.floor(Math.random() * randomOutput.length);
    //     return randomOutput = console.log(randomOutput[random]);
    // }

    // useEffect(() => {
    //     handleChange();
    // })


    const handleOnClickDefault = (buttonType, condition) => {


        setrandomNumber(Math.floor(Math.random() * 5))
        switch (buttonType) {
            case "topright":
                Store.addNotification({
                    ...notification,
                    type: condition

                }
                );
                break;

            case "topleft":
                Store.addNotification({
                    ...notification,
                    container: "top-left",
                    type: condition
                }
                );
                break;
            case "topcenter":
                Store.addNotification({
                    ...notification,
                    container: "top-center",
                    type: condition
                }
                );
                break;

            case "center":
                Store.addNotification({
                    ...notification,
                    container: "center",
                    type: condition
                }
                );
                break;

            case "bottomright":
                Store.addNotification({
                    ...notification,
                    container: "bottom-right",
                    type: condition

                }
                );
                break;

            case "bottomleft":
                Store.addNotification({
                    ...notification,
                    container: "bottom-left",
                    type: condition

                }
                );
                break;

            case "bottomcenter":
                Store.addNotification({
                    ...notification,
                    container: "bottom-center",
                    type: condition

                }
                );
                break;

            default:
                return false;
        }

    };





    return (
        <div>
            <h2>Container</h2>
            <p>Container can be set from predefined values top-left, top-right, top-center, bottom-left, bottom-right, bottom-center</p>

            <button className="button" onClick={() => handleOnClickDefault("topright", `${colorState}`)} >
                Top-Right
            </button>
            <button className="button" onClick={() => handleOnClickDefault("topleft", `${colorState}`)}>
                Top-Left
            </button>
            <button className="button" onClick={() => handleOnClickDefault("topcenter", `${colorState}`)}>
                Top-Center
            </button>
            <button className="button" onClick={() => handleOnClickDefault("center", `${colorState}`)}>
                Center
            </button>
            <button className="button" onClick={() => handleOnClickDefault("bottomright", `${colorState}`)}>
                Bottom-Right
            </button>
            <button className="button" onClick={() => handleOnClickDefault("bottomright", `${colorState}`)}>
                Bottom-Left
            </button>
            <button className="button" onClick={() => handleOnClickDefault("bottomcenter", `${colorState}`)}>
                Bottom-Center
            </button>


        </div>
    )
}
export default Success;


// import { Store } from 'react-notifications-component';


// function Success() {
// const [notification,setNotification] =  

//     const notification = {
//         title: "Wonderful!",
//         message: "Configurable",
//         type: ["success", "danger", "warning", "info", "default"],
//         insert: "top",
//         container: "top-right",
//         animationIn: ["animate__animated animate__fadeIn"],
//         animationOut: ["animate__animated animate__fadeOut"],
//         dismiss: {
//             duration: 5000,
//             showIcon: true,
//             onScreen: true
//         }
//     };

//     const handleOnClickDefault = (buttonType) => {
//         switch (buttonType) {
//             case "topright":
//                 Store.addNotification({ 
//                     ...notification,
//                     type: "danger"
//                 }
//                 );
//                 break;

//             case "topleft":
//                 Store.addNotification({
//                     ...notification,
//                     container: "top-left",
//                 }
//                 );
//                 break;
//             case "topcenter":
//                 Store.addNotification({
//                     ...notification,
//                     container: "top-center",
//                 }
//                 );
//                 break;

//             case "center":
//                 Store.addNotification({
//                     ...notification,
//                     container: "center",
//                 }
//                 );
//                 break;

//             case "bottomright":
//                 Store.addNotification({
//                     ...notification,
//                     container: "bottom-right",
//                 }
//                 );
//                 break;

//             case "bottomleft":
//                 Store.addNotification({
//                     ...notification,
//                     container: "bottom-left",
//                 }
//                 );
//                 break;

//             case "bottomcenter":
//                 Store.addNotification({
//                     ...notification,
//                     container: "bottom-center",
//                 }
//                 );
//                 break;

//             default:
//                 return false;
//         }

//     };

//     return (
//         <div>
//             <h2>Container</h2>
//             <p>Container can be set from predefined values top-left, top-right, top-center, bottom-left, bottom-right, bottom-center</p>

//             <button className="button" onClick={() => handleOnClickDefault("topright")} >
//                 Top-Right
//             </button>
//             <button className="button" onClick={() => handleOnClickDefault("topleft")}>
//                 Top-Left
//             </button>
//             <button className="button" onClick={() => handleOnClickDefault("topcenter")}>
//                 Top-Center
//             </button>
//             <button className="button" onClick={() => handleOnClickDefault("center")}>
//                 Center
//             </button>
//             <button className="button" onClick={() => handleOnClickDefault("bottomright")}>
//                 Bottom-Right
//             </button>
//             <button className="button" onClick={() => handleOnClickDefault("bottomright")}>
//                 Bottom-Left
//             </button>
//             <button className="button" onClick={() => handleOnClickDefault("bottomcenter")}>
//                 Bottom-Center
//             </button>


//         </div>
//     )
// }
// export default Success;
