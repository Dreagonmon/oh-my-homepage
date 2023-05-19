import { h, ComponentChildren } from "preact";

export interface ModalProps {
    isOpen: boolean,
    children?: ComponentChildren,
}
