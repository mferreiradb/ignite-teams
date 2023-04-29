import React, { useState } from 'react';
import * as Styled from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Hightlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';

export function NewGroup() {

	const navigation = useNavigation();

	const [ group, setGroup ] = useState('');

	function handleNew() {
		navigation.navigate('players', { group });
	}

	return (
		<Styled.Container>
			<Header showBackButton />

			<Styled.Content>
				<Styled.Icon />

				<Highlight title='Nova Turma' subtitle='Crie a turma para adicionar as pessoas' />

				<Input
					placeholder='Nome da turma'
					onChangeText={setGroup}
					value={group}
				/>

				<Button style={{ marginTop: 20}} title='Criar' onPress={handleNew} />

			</Styled.Content>
		</Styled.Container>
	);
}