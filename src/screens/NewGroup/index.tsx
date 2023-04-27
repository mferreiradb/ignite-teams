import React from 'react';
import * as Styled from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Hightlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

export function NewGroup() {
	return (
		<Styled.Container>
			<Header showBackButton />

			<Styled.Content>
				<Styled.Icon />

				<Highlight title='Nova Turma' subtitle='Crie a turma para adicionar as pessoas' />

				<Input
					placeholder='Nome da turma'
					
				/>

				<Button style={{ marginTop: 20}} title='Criar' />

			</Styled.Content>
		</Styled.Container>
	);
}