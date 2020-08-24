import { FunctionComponent } from "react";
import {
  Grid,
  Segment,
  Container,
  Button,
  Rating,
  Image,
  Icon,
} from "semantic-ui-react";
import styled from "styled-components";
import { StyledText } from "./Styled";
import Label from "./Label";
import { UserModel } from "../models/user";

interface Props {
  data: UserModel;
}

const StyledContainer = styled(Container)`
  background: transparent !important;
  padding: 1rem 0;
  > div.row,
  button {
    padding-bottom: 1.5rem;
    &:last-child: {
      padding-bottom: 0;
    }
  }
`;

const CountContainer = styled(Grid.Column)`
  display: flex !important;
  div + div {
    padding-left: 10px;
  }
`;

const CountContent = styled.div`
  display: flex;
  div + div {
    padding-left: 10px;
  }
`;

const ActionContainer = styled.div`
  display: flex;
`;

const StyledImage = styled(Image)`
  margin: 0 auto;
`;

const IntroHeader: FunctionComponent<Props> = ({data}) => {
  return (
    <Container>
      <Grid columns={3} stackable centered>
        <Grid.Column width={2}>
          <StyledImage
            src={data?.picture}
            circular
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Grid stretched>
            <Grid.Row width={12} verticalAlign="middle">
              <Grid.Column width={6}>
                <StyledText fontSize="20px" fontWeight="bold">
                  {data?.username}
                </StyledText>
                <StyledText color="#879297">
                  {data?.name}
                </StyledText>
              </Grid.Column>
              <Grid.Column width={10}>
                <div style={{ display: "flex" }}>
                  <Label size="massive">
                    <StyledText fontWeight="bold">Lifestyle</StyledText>
                  </Label>
                  <Label size="massive">
                    <StyledText fontWeight="bold">Music</StyledText>
                  </Label>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={1}>
            <CountContainer>
              <CountContent>
                <StyledText fontSize="20px" fontWeight="bold">
                  299
                </StyledText>
                <StyledText color="#879297">Media</StyledText>
              </CountContent>
              <CountContent>
                <StyledText fontSize="20px" fontWeight="bold">
                  1,8m
                </StyledText>
                <StyledText color="#879297">Followers</StyledText>
              </CountContent>
              <CountContent>
                <StyledText fontSize="20px" fontWeight="bold">
                  100
                </StyledText>
                <StyledText color="#879297">Following</StyledText>
              </CountContent>
            </CountContainer>
          </Grid>
          <Grid>
            <Grid.Column>
              <StyledText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                in ex eu lorem pharetra mattis sed nec orci. Nunc quis luctus
                elit. Vivamus laoreet, quam ac pulvinar condimentum, purus
                lectus tincidunt diam, in rhoncus ex est eu nunc.
              </StyledText>
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column width={1}>
          <ActionContainer>
            <Button circular icon="envelope outline" size="big"/>
            <Button circular icon="ellipsis horizontal" size="big"/>
          </ActionContainer>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default IntroHeader;
