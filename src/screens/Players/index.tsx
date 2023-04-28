import React from 'react';
import * as Styled from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Hightlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';

export function Players() {
	return (
		<Styled.Container>
			<Header showBackButton />

			<Highlight title='Nome da turma' subtitle='Adicione sua turma e divida os times' />

			<Styled.Form>
				<Input placeholder='Nome/Nick da pessoa' autoCorrect={false} />

				<ButtonIcon name='add' />
			</Styled.Form>

			<Filter title='Time A' isActive/>
		</Styled.Container>
	);
}