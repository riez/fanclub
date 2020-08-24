import { FunctionComponent, useCallback } from "react";
import useSwr from "swr";
import {
  Grid,
  Segment,
  Image,
  Icon,
  Container,
  Button,
  Rating,
} from "semantic-ui-react";
import styled from "styled-components";
import Slider from "react-slick";
import { Link, Router } from "../routes";
import Page from "../component/Page";
import { StyledText } from "../component/Styled";
import { UserModel } from "../models/user";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const InnerContainer = styled(Segment)`
  box-shadow: none !important;
  border: none !important;
  background: transparent !important;
`;

const StyledGrid = styled(Grid)`
  background: white;
  border-radius: 10px;
  box-shadow: 27px 27px 72px #f5f5f5, -27px -27px 72px #ffffff;
`;

const StyledButton = styled(Button)`
  border-radius: 50px !important;
`;

const StyledRow = styled(Grid.Row)`
  text-align: center;
`;

const SalesPointContent = styled(Grid.Column)`
  text-align: center;
`;

const ProfileContainer = styled(Grid.Column)`
  text-align: center;
`;

const StyledSegment = styled(Segment)`
  box-shadow: none !important;
  border: none !important;
`;

const MediaImage = styled.img`
  border-radius: 10px;
  padding: 5px;
`;

const StyledSlider = styled(Slider)``;

const IconContainer = styled(Grid.Row)`
  i {
    font-size: 16px;
    color: #838d95;
  }
  i + i {
    margin-left: 1.2rem;
  }
`;

const DescriptionContainer = styled.div`
  padding: 2rem;
`;

const BrowseContainer = styled.div`
  padding: 2rem 0;
`;

const ContentContainer = styled.div`
  position: relative;
  top: -1.5rem;
`;

const Homepage: FunctionComponent<PageProps> = ({
  renderLoadingPage,
  renderErrorPage,
}) => {
  const { data: dataUsers, error: errorUsers } = useSwr('/api/users?results=9', fetcher);
  let settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 4,
    initialSlide: 0,
  };

  const users = dataUsers?.items;

  const createAndRedirectToDetails = useCallback( async (data: UserModel) => {
    const response = await fetch(`/api/user/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...data, postcode: String(data.postcode)}),
      })
      const result = await response.json();
      Router.push(`/user/${result.id}`);
  }, []);

  const goToDetails = (item: UserModel) => () => createAndRedirectToDetails(item);
  
  if(errorUsers){
    return renderErrorPage();
  }
  if(!dataUsers){
    return renderLoadingPage();
  }

  return (
    <Page background="#E6E9F1" hideIntroHeader>
      <Container>
        <InnerContainer>
          <div>
            <Grid columns={3} stackable>
              {(users || []).map((item: UserModel, index) => (
                <ProfileContainer key={item?.id || index} onClick={goToDetails(item)}>
                  <StyledSegment>
                    <StyledSlider {...settings}>
                      {[0, 1, 2, 3, 4, 5].map((_, index) => (
                        <MediaImage key={index} src={item?.picture} />
                      ))}
                    </StyledSlider>
                    <ContentContainer>
                      <Grid columns="equal" textAlign="center">
                        <Grid.Row>
                          <Grid.Column verticalAlign="middle">
                            <Rating
                              icon="star"
                              defaultRating={0}
                              maxRating={1}
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <div style={{ textAlign: "center" }}>
                              <Image
                                src={item?.picture}
                                circular
                                style={{
                                  background: "white",
                                  padding: ".5rem",
                                }}
                              />
                            </div>
                          </Grid.Column>
                          <Grid.Column verticalAlign="middle">
                            <IconContainer>
                              <Icon name="paper plane outline" />
                              <Icon name="ellipsis horizontal" />
                            </IconContainer>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                      <StyledText fontSize="20px" fontWeight="bold">
                        {item?.username}
                      </StyledText>
                      <StyledText color="#879297">
                        {item.name}
                      </StyledText>

                      <DescriptionContainer>
                        <StyledText color="#666F70">
                          Lifestyle Coach and Photographer delivering best
                          images
                        </StyledText>
                      </DescriptionContainer>
                      <Grid columns={3}>
                        <Grid.Row>
                          <Grid.Column>
                            <StyledText fontSize="20px" fontWeight="bold">
                              299
                            </StyledText>
                            <StyledText color="#879297">Media</StyledText>
                          </Grid.Column>
                          <Grid.Column>
                            <StyledText fontSize="20px" fontWeight="bold">
                              1,8m
                            </StyledText>
                            <StyledText color="#879297">Followers</StyledText>
                          </Grid.Column>
                          <Grid.Column>
                            <StyledText fontSize="20px" fontWeight="bold">
                              100
                            </StyledText>
                            <StyledText color="#879297">Following</StyledText>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </ContentContainer>
                  </StyledSegment>
                </ProfileContainer>
              ))}
            </Grid>
          </div>
          <StyledSegment>
            <StyledGrid columns={3} divided stackable>
              <Grid.Row>
                <SalesPointContent>
                  <StyledText fontSize="20px" fontWeight="bold">
                    Engagement Report
                  </StyledText>
                  <StyledText padding="1rem 0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi in ex eu lorem pharetra mattis sed nec orci. Nunc quis
                    luctus elit. Vivamus laoreet, quam ac pulvinar condimentum,
                    purus lectus tincidunt diam, in rhoncus ex est eu nunc.
                  </StyledText>
                  <Image src="/report.svg" />
                </SalesPointContent>
                <SalesPointContent>
                  <StyledText fontSize="20px" fontWeight="bold">
                    Increase Converion
                  </StyledText>
                  <StyledText padding="1rem 0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi in ex eu lorem pharetra mattis sed nec orci. Nunc quis
                    luctus elit. Vivamus laoreet, quam ac pulvinar condimentum,
                    purus lectus tincidunt diam, in rhoncus ex est eu nunc.
                  </StyledText>
                  <Image src="/purchase.svg" />
                </SalesPointContent>
                <SalesPointContent>
                  <StyledText fontSize="20px" fontWeight="bold">
                    Happy Fans
                  </StyledText>
                  <StyledText padding="1rem 0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi in ex eu lorem pharetra mattis sed nec orci. Nunc quis
                    luctus elit. Vivamus laoreet, quam ac pulvinar condimentum,
                    purus lectus tincidunt diam, in rhoncus ex est eu nunc.
                  </StyledText>
                  <Image src="/news.svg" />
                </SalesPointContent>
              </Grid.Row>
            </StyledGrid>
          </StyledSegment>
          <BrowseContainer>
            <StyledRow>
              <Link route={'/users'}>
              <StyledButton color="pink" size="huge">
                Browse Influencer
              </StyledButton></Link>
            </StyledRow>
          </BrowseContainer>
        </InnerContainer>
      </Container>
    </Page>
  );
};

export default Homepage;
