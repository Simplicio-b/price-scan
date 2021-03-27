import styled from 'styled-components/native'

import {
    Platform
} from 'react-native'

export const Container = styled.SafeAreaView `
    flex: 1;
    background-color: ${e => e.bg || '#FFF'};
    padding-top: ${Platform.OS === 'android' ? 20 : 0}px;
`
