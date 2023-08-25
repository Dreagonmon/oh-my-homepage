import { ComponentChild, h } from "preact";

export interface ButtonProps extends h.JSX.HTMLAttributes<HTMLButtonElement> {
    theme?: "prime" | "second" | "error" | "warning" | "success",
}
