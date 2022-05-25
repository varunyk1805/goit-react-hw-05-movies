import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
    padding: 25px;
`;

const Nav = styled.nav`
    display: flex;
    gap: 20px;
`;

const Link = styled(NavLink)`
    ${'' /* color: brown; */}
    &.active {
        color: red;
    }
`;

export const Layout = () => {
    return (
        <Wrapper>
            <Nav>
                <Link to='/'>Home</Link>
                <Link to='/movies'>Movies</Link>
            </Nav>
        <Outlet/>
        </Wrapper>
    )
}