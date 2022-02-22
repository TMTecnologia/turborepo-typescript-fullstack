import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: ${({ theme }) => theme.background};
  padding: 30% 10% 0 10%;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.title};
`;
