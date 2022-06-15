import { CContainer, CHeader, CHeaderBrand, CHeaderToggler } from '@coreui/react';

const Header = () => {
    return (
        <CHeader>
            <CContainer>
                <CHeaderBrand>Harry Potter Characters</CHeaderBrand>
                {/* <CHeaderToggler /> */}
            </CContainer>
        </CHeader>
    );
};

export default Header;
