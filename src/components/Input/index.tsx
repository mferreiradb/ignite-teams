import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import * as Styled from './styles';
import { useTheme } from 'styled-components/native';

//Tipagem feita para podermos acessar o componente na arvolre de elementos da DOM
interface Props extends TextInputProps{
	inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: Props) {

	//useTheme torna acessível o tema da nossa aplicação
	//Podemos acessar o tema tanto diretamente (const theme = useTheme) para acessar todos os estilos, quando da forma desestruturada
	const { COLORS } = useTheme();
    
	return (
		<Styled.Container
			ref={inputRef}
			placeholderTextColor={COLORS.GRAY_300}
			{...rest}
		/>
	);
}