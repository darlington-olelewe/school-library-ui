import {
    cancel,
    clientUnselected,
    clientSelected,
    auditSelected,
    auditUnselected,
    billingsSelected,
    billingsUnselected,
    campaignsUnselected,
    targetsUnselected,
    targetsSelected,
    campaignsSelected,
    NavSelected, NavUnselected, Bell, Logo as logo, Down, Back, Search, OptionDot, TrueCircle, FalseCircle
} from "./assets_string.ts";
import style from "./assets.module.css"
import {useNavigate} from "react-router-dom";

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

export const ClientIconActive = () => {
    return (
        <img
            className={style.toggle_hidden}
            src={clientSelected}
            alt={"nav icon"}
            width={24}
            height={24}
            style={{ display: "inline-block", marginRight: "10px" }}
        />
    );
};
export const ClientIconInActive = () => {
    return (
        <img
            className={style.toggle_hidden}
            src={clientUnselected}
            alt={"nav icon"}
            width={24}
            height={24}
            style={{ display: "inline-block", marginRight: "10px" }}
        />
    );
};
export const AuditIconActive = () => {
    return (
        <img
            className={style.toggle_hidden}
            src={auditSelected}
            alt={"nav icon"}
            width={24}
            height={24}
            style={{ display: "inline-block", marginRight: "10px" }}
        />
    );
};
export const AuditIconInActive = () => {
    return (
        <img
            className={style.toggle_hidden}
            src={auditUnselected}
            alt={"nav icon"}
            width={24}
            height={24}
            style={{ display: "inline-block", marginRight: "10px" }}
        />
    );
};

export const BillingNavUnSelected = () => {
    return (
        <img
            src={billingsUnselected}
            className={style.toggle_hidden}
            alt={"nav icon"}
            width={24}
            height={24}
            style={{ display: "inline-block", marginRight: "10px" }}
        />
    );
};
export const BillingNavSelected = () => {
    return (
        <img
            src={billingsSelected}
            className={style.toggle_hidden}
            alt={"nav icon"}
            width={24}
            height={24}
            style={{ display: "inline-block", marginRight: "10px" }}
        />
    );
};

export const TargetNavSelected = () => {
    return (
        <img
            src={targetsSelected}
            className={style.toggle_hidden}
            alt={"nav icon"}
            width={24}
            height={24}
            style={{ display: "inline-block", marginRight: "10px" }}
        />
    );
};
export const TargetNavUnSelected = () => {
    return (
        <img
            src={targetsUnselected}
            className={style.toggle_hidden}
            alt={"nav icon"}
            width={24}
            height={24}
            style={{ display: "inline-block", marginRight: "10px" }}
        />
    );
};
export const CampaignNavSelected = () => {
    return (
        <img
            src={campaignsSelected}
            className={style.toggle_hidden}
            alt={"nav icon"}
            width={24}
            height={24}
            style={{ display: "inline-block", marginRight: "10px" }}
        />
    );
};
export const CampaignNavUnSelected = () => {
    return (
        <img
            src={campaignsUnselected}
            className={style.toggle_hidden}
            alt={"nav icon"}
            width={24}
            height={24}
            style={{ display: "inline-block", marginRight: "10px" }}
        />
    );
};

export const NavIconActive = () => {
    return (
        <img
            src={NavSelected}
            className={style.toggle_hidden}
            alt={"nav icon"}
            width={24}
            height={24}
            style={{ display: "inline-block", marginRight: "10px" }}
        />
    );
};
export const BackIcon = () => {
    const navigate = useNavigate();

    return <img src={Back} alt={"Back Icon"} onClick={() => navigate(-1)} />;
};
export const NavIconInActive = () => {
    return (
        <img
            className={style.toggle_hidden}
            src={NavUnselected}
            alt={"nav icon"}
            width={24}
            height={24}
            style={{ display: "inline-block", marginRight: "10px" }}
        />
    );
};
export const NotificationIcon = () => {
    return <img src={Bell} alt={"notification Icon"} width={24} height={24} />;
};
export const Logo = () => {
    return <img src={logo} alt={"isw logo"} width={20} />;
};

export const DownArrow = () => {
    return <img src={Down} alt={"down arrow"} />;
};
export const SearchIcon = () => {
    return <img alt={"Search Image"} src={Search} width={24} height={24} />;
};
export const Options = () => {
    return (
        <img src={OptionDot} alt={"Options available"} className={style.option} />
    );
};
export const CircleTrue = () => {
    return <img src={TrueCircle} alt={"True Indication"} />;
};
export const CircleFalse = () => {
    return <img src={FalseCircle} alt={"False Indication"} />;
};