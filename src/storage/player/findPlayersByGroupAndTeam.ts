/* eslint-disable no-useless-catch */
import { findPlayersByGroup } from './findPlayersByGroup';

export async function findPlayersByGroupAndTeam(group: string, team: string) {
	try {
		const storage = await findPlayersByGroup(group);

		const player = storage.filter(player => player.team === team);

		return player;

	} catch(error){
		throw error;
	}
}