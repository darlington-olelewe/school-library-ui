import { CircleFalse, CircleTrue } from "../../_assets";
import style from "./Tag.module.css";

export type TagProp = {
  status: boolean;
  message: string;
};
export const Tag = (props: TagProp) => {
  if (props.status) {
    return (
      <div className={style.true}>
        <CircleTrue /> {props.message}
      </div>
    );
  }

  return (
    <div className={style.false}>
      <CircleFalse /> {props.message}
    </div>
  );
};
