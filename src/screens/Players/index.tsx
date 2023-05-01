import React, { useEffect, useState, useRef } from 'react';
import { Alert, FlatList, TextInput } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Hightlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { PlyerCard } from '@components/PlayerCard';
import { EmptyList } from '@components/EmptyList';
import { Button } from '@components/Button';
import { Loading } from '@components/Loading';

import { AppError } from '@utils/AppError';

import { createPlayerByGroup } from '@storage/player/createPlayerByGroup';
import { findPlayersByGroupAndTeam } from '@storage/player/findPlayersByGroupAndTeam';
import { PlayerStorageDTO } from '@storage/player/PLAYERSTORAGEDTO';
import { deletePlayerByGroup } from '@storage/player/deletePlayerByGroup';
import { deleteGroupByName } from '@storage/group/deleteGroupByName';

interface RoutParams {
	group: string;
}

export function Players() {
	const [ isLoading, setIsLoading ] = useState(true);
	const [ team, setTeam ] = useState('Time A');
	const [ players, setPlayers] = useState<PlayerStorageDTO[]>([]);
	const [ nickName, setNickName] = useState('');

	const navigation = useNavigation();
	const route = useRoute();
	const { group } = route.params as RoutParams;

	const newPlayerNameInputRef = useRef<TextInput>(null); //valor inicial

	async function handleAddPlayer() {

		const trimNickName = nickName.trim();

		if (trimNickName.length == 0) {
			setNickName('');
			return Alert.alert('Novo grupo', 'Informe o nome ou nick da pessoa.');
		}

		const newPlayer = {name: trimNickName, team };

		try {
			await createPlayerByGroup(newPlayer, group);

			newPlayerNameInputRef.current?.blur();
			
			setNickName('');

			fetchPlayersByTeam();
			
		} catch(error) {
			if (error instanceof AppError) {
				return Alert.alert('Novo jogardor', error.message);
			} else {
				return Alert.alert('Novo jogardor', 'Não foi possível cadastrar o jogador.');
			}
		}
	}

	async function handleDeletePlayer(playerName: string) {
		try {			
			await deletePlayerByGroup(playerName, group);
			
			fetchPlayersByTeam();
		} catch(error) {
			console.log(error);
			return Alert.alert('Excluir jogador', 'Não foi possível excluir o jogador.');
		}
	}

	async function fetchPlayersByTeam() {
		try {
			setIsLoading(true);

			const playersByTeam = await findPlayersByGroupAndTeam(group, team);
			setPlayers(playersByTeam);
			
		} catch(error) {
			console.log(error);
			Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time.');
		} finally {
			setIsLoading(false);
		}
	}

	async function deleteGroup() {
		try {
			await deleteGroupByName(group);
			navigation.navigate('groups');
		} catch(error) {
			return Alert.alert('Remover Grupo', 'Não foi possivel remover o gorupo');
		}
	}

	async function handleRemoveGroup() {
		Alert.alert('Remover Grupo', 'Deseja remover o grupo?', [
			{
				text: 'Não',
				style: 'cancel',
			},
			{
				text: 'Sim',
				onPress: () => deleteGroup()
			}
		]);
	}

	useEffect(() => {
		fetchPlayersByTeam();
	}, [team]);
	

	return (
		<Styled.Container>
			<Header showBackButton />

			<Highlight title={group} subtitle='Adicione sua turma e divida os times' />

			<Styled.Form>
				<Input
					inputRef={newPlayerNameInputRef}
					placeholder='Nome/Nick da pessoa'
					autoCorrect={false}
					onChangeText={setNickName}
					value={nickName}
					onSubmitEditing={handleAddPlayer} //Determina qual função deve ser executada ao clicar no botao de confirmar do teclado
					returnKeyType='emergency-call' //Determina qual texto deve ser mostrado para a tecla de retorno
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

			{
				!isLoading ? <Loading />
					: <FlatList
						data={players}
						showsVerticalScrollIndicator={false}
						keyExtractor={(item) => item.name}
						renderItem={({ item }) => (
							<PlyerCard
								key={item.name}
								name={item.name}
								onRemove={() => handleDeletePlayer(item.name)}/>
						)}
						ListEmptyComponent={() => (
							<EmptyList message='Adicione novos jogadores.' />
						)}
						contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
					/>
			}

			<Button title='Remover turma' type='SECONDARY' onPress={handleRemoveGroup} />
		</Styled.Container>
	);
}