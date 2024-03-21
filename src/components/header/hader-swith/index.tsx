import { Button, Grid, Paper, styled } from '@mui/material'
import { usePageContext } from '../../../hooks/usePageContext';

type Props = {}
export type PagesList = 'pools' | 'claim';
const HeaderSwith = (_props: Props) => {
    const {page,pageToggle} = usePageContext()
    const SwitchPaper = styled(Paper)(({ }) => ({
        borderRadius: 20,
        boxShadow:'none'
    }))
    return (
        <Grid container justifyContent="center" sx={{ my: 6 }}>
            <SwitchPaper>
                <Button variant={page === "pools" ? "contained" : "text"} onClick={pageToggle} >Pools</Button>
                <Button variant={page === "claim" ? "contained" : "text"} onClick={pageToggle}>Claim</Button>
            </SwitchPaper>
        </Grid>
    )
}

export default HeaderSwith