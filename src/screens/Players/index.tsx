import React, { useCallback, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import * as Styled from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Hightlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { PlyerCard } from '@components/PlayerCard';
import { EmptyList } from '@components/EmptyList';
import { Button } from '@components/Button';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { findPlayersByGroup } from '@storage/player/findPlayersByGroup';
import { createPlayerByGroup } from '@storage/player/createPlayerByGroup';
import { AppError } from '@utils/AppError';

interface RoutParams {
	group: string;
}

export function Players() {
	const [ team, setTeam ] = useState('Time A');
	
	const [ players, setPlayers] = useState<string[]>([]);

	const [ nickName, setNickName] = useState('');

	const route = useRoute();

	const { group } = route.params as RoutParams;

	async function handleAddPlayer() {

		const trimNickName = nickName.trim();

		if (trimNickName.length == 0) {
			setNickName('');
			return Alert.alert('Novo grupo', 'Informe o nome ou nick da pessoa.');
		}

		const newPlayer = {name: trimNickName, team };

		try {
			setNickName('');
			
			await createPlayerByGroup(newPlayer, group);

			const players = await findPlayersByGroup(group);

			console.log(players);
			
		} catch(error) {
			if (error instanceof AppError) {
				return Alert.alert('Novo jogardor', error.message);
			} else {
				return Alert.alert('Novo jogardor', 'Não foi possível cadastrar o jogador.');
			}
		}
	}

	/* 	async function fetchPlayers() {
		try {
			const players = await findPlayersByGroup();
			setPlayers(players);
		} catch(error) {
			console.log(error);
		}
	}

	useFocusEffect(useCallback(() => {
		fetchPlayers();
	}, [players])); */

	return (
		<Styled.Container>
			<Header showBackButton />

			<Highlight title={group} subtitle='Adicione sua turma e divida os times' />

			<Styled.Form>
				<Input
					placeholder='Nome/Nick da pessoa'
					autoCorrect={false}
					onChangeText={setNickName}
					value={nickName}
				/>

				<ButtonIcon name='add' onPress={handleAddPlayer} />
			</Styled.Form>

			<Styled.HeaderList>
				<FlatList
					data={['Time A', 'Time B']}
					keyExtractor={item => item}
					renderItem={({ item }) => <Filter key={item} title={item} isActive={item === team} onPress={() => setTeam(item)} />}
					horizontal
				/>

				<Styled.PlayersNumber>
					{players.length}
				</Styled.PlayersNumber>
			</Styled.HeaderList>

			<FlatList
				data={players}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<PlyerCard onRemove={() => null} key={item} name={item} />
				)}
				ListEmptyComponent={() => (
					<EmptyList message='Adicione novos jogadores.' />
				)}
				contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
			/>

			<Button title='Remover turma' type='SECONDARY' />
		</Styled.Container>
	);
}