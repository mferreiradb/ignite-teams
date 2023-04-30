/* eslint-disable no-useless-catch */
import { findAllGroups } from './findAllGroups';
import { GROUP_COLLECTION } from '@storage/storageConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';

export async function createGroup(groupName: string) {
	try {

		const storedGroups = await findAllGroups();

		const groupAlreadyExists = storedGroups.includes(groupName); //BUSCA O VALOR DO PARAMETRO DENTRO DO ARRAY

		if (groupAlreadyExists) {
			throw new AppError('Group already exists.');
		}

		const data = JSON.stringify([...storedGroups, groupName]);

		await AsyncStorage.setItem(GROUP_COLLECTION, data);
	} catch (error) {
		throw error;
	}
}