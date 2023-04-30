import React, { useState, useCallback } from 'react';
import * as Styled from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Hightlight';
import { GroupCard } from '@components/GroupCard';
import { FlatList } from 'react-native';
import { EmptyList } from '@components/EmptyList';
import { Button } from '@components/Button';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { findAllGroups } from '@storage/group/findAllGroups';

export function Groups() {

	const [ groups, setGroups ] = useState<string[]>([]);

	const navigation = useNavigation();

	function handleNewGroup() {
		navigation.navigate('newGroup');
	}

	function handleOpenGroup(group: string) {
		navigation.navigate('players', {group});
	}

	async function fetchGroups() {
		try {
			const data = await findAllGroups();
			setGroups(data);
		} catch(error) {
			console.log(error);
		}
	}

	useFocusEffect(useCallback(() => {	
		fetchGroups();
	}, []));

	return (
		<Styled.Container >
			<Header />

			<Highlight title='Turmas' subtitle='Jogue com a sua turma' />

			<FlatList
				data={groups}
				keyExtractor={(item) => item}
				contentContainerStyle={groups.length === 0 && { flex: 1 }}
				ListEmptyComponent={() => (
					<EmptyList message='Não há turmas cadastadas' />
				)}
				renderItem={({ item }) => (
					<GroupCard
						key={item}
						title={item}
						onPress={() => handleOpenGroup(item)} />
				)}
			/>

			<Button title='Criar turma' onPress={handleNewGroup} />
		</Styled.Container>
	);
}
