import {TitleHeader} from "../../../_components/Headers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../_store";
import { AppDispatch } from "../../../_reducers";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllBookDetails} from "../../../_actions/app.actions.ts";
import {FullSearch, TableLoader, TableReach} from "../../../_components";


import style from "./bookspage.module.css"
import {Actions} from "../../../_components/Action";

export const BooksPage =()=>{

    const dispatch: AppDispatch = useDispatch();
    const { fetchAllBooks:books, fetchingBooks: isFetchingBooks } = useSelector(
        (state: RootState) => state.appState
    );
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        dispatch(getAllBookDetails());
    }, [dispatch]);

    const updateSearch = (str: string) => {
        setSearchQuery(str);
    };
    const tableHead = {
        id: "id",
        title: "Title",
        authors: "Authors",
        isbn: "ISBN",
        availableBookCount: "In stock",
        totalBookCount: "Total",
        difference: "With Students",
        action: " ",
    };

    const search = (
        list: Record<string, any>[],
        param: string
    ): Record<string, any>[] => {
        return list.filter((e: Record<string, any>) => {
            const name = e.id
                ? e.id.toString().toLowerCase().includes(param.toLowerCase())
                : false;
            const email = e.title
                ? e.title.toLowerCase().includes(param.toLowerCase())
                : false;
            const msisdn = e.authors
                ? e.authors.toLowerCase().includes(param.toLowerCase())
                : false;
            const code = e.isbn
                ? e.isbn.toLowerCase().includes(param.toLowerCase())
                : false;
            return name || email || msisdn || code ;
        });
    };


    const updatedData = books.map((each: Record<string, any>) => {

        return {
            ...each,
            action: (
                <Actions
                    links={[
                        {
                            link: `/admin/books/add-inventory/${each.id}`,
                            text: "Add Inventory",
                            isLink: true,
                        }
                    ]}
                />
            ),
        };
    });

    return (
        <div>
            <TitleHeader title={"Admin Books"}/>

            <FullSearch value={searchQuery} update={updateSearch} />
            {isFetchingBooks && <TableLoader text={"Fetching Client Records"} />}

            {!isFetchingBooks &&  (
                <div className={style.layout}>
                    <div className={style.section_main}>
                        <div className={style.write}>
                            <div className={style.section}>
                                Books
                            </div>
                            This is a directory of all books in this library.
                        </div>
                        <button
                            className={style.btn}
                            onClick={() => navigate("/admin/books/new")}
                        >
                            Add book
                        </button>
                    </div>

                    <TableReach
                        tableData={search(updatedData, searchQuery)}
                        tableHeader={tableHead}
                    />
                </div>
            )}


        </div>
    )
}