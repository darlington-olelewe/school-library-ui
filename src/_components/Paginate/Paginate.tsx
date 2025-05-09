import style from "./Paginate.module.css";

export type PaginateProp = {
  datasource: object[];
  pageNo: number;
  pageSize: number;
  changePageNo: (num: number) => void;
  changePageSize: (num: number) => void;
};
export const Paginate = (props: PaginateProp) => {
  const count = props.datasource?.length ?? 0;
  const current = props.pageNo;

  const handleNext = () => {
    const maxPage = Math.ceil(count / props.pageSize);
    if (current < maxPage) {
      props.changePageNo(current + 1);
    }
  };

  const handlePrev = () => {
    if (current > 1) {
      props.changePageNo(current - 1);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.total_count}>{count} results found</div>
      <div className={style.right_section}>
        <div>
          Rows per page:
          <select
            className={style.select}
            onChange={(e) => {
              props.changePageNo(1);
              props.changePageSize(parseInt(e.target.value));
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>

        <div className={style.end_flex}>
          <div>
            {(current - 1) * props.pageSize + 1} -{" "}
            {props.pageSize * current < count
              ? props.pageSize * current
              : count}{" "}
            of {count}
          </div>
          <div>
            <button className={style.angle_btn} onClick={handlePrev}>
              {"<"}
            </button>
            <button className={style.angle_btn} onClick={handleNext}>
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
