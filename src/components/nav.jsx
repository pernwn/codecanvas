import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main:"#6f0202",
        },

      secondary: {
        main: "#A00b0b",
      } 
    },
  });

export default function Nav() {

    return (
      <ThemeProvider theme={theme}>
        <header>
            <nav>
                <div className="logo">
                    <NavLink to="/"><img src={logo} alt="VJ logo" /></NavLink>
                    
                </div>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                            m: 2,
                        },
                    }}
                >
                    <ButtonGroup size="large" variant="text">
                        <NavLink to="/"><Button>Home</Button></NavLink>
                        <NavLink to="/about"><Button>About</Button></NavLink>
                        <NavLink to="/websites"><Button>Artworks</Button></NavLink>
                        <NavLink to="/artworks"><Button>Websites</Button></NavLink>
                    </ButtonGroup>
                </Box>

                
            </nav>

        </header>
        </ThemeProvider>
    )

}