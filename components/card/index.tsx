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

const Card = (props: any) => {
    return (
        <CCard>
            <CCardBody>
                <CRow>
                    <CCol style={{ width: "auto", flex: "unset" }}>
                        <CImage
                            rounded
                            src={props.image}
                            // width={200}
                            height={200}
                        />
                    </CCol>
                    <CCol>
                        <CCardTitle>{props.name}</CCardTitle>
                        <CCardText>{props.house}</CCardText>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    );
};
export default Card;
