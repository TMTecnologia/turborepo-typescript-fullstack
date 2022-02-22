import styled from "styled-components/native";

import { Title } from "@root/atomic/atoms";

export const Container = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    height: 0,
    width: 0,
  },
  shadowRadius: 10,
  shadowOpacity: 0.1,
})`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.title};
`;

export const CardTitle = styled(Title)`
  flex: 1;
  margin-left: 10px;
  color: ${({ theme }) => theme.background};
`;
