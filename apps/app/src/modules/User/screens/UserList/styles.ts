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

export const Pressable = styled.Pressable`
  width: 50px;
  height: 50px;
  border-radius: 25px;

  background: #ff0066;

  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 10;
`;
