import { useEffect, useState } from "react";
import PostItem from "../components/Content";
import { NavLink } from "react-router-dom";
import Skills from "../components/list";
import Projects from "../components/projects";
import Link from '@mui/material/Link';

import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import js from "../assets/icons/js.svg";
import react from "../assets/icons/react.svg";
import digia from "../assets/icons/digitalart.svg";
import xd from "../assets/icons/adobexd.svg";
import ps from "../assets/icons/photoshop.svg";
import figma from "../assets/icons/figma.svg";



//MUI
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';






export default function HomePage() {



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
            const response = await fetch("https://codecanvas.vicw.dk/wp-json/wp/v2/posts?_embed&categories=3");
            const data = await response.json();
            setPosts(data);
        }
        getPosts();

    }, []);



    return (
        
        <>

            <Typography
                component="h1"
                variant="h1"
                align="center"
                color="#6f0202"
                gutterBottom
                data-aos="fade-up" 
                data-aos-delay="50"
                data-aos-easing="ease-in"
            >
                Victoria<b style={{ color: "#076464" }}>*</b> W. Johansen
            </Typography>
            <Typography gutterBottom variant="h5" component="h2" className="abMe"                 
                data-aos="fade-up" 
                data-aos-delay="100"
                data-aos-easing="ease-in">
                <p>Multimedia Designer specializing in frontend development with experience in UX/UI design 👩🏽‍💻</p>
                <p style={{ fontSize: "10pt", color: "#076464" }}><i>*I&rsquo;m in the process of changing my name.</i></p>
            </Typography>


            <Typography paragraph className="post-item" align="left" data-aos="fade-up" 
                data-aos-delay="100"
                data-aos-easing="ease-in">
                {posts.map(post => (
                    <PostItem key={post.id} post={post}  />
                ))}


            </Typography>

            <section className="firstSection" >
                <article className="shortIntro">
                    <Typography gutterBottom variant="h5" component="h2">
                        A Bit About Me
                    </Typography>


                    <Typography paragraph>
                        <p>
                            I&rsquo;m a Multimedia Designer passionate about <b>innovation</b> and <b>improvement</b>, specializing in frontend development. Proficient in <b>HTML</b>, <b>CSS</b>, and currently mastering <b>React</b>. You&rsquo;re more than welcome to contact me if you have any questions. Now, join me on a journey through my projects.
                        </p>
                    </Typography>


                    <NavLink to="/about"><ColorButton variant="contained">More of Vic!</ColorButton></NavLink>

                </article>

                <Divider style={{ backgroundColor: "rgba(7, 100, 100, 0.3)" }} orientation="vertical" variant="middle" flexItem />

                <article className="mySkills" >
                    <Typography gutterBottom variant="h5" component="h2">
                        My Strengths
                    </Typography>

                    <div className="skills" data-aos="fade-up">

                        <Skills name="HTML" image={<img src={html} alt="html icon" className="skillName"/>} />
                        <Skills name="CSS" image={<img src={css} alt="css icon" className="skillName"/>} />
                        <Skills name="JavaScript" image={<img src={js} alt="javascript icon" className="skillName"/>} />
                        <Skills name="React" image={<img src={react} alt="react icon"className="skillName" />} />

                        <Skills name="Digital art" image={<img src={digia} alt="digital art icon" className="skillName"/>} />
                        <Skills name="Adobe XD" image={<img src={xd} alt="adobe xd icon" className="skillName"/>} />
                        <Skills name="Photoshop" image={<img src={ps} alt="photoshop icon" className="skillName"/>} />
                        <Skills name="Figma" image={<img src={figma} alt="figma icon" className="skillName" />} />

                    </div>
                </article>
                
            </section >

            <Divider style={{ backgroundColor: "rgba(7, 100, 100, 0.3)" }} variant="middle" />

            <section className="projects">
                <Projects />
                <Link href="/public/vwCV.pdf" target="_blank" style={{ display: "flex", justifyContent: "center", textDecoration: "none", marginTop:"2em" }}><ColorButton variant="contained">View my full resume</ColorButton></Link>

            </section>

           


            </>
        
        
    )
}
