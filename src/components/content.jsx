import parse from "html-react-parser";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function PostItem({post}){
        const theme = createTheme({
        palette: {
          background: {
            default: "#f8f8f8"
          }
        }
      });
    const image = post._embedded["wp:featuredmedia"][0].source_url;

    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
        <div className="portrait"><img src={image} alt="image" /></div>
            
            <h2>{parse(post.title.rendered)}</h2>
            {parse(post.content.rendered)}
        
        </ThemeProvider>
    )
}
 