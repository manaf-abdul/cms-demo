import NavBar from '../menu/NavBar'
import BottomNav from '../menu/BottomNav'
import { Container, Grid } from '@mui/material'

const Layout = ({ children }: any) => {
    return (
        <>
            <Grid container sx={{ background: "#dbdbdb" }}>
                <NavBar />
                <Container className="p-5"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%"
                    }}>
                    <Grid item xs={12} md={12} lg={12}
                        className='p-4'
                        sx={{
                            background: "white",
                            borderRadius: "1rem",
                            minHeight: "80vh"
                        }}>
                        {children}
                    </Grid>
                </Container>
                <BottomNav />
            </Grid>
        </>
    )
}

export default Layout