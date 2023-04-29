<div align='center'>
<h1>Ignite Teams</h1>

<p>Aplicação para organizar pessoas que se reúnem para jogar em times</p>
</div>

## IMAGENS PARA DIFERENTES DENSIDADES DE TELA

- Nomeamos as imagens com o mesmo nome, seguido de `@2x`, `@3x`, etc. E depois importar apenas a imagem pelo nome
    - Ex: caso possua 3 imagens chamdas `logo.png`, `logo@2x.png` e `logo@3x.png`, basta realizar o import chamando por `logo.png`, que será utilizado o arquivo que melhor se enquadrar

    - Utilizamos este estratégia para que o dispositivo carregue a imagem mais adequanda para aquela densidade de pixels
    
    - Podemos utilizar esta opção a partir do figma, exportando com diversos tamanhos

## PATH MAPPING

- Melhor forma de importar os arquivos

- Criamos um Alias apontando para os caminhos desejados

**babel-plugin-module-resolver**

    npm install --save-dev babel-plugin-module-resolver

- Alteramos o arquivo `babel.config.js`

                module.exports = function(api) {
                    api.cache(true);
                    return {
                        presets: ['babel-preset-expo'],
                        plugins: [
                            [
                                'module-resolver',
                                {
                                    'root': ['./src'],
                                    'alias': {
                                        '@assets': './src/assets',
                                        '@components': './src/components',
                                        '@routes': './src/routes',
                                        '@screens': './src/screens',
                                        '@storage': './src/storage',
                                        '@theme': './src/theme',
                                        '@utils': './src/utils'
                                    }
                                }
                            ]
                        ]
                    };
                };

- Alteramos o arquivo `tsconfig.json`

                {
                "extends": "expo/tsconfig.base",
                "compilerOptions": {
                    "strict": true,
                    "baseUrl": "./",
                    "paths": {
                        "@assets/*": ["./src/assets/*"],
                                    "@components/*": ["./src/components/*"],
                                    "@routes/*": ["./src/routes/*"],
                                    "@screens/*": ["./src/screens/*"],
                                    "@storage/*":[ "./src/storage/*"],
                                    "@theme/*": ["./src/theme/*"],
                                    "@utils/*": ["./src/utils/*"]
                    }
                }
                }

## UTILIZANDO STYLED COMPONENT

**Instalação**

                    npm install styled-components

                    npm install --save-dev @types/styled-components @types/styled-components-react-native

**Uso**

- Com o `styled components`, podemos utilizar a mesma sintaxe utilizada na web

                import styled from 'styled-components/native';

                export const Container = styled.View`
                    flex: 1;
                    background-color: #000;
                    align-items: center;
                    justify-content: center;
                `;

                export const Title = styled.Text`
                        color: #fff;
                        font-size: 32px;
                `;

- Com isso, deixamos o código dos nossos componentes mais limpo

                import React from 'react';
                import { Container,Title } from './styles';

                export function Groups() {
                    return (
                        <Container >
                            <Title>Groups</Title>
                        </Container>
                    );
                }

*Configurando style guide da aplicação*

- `./src/theme`

                export default {
                    COLORS: {
                        WHITE: '#FFFFFF',
                
                        GREEN_700: '#00875F',
                        GREEN_500: '#00B37E',
                
                        RED: '#F75A68',
                        RED_DARK: '#AA2834',
                
                        GRAY_700: '#121214',
                        GRAY_600: '#202024',
                        GRAY_500: '#29292E',
                        GRAY_400: '#323238',
                        GRAY_300: '#7C7C8A',
                        GRAY_200: '#C4C4CC',
                        GRAY_100: '#E1E1E6'
                    },
                    FONT_FAMILY: {
                        REGULAR: 'Roboto_400Regular',
                        BOLD: 'Roboto_700Bold'
                    },
                    FONT_SIZE: {
                        SM: 14,
                        MD: 16,
                        LG: 18,
                        XL: 24
                    }
                };

- `App.tsx`

                import React from 'react';
                import { Groups } from '@screens/Groups';
                import { StatusBar } from 'react-native';
                import { ThemeProvider } from 'styled-components';
                import theme from './src/theme';

                export default function App() {
                    return (
                        <ThemeProvider theme={theme}>
                            <Groups />
                            <StatusBar
                                barStyle="light-content"
                                translucent
                            />
                        </ThemeProvider>
                    );
                }

- `./src/@types/style.d.ts`

                import styled from 'styled-components';
                import theme from '../theme';

                declare module 'styled-components' {
                    type ThemeType = typeof theme

                    // eslint-disable-next-line @typescript-eslint/no-empty-interface
                    export interface DefaultTheme extends ThemeType { }
                }

*Instalando e configurando fontes*

- Todas as fontes disponível no `Google Fonts` estão também disponíveis dentro do Expo. Basta instalar o pacote
    - Para instalar utilizamos o comando `npx expo install expo-font @expo-google-fonts/roboto`, de forma que o ultimo argumento é a fonte que desejamos instalar
    
                npx expo install expo-font @expo-google-fonts/roboto

- Após isso, basta configurar no App.tsx. A configuração é feita a partir da importação do `useFonts` e das fontes que desejamos utilizar na aplicação

- `App.tsx`

                import React from 'react';
                import { Groups } from '@screens/Groups';
                import { StatusBar } from 'react-native';
                import { ThemeProvider } from 'styled-components';
                import theme from './src/theme';
                import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
                import { Loading } from '@components/Loading';

                export default function App() {

                    //fontsLoaded recebe um valor boolean
                    const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold});

                    return (
                        <ThemeProvider theme={theme}>
                            { fontsLoaded ? <Groups /> : <Loading />}
                            <StatusBar
                                barStyle="light-content"
                                translucent
                                backgroundColor='#000'
                            />
                        </ThemeProvider>
                    );
                }

        - O if ternário verifica se as fontes da aplicação já estão carregadas. Se estiverem, irá renderizar a tela normalmente. Caso não, irá renderizar o componente de load até que as fontes seja carregadas

## Icons

- Utilizaremos a biblioteca externa `Phosphor Icons`

                npm install --save phosphor-react-native

- Para utilizar a biblioteca, também é necessária a instalação da `react-native-svg`

                npx expo install react-native-svg

    - Podemos utilizá-la de duas maneiras

            
        - diretamente no componente

                <House
                    color='#fff'
                    weight='fill'
                />
            
        - Apartir do `styles.ts`

                export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
                    color: theme.COLORS.WHITE,
                    size: 32
                }))``;

- Além disso, utilizaremos uma biblioteca nativa do expo

                import { MaterialIcons } from '@expo/vector-icons';

    - Podemos utilizá-la de duas maneiras
        
        - diretamente no componente

                <MaterialIcons
                    name='home'
                    color='#fff'
                    size={32}
                />
        
        - Apartir do `styles.ts`

                export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
                    size: 24,
                    color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
                }))``;

    - Para utilizarmos a partir do `styles.ts` da melhor forma e podendo consultar os ícones durante a chamada do componente, temos de realizar a seguinte tipagem

                interface Props extends TouchableOpacityProps {
                    name: keyof typeof MaterialIcons.glyphMap; // FAZ COM QUE SEJA POSSÍVEL VERIIFICAR QUAIS OS ICONES DISPONIVEIS QUANDO REALIZARMOS O USO DO COMPONENTE
                    type?: Styled.ButtonIconTypeStyleProps;
                }

## NAVEGAÇÃO

*Instalação*

- Instalação do core para uso da biblioteca `React Navigation`

                npm install @react-navigation/native

- Instalação de dependencias para uso em uma aplicação feita co Expo Maneged Project

                npx expo install react-native-screens react-native-safe-area-context

- Nesta aplicação, utilizaremos apenas a `Stack Navigation`

                npm install @react-navigation/native-stack

*Configuração e uso*

- Criamos uma pasta para guardarmos as rotas

    `src/routes/app.routes.tsx`

                import React from 'react';
                import { createNativeStackNavigator } from '@react-navigation/native-stack';
                import { Groups } from '@screens/Groups';
                import { NewGroup } from '@screens/NewGroup';
                import { Players } from '@screens/Players';

                const { Navigator, Screen } = createNativeStackNavigator();

                export function AppRoutes() {
                    return (
                        <Navigator>
                            <Screen name="Groups" component={Groups} />
                            <Screen name="NewGroup" component={NewGroup} />
                            <Screen name="Players" component={Players} />
                        </Navigator>
                    );
                }

- Utilizamos `createNativeStackNavigator()` para criar as nossas rotas

    - `Navigator` é o componente que armazena as rotas
    - `Screen` é o componente que determina qual o nome da rota e qual tela ele renderiza