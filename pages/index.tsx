import {
    CButton,
    CCol,
    CCollapse,
    CContainer,
    CDropdown,
    CDropdownDivider,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CForm,
    CFormInput,
    CFormSelect,
    CHeader,
    CHeaderBrand,
    CHeaderNav,
    CHeaderToggler,
    CNavItem,
    CNavLink,
    CPagination,
    CPaginationItem,
    CRow,
} from "@coreui/react";
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useMemo, useState } from "react";
import Card from "../components/card";
import Header from "../components/header";
import Pagination from "../components/pagination";
import styles from "../styles/Home.module.css";
import _ from "lodash";

interface HomeProps {
    characters: any;
}
const Home = ({ characters }: HomeProps) => {
    const [search, setSearch] = useState("");
    const [currentPage, setcurrentPage] = useState(1);
    const [num, setnum] = useState(10);
    const [sort, setsort] = useState<"unsort" | "asc" | "desc">("unsort");
    const characterUniq = _.uniqBy(characters, "name");
    const char = characterUniq.filter((el: any) => el.name.includes(search));
    const characterData = useMemo(() => {
        console.log((currentPage - 1) * num);
        console.log(currentPage * num);
        if (sort !== "unsort") {
            const sortedArr = _.orderBy(char, ["name"], sort);
            const slicedArr = sortedArr.slice((currentPage - 1) * num, currentPage * num);
            return slicedArr;
        }
        const slicedArr = char.slice((currentPage - 1) * num, currentPage * num);
        return slicedArr;
    }, [sort, char, currentPage, num]);

    return (
        <>
            <Header></Header>
            <CContainer>
                <CRow>
                    <CCol sm="auto">
                        <CFormSelect
                            className="m-3 w-36"
                            aria-label="Default select example"
                            value={num}
                            onChange={value => setnum(Number(value.target.value) as any)}
                            options={[
                                { label: "10", value: "10" },
                                { label: "20", value: "20" },
                                { label: "50", value: "50" },
                            ]}
                        />
                    </CCol>
                    <CCol sm="auto">
                        <CFormSelect
                            className="m-3 w-36"
                            aria-label="Default select example"
                            value={sort}
                            onChange={value => setsort(value.target.value as any)}
                            options={[
                                { label: "Unsort", value: "unsort" },
                                { label: "Asc", value: "asc" },
                                { label: "Desc", value: "desc" },
                            ]}
                        />
                    </CCol>
                    <CCol className="">
                        <CFormInput
                            className="mt-3 w-80 "
                            type="text"
                            id="search"
                            placeholder="Search character"
                            onChange={e => setSearch(e.target.value)}
                        />
                    </CCol>
                </CRow>

                {characterData.map((char: any) => {
                    return <Card {...char} key={char.name}></Card>;
                })}
                <Pagination
                    current={currentPage}
                    total={Math.ceil(Number(char.length / num))}
                    onNext={setcurrentPage}
                    onPrevious={setcurrentPage}
                    onJump={setcurrentPage}
                ></Pagination>
            </CContainer>
        </>
    );
};

export default Home;

export async function getStaticProps() {
    const res = await axios.get("http://hp-api.herokuapp.com/api/characters");
    const characters = res.data;
    return {
        props: { characters },
    };
}
