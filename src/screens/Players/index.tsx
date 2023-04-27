import React from 'react';
import * as Styled from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Hightlight';

export function Players() {
	return (
		<Styled.Container>
			<Header showBackButton />

			<Highlight title='Nome da turma' subtitle='Adicione sua turma e divida os times' />
		</Styled.Container>
	);
}