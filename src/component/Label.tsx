import { FunctionComponent } from "react";
import { Segment, Label, SemanticSIZES } from "semantic-ui-react";
import styled from "styled-components";

const StyledLabel = styled(Label)`
  background: ${(props: { customcolor: string }) =>
    props.customcolor ? props.customcolor : "#F4F7FD"} !important;
  
`;

type Props = {
  children: React.ReactNode;
  circular?: boolean;
  color?: string;
  size?: SemanticSIZES;
}

const CustomLabel: FunctionComponent<Props> = ({
  children,
  circular,
  color,
  size,
}) => {
  return (
    <StyledLabel customcolor={color} circular={circular} size={size}>
      {children}
    </StyledLabel>
  );
};

export default CustomLabel;
