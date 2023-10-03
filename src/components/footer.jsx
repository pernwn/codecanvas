import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import logo from "../assets/logo.svg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import figur from "../assets/figur.svg";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://portfolio.vicw.dk/index.html">
        VictoriaW
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default function Footer() {
  return (
    <footer>

      <Box sx={{ bgcolor: '#f8f8f8', p: 6 }}  component="footer" align="center" style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
        <div className="connect" style={{display:"flex"}}>
          <div>

            <Typography><h4>Let&rsquo;s connect!</h4>
            <p><b>E-mail: </b><a href="mailto:vicwaet@hotmail.com">vicwaet@hotmail.com</a></p>
            <p><b>Phone: </b><a href="tel:+4525480555">+45 2548 0555</a></p>
            <Link to target="_blank" href="https://www.linkedin.com/in/vicwjohansen/" style={{ display: "flex", justifyContent: "left", paddingTop: "2%" }}><LinkedInIcon htmlColor="#6F0202" /></Link>
            </Typography>

          </div>

          <div>

            <img src={figur} alt="Vector graphic" style={{ width: "8em" }} />

          </div>

        </div>

        <div className='copy'>
        <Typography variant="h6" align="center">
          <img src={logo} alt="logo" style={{ width: "4em" }} />
        </Typography>

        <Copyright />
        

        </div>
        
      </Box>

    </footer>

  )
}


