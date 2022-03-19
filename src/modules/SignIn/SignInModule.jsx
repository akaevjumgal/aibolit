import { useState } from "react";
import { ModalScenes } from "../../common/signin";
import OTPVerificationModule from "../OTPVerification/OTPVerificationModule";
import PhoneNumberVerificationModule from "../PhoneNumberVerification/PhoneNumberVerificationModule";

export default function SignInModule() {
    const [currentScene, setCurrentScene] = useState(ModalScenes.PhoneNumber);
    const setScene = (scene) => {
        setCurrentScene(scene);
    }

    return (
        <div>
            {currentScene === ModalScenes.PhoneNumber && <PhoneNumberVerificationModule setScene={setScene} />}
            {currentScene === ModalScenes.Verification && <OTPVerificationModule setScene={setScene} />}
        </div>
    )
}