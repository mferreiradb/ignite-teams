import React from 'react';
import * as Styled from './styles';

import logo from '@assets/logo.png';
import { useNavigation } from '@react-navigation/native';

interface Props {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false}: Props) {

	const navigation = useNavigation();

	function handleGoBack() {
		navigation.navigate('groups');
	}

	return (
		<Styled.Container>
			{
				showBackButton &&
				<Styled.BackButton onPress={handleGoBack}>
					<Styled.BackIcon />        
				</Styled.BackButton>
			}
            
			<Styled.Logo source={logo}/>
		</Styled.Container>
	);
}