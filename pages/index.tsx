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
    CHeader,
    CHeaderBrand,
    CHeaderNav,
    CHeaderToggler,
    CNavItem,
    CNavLink,
    CRow,
} from "@coreui/react";
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/card";
import Header from "../components/header";
import styles from "../styles/Home.module.css";
interface HomeProps {
    characters: any;
}
const Home = ({ characters }: HomeProps) => {
    return (
        <>
            <Header></Header>
            <CContainer>
                {characters.map((char: any) => {
                    return <Card {...char} key={char.name}></Card>;
                    // return <div key={char.name}>{char.name}</div>;
                })}
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
