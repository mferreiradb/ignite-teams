import React from 'react';
import * as Styled from './styles';
import { TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps{
    title: string;
	type?: Styled.ButtonTypeStyleProps;
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
	return (
		<Styled.Container
			type={type}
			{...rest}>
			<Styled.Title>
				{title}
			</Styled.Title>
		</Styled.Container>
	);
}