import style from "./headers.module.css";
export const TitleHeader = (props: { title: string }) => {
  return <div className={style.title_header}>{props.title}</div>;
};
