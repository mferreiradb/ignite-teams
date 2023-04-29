import React, { useState } from 'react';
import * as Styled from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Hightlight';
import { GroupCard } from '@components/GroupCard';
import { FlatList } from 'react-native';
import { EmptyList } from '@components/EmptyList';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export function Groups() {

	const [ groups, setGroups ] = useState<string[]>([]);

	const navigation = useNavigation();

	function handleNewGroup() {
		navigation.navigate('newGroup');
	}

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
						title={item} />
				)}
			/>

			<Button title='Criar turma' onPress={handleNewGroup} />
		</Styled.Container>
	);
}
