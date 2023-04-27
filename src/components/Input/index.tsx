import React from 'react';
import { TextInputProps } from 'react-native';
import * as Styled from './styles';
import { useTheme } from 'styled-components/native';

export function Input({ ...rest }: TextInputProps) {

	//useTheme torna acessível o tema da nossa aplicação
	//Podemos acessar o tema tanto diretamente (const theme = useTheme) para acessar todos os estilos, quando da forma desestruturada
	const { COLORS } = useTheme();
    
	return (
		<Styled.Container
			placeholderTextColor={COLORS.GRAY_300}
			{...rest}
		/>
	);
}