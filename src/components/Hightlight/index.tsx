import React from 'react';
import * as Styled from './styles';

interface Props {
    title: string;
    subtitle: string;
}

export function Highlight({ title, subtitle }: Props) {
	return (
		<Styled.Container>
			<Styled.Title>
				{title}
			</Styled.Title>

			<Styled.SubTitle>
				{subtitle}
			</Styled.SubTitle>
		</Styled.Container>  
	);
}