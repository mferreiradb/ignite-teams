import React from 'react';
import * as Styled from './styles';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface Props extends TouchableOpacityProps {
    name: keyof typeof MaterialIcons.glyphMap; // FAZ COM QUE SEJA POSSÍVEL VERIIFICAR QUAIS OS ICONES DISPONIVEIS QUANDO REALIZARMOS O USO DO COMPONENTE
    type?: Styled.ButtonIconTypeStyleProps;
}

export function ButtonIcon({ type = 'PRIMARY', name, ...rest }: Props) {
	return (
		<Styled.Container {...rest}>
			<Styled.Icon name={name} type={type} />
		</Styled.Container>
	);
}