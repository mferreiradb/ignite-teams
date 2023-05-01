/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { findAllGroups } from '@storage/group/findAllGroups';
import { PLAYER_COLLECTION, GROUP_COLLECTION } from '@storage/storageConfig';


export async function deleteGroupByName(groupDeleted: string) {
	try {
		const storedGroups = await findAllGroups();
		const groups = storedGroups.filter((group) => group !== groupDeleted); //Cria um novo array contendo todos os grupos, exceto o gupo passado no parametro

		await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups)); //Sobescreve a coleção de grupos, de forma que a coleção passa a ter todos os grupos, menos o grupo removido
		
		await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);//Remove toda a chave especificada
		//Remove os jogadores que possuem vinculo com o grupo deletado
        
	} catch(error) {
		throw error;
	}
}