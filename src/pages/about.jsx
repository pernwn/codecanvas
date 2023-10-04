import { useEffect, useState } from "react";
import PostItem from "../components/Content";
import '../App.css';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Skills from "../components/list";

import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import js from "../assets/icons/js.svg";
import react from "../assets/icons/react.svg";
import digia from "../assets/icons/digitalart.svg";
import xd from "../assets/icons/adobexd.svg";
import ps from "../assets/icons/photoshop.svg";
import figma from "../assets/icons/figma.svg";




const theme = createTheme({
    palette: {
        primary: {
            main: "#6f0202",
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
                <main className="about" style={{ display: "flex", flexDirection: "column", marginBottom:"10%" }}>
                    <section>
                        <Typography component="h1"
                            variant="h1"
                            align="center"
                            color="#6f0202"
                            className="about-header"


                        >
                            About Me
                        </Typography>


                        <section className="skillsAb" style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0 10em"}}>
                                <Skills image={<img src={html} alt="html icon" className="skillName" />} />
                                <Skills image={<img src={css} alt="css icon" className="skillName" />} />
                                <Skills image={<img src={js} alt="javascript icon" className="skillName" />} />
                                <Skills image={<img src={react} alt="react icon" className="skillName" />} />

                                <Skills image={<img src={digia} alt="digital art icon" className="skillName" />} />
                                <Skills image={<img src={xd} alt="adobe xd icon" className="skillName" />} />
                                <Skills image={<img src={ps} alt="photoshop icon" className="skillName" />} />
                                <Skills image={<img src={figma} alt="figma icon" className="skillName" />} />
                        </section>




                        <Typography paragraph className="post-item" align="justify" >
                            {posts.map(post => (
                                <PostItem key={post.id} post={post} />
                            ))}

                            <Link href="vwCV.pdf" target="_blank" style={{ display: "flex", justifyContent: "center", textDecoration: "none", marginTop: "2em" }}><ColorButton variant="contained">View my full resume</ColorButton></Link>

                        </Typography>
                    </section>






                </main>


            </body>
        </ThemeProvider>
    )
}