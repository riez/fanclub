import { FunctionComponent } from "react";
import {
  Segment,
  Grid,
  Tab,
  Button,
} from "semantic-ui-react";
import styled from "styled-components";
import { StyledText } from "../Styled";
import { UserModel } from "../../models/user";

const StyledSegment = styled(Segment)`
  box-shadow: none !important;
`;

const Container = styled.div`
  padding: 16px;
`;

const Content = styled.div`
  margin: 1rem 0;
`;

const StatInfoContainer = styled.div`
  display: flex;
`;

type Props = {
  data: UserModel;
}

const StatisticTab: FunctionComponent<Props> = ({data}) => {
  return (
    <Tab.Pane attached={false}>
      <Container>
        <StyledText fontSize="16px" fontWeight="bold">
          #Social Media Stats Overview
        </StyledText>
        <Content>
          <Grid columns={3} stackable>
            <Grid.Column>
              <StyledSegment>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={12}>
                      <StyledText>
                        Instagram Engagement
                      </StyledText>
                      <StyledText>
                        (Last 30 Days)
                      </StyledText>
                    </Grid.Column>
                    <Grid.Column width={4} textAlign="right">
                      <Button circular icon="instagram" color="pink" />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Grid>
                  <StyledText
                    fontSize="30px"
                    fontWeight="bold"
                    padding="0 0 1rem 0"
                  >
                    1,9k
                  </StyledText>
                </Grid>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={13}>
                      <StatInfoContainer>
                        <StyledText color="#db2828" fontWeight="bold">0,4%</StyledText>
                        &nbsp;
                        <StyledText>Less than Usual.</StyledText>
                      </StatInfoContainer>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </StyledSegment>
            </Grid.Column>
            <Grid.Column>
              <StyledSegment>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={12}>
                      <StyledText>
                        Facebook Engagement
                      </StyledText>
                      <StyledText>
                        (Last 30 Days)
                      </StyledText>
                    </Grid.Column>
                    <Grid.Column width={4} textAlign="right">
                      <Button circular icon="facebook" color="facebook" />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Grid>
                  <StyledText
                    fontSize="30px"
                    fontWeight="bold"
                    padding="0 0 1rem 0"
                  >
                    2m
                  </StyledText>
                </Grid>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={13}>
                      <StatInfoContainer>
                        <StyledText color="#21ba45" fontWeight="bold">10%</StyledText>
                        &nbsp;
                        <StyledText>Growth.</StyledText>
                      </StatInfoContainer>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </StyledSegment>
            </Grid.Column>
            <Grid.Column>
              <StyledSegment>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={12}>
                      <StyledText>
                        Followers
                      </StyledText>
                      <StyledText>
                        (Last 30 Days)
                      </StyledText>
                    </Grid.Column>
                    <Grid.Column width={4} textAlign="right">
                      <Button circular icon="users" color="yellow" />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Grid>
                  <StyledText
                    fontSize="30px"
                    fontWeight="bold"
                    padding="0 0 1rem 0"
                  >
                    100k
                  </StyledText>
                </Grid>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={12}>
                      <StatInfoContainer>
                        <StyledText color="#21ba45" fontWeight="bold">10%</StyledText>
                        &nbsp;
                        <StyledText>followers Growth.</StyledText>
                      </StatInfoContainer>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </StyledSegment>
            </Grid.Column>
            <Grid.Column>
              <StyledSegment>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={12}>
                      <StyledText>
                        Total Likes
                      </StyledText>
                      <StyledText>
                        (Last 30 Days)
                      </StyledText>
                    </Grid.Column>
                    <Grid.Column width={4} textAlign="right">
                      <Button circular icon="like" color="red" />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Grid>
                  <StyledText
                    fontSize="30px"
                    fontWeight="bold"
                    padding="0 0 1rem 0"
                  >
                    10k
                  </StyledText>
                </Grid>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={12}>
                      <StatInfoContainer>
                        <StyledText color="#21ba45" fontWeight="bold">10%</StyledText>
                        &nbsp;
                        <StyledText>Growth.</StyledText>
                      </StatInfoContainer>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </StyledSegment>
            </Grid.Column>
            <Grid.Column>
              <StyledSegment>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={12}>
                      <StyledText>
                        Total Comments
                      </StyledText>
                      <StyledText>
                        (Last 30 Days)
                      </StyledText>
                    </Grid.Column>
                    <Grid.Column width={4} textAlign="right">
                      <Button circular icon="comments" color="yellow" />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Grid>
                  <StyledText
                    fontSize="30px"
                    fontWeight="bold"
                    padding="0 0 1rem 0"
                  >
                    100k
                  </StyledText>
                </Grid>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={12}>
                      <StatInfoContainer>
                        <StyledText color="#21ba45" fontWeight="bold">10%</StyledText>
                        &nbsp;
                        <StyledText>Growth.</StyledText>
                      </StatInfoContainer>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </StyledSegment>
            </Grid.Column>
            <Grid.Column>
              <StyledSegment>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={12}>
                      <StyledText>
                        Total Views
                      </StyledText>
                      <StyledText>
                        (Last 30 Days)
                      </StyledText>
                    </Grid.Column>
                    <Grid.Column width={4} textAlign="right">
                      <Button circular icon="line graph" color="purple" />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Grid>
                  <StyledText
                    fontSize="30px"
                    fontWeight="bold"
                    padding="0 0 1rem 0"
                  >
                    100k
                  </StyledText>
                </Grid>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={12}>
                      <StatInfoContainer>
                        <StyledText color="#21ba45" fontWeight="bold">10%</StyledText>
                        &nbsp;
                        <StyledText>Growth.</StyledText>
                      </StatInfoContainer>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </StyledSegment>
            </Grid.Column>
          </Grid>
        </Content>
      </Container>
    </Tab.Pane>
  );
};

export default StatisticTab;
