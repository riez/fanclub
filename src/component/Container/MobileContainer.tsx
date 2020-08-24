import { FunctionComponent, useState, useCallback } from "react";
import {
  Responsive,
  Sidebar,
  Menu,
  Segment,
  Container,
  Icon,
  Button,
} from "semantic-ui-react";
import styled from "styled-components";

import { getWidth } from "../../utils";
import { Link } from "../../routes";
import IntroHeader from "../IntroHeader";
import Footer from "../Footer";
import { UserModel } from "../../models/user";

interface Props {
  children: React.ReactNode;
  data: UserModel;
  hideIntroHeader?: boolean;
}

const StyledSegment = styled(Segment)`
  ${(props) => props.hideintroheader === "true" && "min-height: 350px"}
  padding: 1em 0em;
`;
const MenuItem = styled(Menu.Item)`
  align-self: center;
`;

const Logo = styled.div`
  display: flex;
  margin-left: auto !important;
  .logo {
    width: 150px;
  }
`;

const Content = styled.div`
  padding-bottom: 3rem;
`;

const MobileContainer: FunctionComponent<Props> = ({
  children,
  data,
  hideIntroHeader,
}) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const handleSidebarHide = useCallback(() => {
    setSidebarOpened(false);
  }, []);
  const handleToggle = useCallback(() => {
    setSidebarOpened(true);
  }, []);
  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
      
    >
      <Sidebar
        as={Menu}
        animation="push"
        inverted
        onHide={handleSidebarHide}
        vertical
        visible={sidebarOpened}
        
      >
        <Link route="/">
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
        </Link>
        <Link route="/users">
          <Menu.Item as="a">Browse Influencer</Menu.Item>
        </Link>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened} style={{ position: "relative", minHeight: "100vh" }}>
        <StyledSegment textAlign="center" vertical >
          <Container>
            <Menu secondary size="large">
              <MenuItem onClick={handleToggle}>
                <Icon name="sidebar" />
              </MenuItem>
              <Link route="/">
                <Logo as="a">
                  <img className="logo" src="/logo.png" />
                </Logo>
              </Link>
            </Menu>
          </Container>
          {!hideIntroHeader && <IntroHeader data={data} />}
        </StyledSegment>
        <Content>
        {children}
        </Content>
        <Footer />
      </Sidebar.Pusher>
    </Responsive>
  );
};

export default MobileContainer;
