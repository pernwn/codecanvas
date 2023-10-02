

import hog from "../assets/pics/hog.png"
import vaeske from "../assets/pics/vaeske.png"
import nfp from "../assets/pics/nord.png"

export default function ProjectList() { const pList = [
  {
  id: 1,
  title: "Heart of Games",
  description: "This project was made solely by me. It is made with HTML and CSS. The assignment was to create our very own online magazine and apply the knowledge we had learned so far. Keep in mind this was in the 1st semester, so it is not that advanced. I decided to include it because, at the time, I was very proud of what I was able to create.",
  webUrl: "https://vicw.dk/HoG/",
  photo: hog,
},

{
  id: 2,
  title: "Væskebalancen",
  description: "This was a group project where we had to make our first responsive website. We worked with the bar Væskebalancen who where kind enough to send us a folder with their own photos that we were allowed to use on the site. ",
  webUrl: "https://vicw.dk/mobilefirst/",
  photo: vaeske,
},


{
  id: 3,
  title: "Nord for Paradis",
  description: "In this project my group and I worked in close collaboration with the tattoo shop. We did desk research and interviews with the owners. Almost all the pictures were taken by us. The video was also shot and edited by us. In the end we got a satisfactory website and the owners were thrilled!",
  webUrl: "https://vicw.dk/nordforparadis/",
  photo: nfp,
}

];
return pList;

}

