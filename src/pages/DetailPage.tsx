import useSwr from 'swr';
import { getRouter } from '../routes';
import { NextPage } from 'next';
import Page from '../component/Page';
import { Container, Tab } from 'semantic-ui-react';
import styled from 'styled-components';
import StatisticTab from '../component/Profile/StatisticTab';
import PersonalTab from '../component/Profile/PersonalTab';

const fetcher = (url: string) => fetch(url).then((res) => res.json())
const StyledContainer = styled(Container)`
  padding: 1.5rem 0;
`;

const StyledTab = styled(Tab)`
  > .ui.menu {
    margin: 0 !important;
  }
  > .ui.segment {
    border: none;
    box-shadow: none;
    background: #E6E9F1;
    margin: 0 !important;
  }
`;

const DetailPage: NextPage<PageProps> = ({
  renderLoadingPage,
  renderErrorPage,
}) => {
  const router = getRouter();
  const { data, error } = useSwr(`/api/user/${router?.query?.id}`, fetcher);
  const panes = [
    {
      menuItem: 'Profile Content',
      render: () => <PersonalTab data={data}/>,
    },
    {
      menuItem: 'Statistics',
      render: () => <StatisticTab data={data}/>,
    },
  ];
  if(error){
    return renderErrorPage();
  }
  if(!data){
    return renderLoadingPage();
  }

  return (
    <Page data={data}>
      <StyledContainer>
        <StyledTab menu={{ secondary: true, pointing: true }} panes={panes} />
      </StyledContainer>
    </Page>
  )
}



export default DetailPage;
