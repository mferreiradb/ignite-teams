import React, { useState } from 'react';
import * as Styled from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Hightlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { FlatList } from 'react-native';

export function Players() {
	const [ team, setTeam ] = useState('Time A');
	const [ players, setPlayers] = useState([]);

	return (
		<Styled.Container>
			<Header showBackButton />

			<Highlight title='Nome da turma' subtitle='Adicione sua turma e divida os times' />

			<Styled.Form>
				<Input placeholder='Nome/Nick da pessoa' autoCorrect={false} />

				<ButtonIcon name='add' />
			</Styled.Form>

			<Styled.HeaderList>
				<FlatList
					data={['Time A', 'Time B']}
					keyExtractor={item => item}
					renderItem={({ item }) => <Filter title={item} isActive={item === team} onPress={() => setTeam(item)} />}
					horizontal
				/>

				<Styled.PlayersNumber>
					{players.length}
				</Styled.PlayersNumber>
			</Styled.HeaderList>

			
		</Styled.Container>
	);
}