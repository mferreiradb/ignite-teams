import React from 'react';
import * as Styled  from './styles';

import { TouchableOpacityProps } from 'react-native';

// Props extende TouchableOpacityProps para que seja possível utilizar os métodos de TouchableOpacityProps, como o evento onPress()
interface Props extends TouchableOpacityProps {
    title: string;
}

//A desestruturação passada no parâmetro torna acessíveis os atributos e métodos de [Props] e de [TouchableOpacityProps] TouchableOpacityProps
// ...rest é literalmete como "Qualquer outra propriedade passada não explicitamente para o componente"
export function GroupCard({ title, ...rest }: Props) {
	return (
		<Styled.Container {...rest}>
			<Styled.IconUSers />
            
			<Styled.Title>
				{title}
			</Styled.Title>
		</Styled.Container>
	);
}

// Só é possível extender e utilizar a classe TouchableOpacityProps desta forma, devido a forma que fizemos a declaração do componente no arquivo styles.ts:

//export const Container = styled(TouchableOpacity)``;