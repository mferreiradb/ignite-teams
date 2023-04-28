import React from 'react';
import * as Styled from './styles';
import { TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps, Styled.FilterStyleProps {
    title: string;
}

export function Filter({ title, isActive = false, ...rest }: Props) {
	return (
		<Styled.Container
			isActive={isActive}
			{...rest}
		>
			<Styled.Title>
				{title}
			</Styled.Title>
		</Styled.Container>
	);
}