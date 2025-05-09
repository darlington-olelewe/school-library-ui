// import ReactLoading from "react-loading";
import style from "./Loader.module.css";
export const TableLoader = ({ text }: { text: string }) => {
  return (
    <div className={style.table_loader}>
      {/*<ReactLoading type={"spin"} color={"#0275D8"} height={40} width={40} />*/}
      <div className={style.text}>{text}</div>
      <span className={style.span}>
        Please wait while we process your request
      </span>
    </div>
  );
};
