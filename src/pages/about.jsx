import { useEffect, useState } from "react";
import PostItem from "../components/Content";
import '../App.css';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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

export default function About() {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText("#A00b0b"),
        backgroundColor: "#6F0202",
        '&:hover': {
            backgroundColor: "#A00b0b",
        },
        pointerEvents: "auto",
    }));

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const response = await fetch("https://codecanvas.vicw.dk/wp-json/wp/v2/posts?_embed&categories=4");
            const data = await response.json();
            setPosts(data);
        }
        getPosts();

    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
        <body>
        <main style={{display:"flex", flexDirection:"column"}}>

            <Typography component="h1"
                variant="h1"
                align="center"
                color="#6f0202"
                className="about-header"
                >
                About Me
            </Typography>

            
            <Typography paragraph className="post-item" align="justify" >
                {posts.map(post => (
                    <PostItem key={post.id} post={post}  />
                ))}

            <Link href="../vwCV.pdf" target="_blank" style={{ display: "flex", justifyContent: "center", textDecoration: "none", marginTop:"2em" }}><ColorButton variant="contained">View my full resume</ColorButton></Link>

            </Typography>

            <Divider style={{ backgroundColor: "rgba(7, 100, 100, 0.3)" }} variant="middle" />

        </main>
        </body>
        </ThemeProvider>
    )
}