import React from 'react';
import * as Styled from './styles';

interface Props {
     message: string;
}

export function EmptyList({ message }: Props) {
	return (
		<Styled.Container>
			<Styled.Message>{message}</Styled.Message>
		</Styled.Container>
	);
}