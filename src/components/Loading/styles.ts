import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600}
`;

//ACESSA OS ATRIBUTOS DO COMPONENTE E FAZ COM QUE SEJA POSSÍVEL ACESSAR O THEMA 
export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) =>({
	color: theme.COLORS.GREEN_700,
	size: 50
}))``;