import {
    CCard,
    CCardBody,
    CCardImage,
    CCardLink,
    CCardSubtitle,
    CCardText,
    CCardTitle,
    CCol,
    CImage,
    CRow,
} from "@coreui/react";
import Link from "next/link";

const Card = (props: any) => {
    return (
        <Link href={"/" + props.name}>
            <a target={"_blank"} className="no-underline text-black">
                <CCard className="shadow-md hover:shadow-2xl transition m-3 duration-300 border-0 hover:scale-105 hover:cursor-pointer">
                    <CCardBody>
                        <CRow>
                            <CCol style={{ width: "auto", flex: "unset" }}>
                                <CImage
                                    rounded
                                    src={
                                        props.image
                                            ? props.image
                                            : "https://images.ctfassets.net/usf1vwtuqyxm/LVHiFGdQFBdVxaFmHFYGR/b2ff1d3bcd575afca964411d867446a4/sorting_SEO-article.png"
                                    }
                                    className="h-36 w-24 object-cover "
                                />
                            </CCol>
                            <CCol>
                                <CCardTitle>{props.name}</CCardTitle>
                                <CCardText>{props.house}</CCardText>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </a>
        </Link>
    );
};
export default Card;
