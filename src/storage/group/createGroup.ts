/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storageConfig';
import { findAllGroups } from './findAllGroups';

export async function createGroup(groupName: string) {
	try {

		const storegGroups = await findAllGroups();

		const data = JSON.stringify([...storegGroups, groupName]);

		await AsyncStorage.setItem(GROUP_COLLECTION, data);
	} catch (error) {
		throw error;
	}
}