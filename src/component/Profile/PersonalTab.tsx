import { FunctionComponent } from "react";
import {
  Icon,
  Table,
  Tab,
} from "semantic-ui-react";
import styled from "styled-components";
import { StyledText } from "../Styled";
import { UserModel } from "../../models/user";

const Container = styled.div`
    padding: 16px;
`;

type Props = {
  data: UserModel
}

const PersonalTab: FunctionComponent<Props> = ({data}) => {
  return (
    <Tab.Pane attached={false}>
      <Container>
        <StyledText fontSize="16px" fontWeight="bold">
          #Profile
        </StyledText>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">Biography</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>
                <Icon name="user" /> Name
              </Table.Cell>
              <Table.Cell>{data?.name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing>
                <Icon name="user" /> Gender
              </Table.Cell>
              <Table.Cell>{data?.gender?.toUpperCase()}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing>
                <Icon name="location arrow" /> Address
              </Table.Cell>
              <Table.Cell>{data?.address}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing>
                <Icon name="flag" /> Nationality
              </Table.Cell>
              <Table.Cell>{data?.nat}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
      </Tab.Pane>
  );
};

export default PersonalTab;
