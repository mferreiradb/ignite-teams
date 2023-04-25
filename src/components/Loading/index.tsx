import React from 'react';
import * as Component from './styles';

export function Loading() {
	return (
		<Component.Container>
			<Component.LoadIndicator />
		</Component.Container>
	);
}