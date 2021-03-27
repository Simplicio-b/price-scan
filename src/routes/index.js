import { createAppContainer, createSwitchNavigator } from 'react-navigation'

// screens
import Home from '../screens/Home'
import Scan from '../screens/Scan'
import WriteCodBar from '../screens/WriteCodBar'
import ShowProduts from '../screens/ShowProduts'

export default createAppContainer(
    createSwitchNavigator({
        Home, 
        Scan, 
        WriteCodBar, 
        ShowProduts
    }, { initialRouteName: 'Home' })
)