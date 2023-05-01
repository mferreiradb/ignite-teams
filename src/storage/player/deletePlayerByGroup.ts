/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage';

import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { findPlayersByGroup } from './findPlayersByGroup';

export async function deletePlayerByGroup(playerName: string, group: string) {
	try {
		const storage = await findPlayersByGroup(group);

		const filtered = storage.filter((player) => player.name !== playerName); //Reconstroi o array trazendo todos os jogadores, exceto o jogador que tiver o nome igual ao nome passado no parametro da funcao

		const players = JSON.stringify(filtered); //Pega o valor inicial de storage e substitui pelo valor atualizado, visto que filtered é um subconjunto de de storage

		await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);

	} catch(error) {
		throw error;
	}
}