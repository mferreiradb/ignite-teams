import React from 'react';
import * as Styled from './styles';
import { ButtonIcon } from '@components/ButtonIcon';

interface Props {
    name: string;
    onRemove: () => void;
}

export function PlyerCard({ name, onRemove }: Props) {
	return (
		<Styled.Container>
			<Styled.Icon name='person' />
            
			<Styled.Name>
				{name}
			</Styled.Name>
			
			<ButtonIcon
				name='close'
				type='SECONDARY'
				onPress={onRemove}
			/>
		</Styled.Container>
	);
}