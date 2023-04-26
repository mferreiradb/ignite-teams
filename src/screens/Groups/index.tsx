import React, { useState } from 'react';
import * as Styled from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Hightlight';
import { GroupCard } from '@components/GroupCard';
import { FlatList } from 'react-native';

export function Groups() {

	const [ groups, setGroups ] = useState<string[]>(['Turma 1', 'Turma 2', 'Turma 3']);

	return (
		<Styled.Container >
			<Header />

			<Highlight title='Turmas' subtitle='Jogue com a sua turma' />

			<FlatList
				data={groups}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<GroupCard
						key={item}
						title={item} />
				)}
			/>
		</Styled.Container>
	);
}
