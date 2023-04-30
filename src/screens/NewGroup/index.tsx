import React, { useState } from 'react';
import * as Styled from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Hightlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { createGroup } from '@storage/group/createGroup';
import { Alert } from 'react-native';
import {AppError} from '@utils/AppError';

export function NewGroup() {

	const navigation = useNavigation();

	const [ group, setGroup ] = useState('');

	async function handleNew() {
		try {

			const newGroup = group.trim();

			if (newGroup.length == 0) {
				setGroup('');
				return Alert.alert('Novo grupo', 'Informe o nome da turma.');
			}

			await createGroup(newGroup);
			navigation.navigate('players', { group: newGroup });

		} catch(error) {
			if (error instanceof AppError) {
				return Alert.alert('Novo grupo', error.message);
			} else {
				console.log(error);
				return Alert.alert('Novo grupo', 'Não foi possível criar o gupo.');
			}
		}
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