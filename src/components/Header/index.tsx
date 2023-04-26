import React from 'react';
import * as Styled from './styles';

import logo from '@assets/logo.png';

interface Props {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false}: Props) {
	return (
		<Styled.Container>
			{
				showBackButton &&
				<Styled.BackButton>
					<Styled.BackIcon />        
				</Styled.BackButton>
			}
            
			<Styled.Logo source={logo}/>
		</Styled.Container>
	);
}