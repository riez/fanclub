import { useSWRPages,} from "swr";
import { useCallback,} from "react";
import { getRouter, Router} from "../routes";
import { NextPage } from "next";
import {
  Container,
  Grid,
  Segment,
  Rating,
  Image,
  Icon,
  Button,
  List,
  Card,
  Loader,
} from "semantic-ui-react";
import styled from "styled-components";
import Page from "../component/Page";
import { StyledText } from "../component/Styled";
import Slider from "react-slick";
import { serialize } from "../utils";
import useSWR from "swr";
import { UserModel } from "../models/user";
import InfiniteScroll from "react-infinite-scroller";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const InnerContainer = styled(Segment)`
  box-shadow: none !important;
  border: none !important;
  background: transparent !important;
`;

const StyledCard = styled(Card)`
  margin: 0 auto !important;
`;

const StyledList = styled(List)`
  overflow: auto;
  height: 300px;
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

const LoadContainer = styled.div`
  padding-top: 1rem;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  position: relative;
  top: -1.5rem;
`;

const ListPage: NextPage<PageProps> = ({
  renderLoadingPage,
  renderErrorPage,
}) => {
  const router = getRouter();
  const currentQuery = router?.query || {};
  let settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 4,
    initialSlide: 0,
  };

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

  const { pages: dataList, loadMore } = useSWRPages(
    "paginate-list",
    (params) => {
      const query = {
        ...currentQuery,
        results: 9,
        page: params.offset || 1,
      };
      const { data } = params.withSWR(
        useSWR(`/api/users?${serialize(query)}`, fetcher)
      );
      if (!data) {
        return (
          <LoadContainer>
            <Loader active inline content="Loading" />
          </LoadContainer>
        );
      }
      return data?.items?.map((item: UserModel, index) => (
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
                    <Rating icon="star" defaultRating={0} maxRating={1} />
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
              <StyledText color="#879297">{item.name}</StyledText>

              <DescriptionContainer>
                <StyledText color="#666F70">
                  Lifestyle Coach and Photographer delivering best images
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
      ));
    },
    ({ data }) => {
      return data?.info?.page + 1;
    },
    [currentQuery]
  );
  return (
    <Page
      background="#E6E9F1"
      metaTitle={"User List"}
      metaDescription={
        "List of Video available on our website. Contains various species and location. Eg. Mountains, humans..."
      }
      hideIntroHeader
    >
      <Container>
        <InnerContainer>
          <InfiniteScroll loadMore={loadMore} hasMore={true}>
            <Grid columns={3} stackable>
              {dataList}
            </Grid>
          </InfiniteScroll>
        </InnerContainer>
      </Container>
    </Page>
  );
};

export default ListPage;
