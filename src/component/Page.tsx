import { FunctionComponent } from "react";
import { Helmet } from "react-helmet";
import DesktopContainer from "./Container/DesktopContainer";
import MobileContainer from "./Container/MobileContainer";
import styled from "styled-components";
import { UserModel } from "../models/user";

interface Props {
  children: React.ReactNode;
  data?: UserModel;
  metaTitle?: string;
  metaDescription?: string;
  hideIntroHeader?: boolean;
  background?: string;
}

const Container = styled.div`
  background: ${(props: { background: string }) =>
    props.background ? props.background : "white"} !important;
    
`;

const Page: FunctionComponent<Props> = ({
  children,
  data,
  hideIntroHeader,
  metaTitle,
  metaDescription,
  background,
}) => {
  return (
    <Container background={background}>
      <Helmet
        title={metaTitle || "Fanclub - A fans engagement Platform"}
      >
        <meta
          name="description"
          content={
            metaDescription ||
            "Studio Fanclub is a SEO Optimized Website for Fans and Celebrity."
          }
        />
      </Helmet>
      <DesktopContainer hideIntroHeader={hideIntroHeader} data={data}>
        {children}
      </DesktopContainer>
      <MobileContainer hideIntroHeader={hideIntroHeader} data={data}>
        {children}
      </MobileContainer>
    </Container>
  );
};

export default Page;
