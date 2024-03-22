import NavBar from '../menu/NavBar'
import BottomNav from '../menu/BottomNav'
import { Container, Grid } from '@mui/material'

const Layout = ({ children }: any) => {
    return (
        <>
            <Grid container>
                <NavBar />
                <Container className="p-5"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Grid item xs={12} md={10} lg={10}>
                        {children}
                    </Grid>
                </Container>
                <BottomNav />
            </Grid>
        </>
    )
}

export default Layout