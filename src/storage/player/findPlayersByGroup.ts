/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { PlayerStorageDTO } from './PLAYERSTORAGEDTO';

export async function findPlayersByGroup(group: string) {
	try {
		const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);

		const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];

		return players;
	} catch(error) {
		throw error;
	}
}