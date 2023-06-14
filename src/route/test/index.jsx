import { h } from "preact";
import { alert } from "../../components/modal/dialog.jsx";

export const PageTest = () => {
    return <div>
        <div onClick={async () => {
            await alert("Hello World");
            console.log("alert end.");
        }}>Hello</div>
    </div>;
};
