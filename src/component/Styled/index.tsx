import styled from "styled-components";

interface TextProps {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  padding?: string;
  lineHeight?: string;
  align?: string;
}

export const StyledText = styled.div`
  font-size: ${(props: TextProps) => props.fontSize || '1rem'};
  font-weight: ${(props: TextProps) => props.fontWeight || 'normal'};
  color: ${(props: TextProps) => props.color || 'rgba(0, 0, 0, 0.85);'};
  padding: ${(props: TextProps) => props.padding || ''};
  line-height: ${(props: TextProps) => props.lineHeight || ''};
  text-align: ${(props: TextProps) => props.align};
`;