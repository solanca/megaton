import { AppBar, Container, Grid, Toolbar, Typography } from '@mui/material'

type Props = {}

const Footer = (_props: Props) => {
    return (
        <AppBar position='fixed' color='inherit' sx={{ top: 'auto', bottom: 0,boxShadow:'none' }}>
            <Toolbar
                sx={{ minHeight: "46px !important" }}>
                <Container maxWidth="lg" sx={{ display: 'flex' }}>
                    <Grid container>

                        <Typography variant='caption'>MegaTON-2024</Typography>
                    </Grid>

                    <Grid container columnGap={2} justifyContent="flex-end">

                        <img src="assets/icon/github.svg" alt="github" />
                        <img src="assets/icon/discord.svg" alt="discord" />
                        <img src="assets/icon/mage_x.svg" alt="mage_x" />
                        <img src="assets/icon/telegram.svg" alt="telegram" />
                    </Grid>

                </Container>
            </Toolbar></AppBar>
    )
}

export default Footer