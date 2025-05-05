import style from "./Btn.module.css";
import ReactLoading from "react-loading";
export type BtnProps = {
  text: string;
  onclick: undefined | (() => void);
  className?: string;
  isLoading?: boolean;
};
export const Btn = (props: BtnProps) => {
  return (
    <button
      className={`${style.btn} ${props.className || ""}`}
      onClick={() => (props.onclick ? props.onclick() : null)}
    >
      {props.isLoading && (
        <ReactLoading type={"spin"} color={"#fff"} height={25} width={25} />
      )}
      {props.text}
    </button>
  );
};
