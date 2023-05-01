/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { findPlayersByGroup } from './findPlayersByGroup';
import { AppError } from '@utils/AppError';
import { PLAYER_COLLECTION } from '@storage/storageConfig';

import { PlayerStorageDTO } from './PLAYERSTORAGEDTO';

export async function createPlayerByGroup(newPlayer: PlayerStorageDTO, group: string) {
	try {

		const storedPlayers = await findPlayersByGroup(group);

		const playerAlreadyExists = storedPlayers.filter((player) => player.name === newPlayer.name);

		if(playerAlreadyExists.length > 0) {
			throw new AppError('Pessoa já cadastrada.');
		}

		const data = JSON.stringify([...storedPlayers, newPlayer]);

		await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, data);
		/* 
			@ignite-teams:players-TESTE: ['PLAYER 1', 'PLAYER 2', 'PLAYER 3']

			@ignite-teams:players-ROCKET: ['PLAYER 1', 'PLAYER 2', 'PLAYER 3']

			@ignite-teams:players-TIC: ['PLAYER 1', 'PLAYER 2', 'PLAYER 3']
		*/
	} catch (error) {
		throw error;
	}
}