import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import { useContext } from 'react'
import HeaderSwith from './hader-swith'
import { ThemeContext, ThemeContextType } from '../../context/themeContext'

type Props = {}

const Header = (_props: Props) => {
    const context = useContext<ThemeContextType|undefined>(ThemeContext);
    if (!context) {
        throw new Error('useThemeMode must be used within a ThemeProvider');
      }
    
      const { toggleThemeMode } = context;
    return (
        <>
        <AppBar color="inherit" position='static' sx={{ borderRadius: 6, boxShadow: 'none', mt: 3 }} >
            <Toolbar sx={{ minHeight: '46px !important' }}>
                <img src='assets/image/logo.svg' height="15px" />
                <Box flexGrow={1} />
                <Box>
                    <IconButton onClick={toggleThemeMode}>
                        <img src='assets/icon/mode.svg' height="20px" />
                    </IconButton>
                    <IconButton>
                        <img src='assets/icon/account.svg' height="20px" />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
        <HeaderSwith/>
        </>
    )
}

export default Header