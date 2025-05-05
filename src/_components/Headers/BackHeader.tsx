import style from "./headers.module.css";
import { BackIcon } from "../../_assets";
import { Btn } from "../Btn";

export type BackHeaderProps = {
  showBtn: boolean;
  btnAction: undefined | (() => void);
  btnTxt: string;
  isLoading?: boolean;
};
export const BackHeader = (props: BackHeaderProps) => {
  return (
    <div className={style.back_header}>
      <div>
        <BackIcon /> Back
      </div>

      {props.showBtn && (
        <Btn
          isLoading={props.isLoading}
          text={props.btnTxt}
          onclick={() => {
            if (!props.isLoading) {
              if (props.btnAction) {
                props.btnAction();
              }
            }
          }}
        />
      )}
    </div>
  );
};
