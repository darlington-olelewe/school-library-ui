import {cancel} from "./assets_string.ts";

export type cancelProp = {
    onClick: () => void;
    className?: string;
};
export const CancelIcon = (props: cancelProp) => {
    return (
        <img
            alt={"cancel icon"}
    src={cancel}
    onClick={props.onClick}
    style={{ cursor: "pointer" }}
    className={`${props.className || ""}`}
    />
);
};