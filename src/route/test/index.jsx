import { h } from "preact";
import { Modal } from "../../components/modal/index.jsx";
import { useState } from "preact/hooks";

export const PageTest = () => {
    const [show, setShow] = useState(false);
    return <div>
        <div onClick={() => {setShow(true)}}>Hello</div>
        <Modal isOpen={show}>
            <div onClick={() => {setShow(false)}}>Dragon World!</div>
        </Modal>
    </div>
}
