import React from 'react';
import * as Styled from './styles';

import logo from '@assets/logo.png';

export function Header() {
	return (
		<Styled.Container>
			<Styled.Logo source={logo}/>
		</Styled.Container>
	);
}