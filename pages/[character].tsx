import { CCardText, CCardTitle, CContainer, CImage, CRow } from "@coreui/react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../components/header";

const Character = ({ character }: any) => {
    console.log(character);

    // const router = useRouter();
    // const { character } = router.query;
    // // const char = characters?.find((ch: any) => ch.name === character);
    // // console.log(char);
    // console.log(characters);

    return (
        <>
            <Header></Header>
            <CContainer className="mt-10">
                <CRow>
                    <CImage
                        align="start"
                        rounded
                        src={character.image}
                        width={200}
                        height={200}
                        className={"w-48"}
                    />
                </CRow>
                <br />
                    <CCardText>Name</CCardText>
                    <CCardTitle>{character.name}</CCardTitle>
                <br></br>
                <CCardText>House</CCardText>
                <CCardTitle>{character.house}</CCardTitle>
                <br></br>
                <CCardText>Gender</CCardText>
                <CCardTitle>{character.gender}</CCardTitle>
                <br></br>
                <CCardText>Ancestry</CCardText>
                <CCardTitle>{character.ancestry}</CCardTitle>
            </CContainer>
        </>
    );
};
export default Character;
export async function getStaticProps({ params }: any) {
    console.log(params);

    const res = await axios.get("http://hp-api.herokuapp.com/api/characters");
    const characters = res.data;
    const character = characters.find((char: any) => char.name === params.character);

    // Pass post data to the page via props
    return { props: { character } };
}
export async function getStaticPaths() {
    const res = await axios.get("http://hp-api.herokuapp.com/api/characters");
    const characters = res.data;

    return {
        paths: characters.map((char: any) => {
            return { params: { character: char.name } };
        }),
        fallback: false,
    };
}
