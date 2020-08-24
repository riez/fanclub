import { FunctionComponent, useState, useCallback } from "react";
import {
  Responsive,
  Visibility,
  Segment,
  Menu,
  Container,
} from "semantic-ui-react";
import { getWidth } from "../../utils";
import styled from "styled-components";

import { Link } from "../../routes";
import IntroHeader from "../IntroHeader";
import Footer from "../Footer";
import { UserModel } from "../../models/user";

interface Props {
  children: React.ReactNode;
  data: UserModel;
  hideIntroHeader?: boolean;
}

const Logo = styled.div`
  .logo {
    width: 150px;
  }
`;

const StyledSegment = styled(Segment)`
  ${(props) => props.hideintroheader === "true" && "min-height: 400px"}
  padding: 1em 0em;
`;

const Content = styled.div`
  padding-bottom: 5rem;
`;

const DesktopContainer: FunctionComponent<Props> = ({
  children,
  data,
  hideIntroHeader,
}) => {
  const [fixed, changeFixed] = useState(false);
  const handleFixed = useCallback((value: boolean) => {
    changeFixed(value);
  }, []);
  return (
    <Responsive
      getWidth={getWidth}
      minWidth={Responsive.onlyTablet.minWidth}
      style={{ position: "relative", minHeight: "100vh" }}
    >
      <Visibility
        once={false}
        onBottomPassed={() => changeFixed(true)}
        onBottomPassedReverse={() => changeFixed(false)}
        style={{ background: "white" }}
      >
        <StyledSegment
          textAlign="center"
          vertical
          hideintroheader={hideIntroHeader?.toString()}
        >
          <Menu
            fixed={fixed ? "top" : null}
            inverted={false}
            pointing={false}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Link route="/">
                <Logo as="a">
                  <img className="logo" src="/logo.png" />
                </Logo>
              </Link>
            </Container>
          </Menu>
          {!hideIntroHeader && <IntroHeader data={data} />}
        </StyledSegment>
      </Visibility>
      <Content>{children}</Content>
      <Footer />
    </Responsive>
  );
};

export default DesktopContainer;
