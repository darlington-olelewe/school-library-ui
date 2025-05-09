import { SearchIcon } from "../../_assets";
import style from "./FullSearch.module.css";
import { ChangeEvent, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../_store";
// import { ClientObj } from "../../_models";
// import { AppDispatch } from "../../_reducers";
// import { fetchAllClient } from "../../_actions";

export const FullSearch = (props: {
  value: string;
  update: (str: string) => void;
}) => {
  const [value, setValue] = useState(props.value);

  return (
    <div className={style.full_search}>
      <h4 className={style.h4}>Search</h4>
      <div className={style.search_holder}>
        <div className={style.search_div}>
          <SearchIcon />
          <input
            placeholder={"Search"}
            className={style.input}
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const value = e.target.value;
              setValue(value);
            }}
          />
        </div>
        <button onClick={() => props.update(value)} className={style.btn}>
          Search
        </button>
      </div>
    </div>
  );
};

export const SearchWithSelector = (props: {
  update: (name: string, status: string) => void;
}) => {
  const [searchParam, setSearchParam] = useState<{
    status:
      | ""
      | "CREATED"
      | "READY"
      | "PROCESSING"
      | "COMPLETED"
      | "FAILED"
      | "CANCELED";
    name: string;
  }>({ status: "", name: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSearchParam((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleClick = () => {
    props.update(searchParam.name, searchParam.status);
  };

  return (
    <div className={style.search_container}>
      <div>
        <h3 className={style.h4}>Status</h3>
        <div className={style.search_div}>
          <select
            className={style.select}
            value={searchParam.status}
            name={"status"}
            onChange={handleChange}
          >
            <option value={""}>ALL</option>
            <option value={"CREATED"}>CREATED</option>
            <option value={"READY"}>READY</option>
            <option value={"PROCESSING"}>PROCESSING</option>
            <option value={"COMPLETED"}>COMPLETED</option>
            <option value={"FAILED"}>FAILED</option>
            <option value={"CANCELED"}>CANCELED</option>
          </select>
        </div>
      </div>
      <div>
        <h3 className={style.h4}>Search</h3>
        <div className={style.search_div}>
          <SearchIcon />
          <input
            name={"name"}
            value={searchParam.name}
            onChange={handleChange}
            className={style.input}
            placeholder={"Search By Campaign name"}
          />
        </div>
      </div>
      <button className={style.btn_2} type={"button"} onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

// export const SearchWithSelectorAudit = (props: {
//   update: (domainCode: string, requestType: string, module: string) => void;
// }) => {
//   const dispatch: AppDispatch = useDispatch();
//   const { allClients } = useSelector((state: RootState) => state.reachState);
//
//   useEffect(() => {
//     dispatch(fetchAllClient());
//   }, [dispatch]);
//
//   const clientKeyValue =
//     (data: ClientObj[]) => (): { key: string; value: string }[] => {
//       const clientKeyValue = data.map((client: ClientObj) => {
//         return {
//           key: client.domainCode ?? "",
//           value: client.name ?? "",
//         };
//       });
//       return [
//         {
//           key: "",
//           value: "ALL",
//         },
//         ...clientKeyValue,
//       ];
//     };
//   const [searchParam, setSearchParam] = useState<{
//     domainCode: string;
//     module: string;
//     requestType: string;
//     query: string;
//   }>({
//     domainCode: "",
//     module: "",
//     requestType: "",
//     query: "",
//   });
//
//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setSearchParam((prevState) => {
//       return {
//         ...prevState,
//         [name]: value,
//       };
//     });
//   };
//
//   const handleClick = () => {
//     props.update(
//       searchParam.domainCode,
//       searchParam.requestType,
//       searchParam.module
//     );
//   };
//
//   const ckv = clientKeyValue(allClients)();
//
//   return (
//     <div className={style.search_container_3}>
//       <div>
//         <h3 className={style.h4}>Status</h3>
//         <div className={style.search_div}>
//           <select
//             className={style.select}
//             value={searchParam.domainCode}
//             name={"domainCode"}
//             onChange={handleChange}
//           >
//             {ckv.map((e, index) => (
//               <option value={e.key} key={index}>
//                 {e.value}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//
//       <div>
//         <h3 className={style.h4}>Module</h3>
//         <div className={style.search_div}>
//           <select
//             className={style.select}
//             value={searchParam.module}
//             name={"module"}
//             onChange={handleChange}
//           >
//             <option value={""}>ALL</option>
//             <option value={"ADMIN"}>ADMIN</option>
//             <option value={"TARGETS"}>TARGETS</option>
//             <option value={"CAMPAIGNS"}>CAMPAIGNS</option>
//             <option value={"NOTIFICATION"}>NOTIFICATION</option>
//           </select>
//         </div>
//       </div>
//
//       <div>
//         <h3 className={style.h4}>Action</h3>
//         <div className={style.search_div}>
//           <select
//             className={style.select}
//             value={searchParam.requestType}
//             name={"requestType"}
//             onChange={handleChange}
//           >
//             <option value={""}>ALL</option>
//             <option value={"ADMIN_CLIENT_SETUP"}>Admin Client Setup</option>
//             <option value={"ADMIN_CLIENT_UPDATE"}>Admin Client Update</option>
//             <option value={"CUSTOMER_BUILD_QUERY"}>Create Target</option>
//             <option value={"CUSTOMER_UPDATE_QUERY"}>Update Target</option>
//             <option value={"CUSTOMER_POST_CAMPAIGN"}>Create Campaign</option>
//             <option value={"CUSTOMER_UPDATE_CAMPAIGN"}>Update Campaign</option>
//             <option value={"CUSTOMER_DISPATCH_CAMPAIGN"}>
//               Dispatch Campaign
//             </option>
//             <option value={"CUSTOMER_POST_PAYMENT"}>Made Payment</option>
//           </select>
//         </div>
//       </div>
//
//       <div>
//         <h3 className={style.h4}>Search</h3>
//         <div className={style.search_div}>
//           <SearchIcon />
//           <input
//             name={"query"}
//             value={searchParam.query}
//             onChange={handleChange}
//             className={style.input}
//             placeholder={"Search Audit Records"}
//           />
//         </div>
//       </div>
//       <button className={style.btn_2} type={"button"} onClick={handleClick}>
//         Search
//       </button>
//     </div>
//   );
// };
//
// export const SimpleSearch = (props: {
//   value: string;
//   update: (str: string) => void;
// }) => {
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     props.update(value);
//   };
//
//   return (
//     <div className={style.search_div_2}>
//       <SearchIcon />
//       <input
//         className={style.input}
//         placeholder={"Search By Recipient phone"}
//         value={props.value}
//         onChange={handleChange}
//       />
//     </div>
//   );
// };
