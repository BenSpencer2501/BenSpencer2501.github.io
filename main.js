  function Navbar()
  {
    return`<nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="index.html">HOME</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="gallery.html">Gallery </span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="shows.html">Shows</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="lessons.html">Lesson's</a>
        </li>
      </ul>
    </div>
    </nav>
    <header class="secHeader">
    <p>|Achieve The Incredible|</p> <p>|Circus For All|</p> <p>|Online Courses avaliable|</p> 
  </header>
    `
    
  }
  function LogoNHeader1(){
    return`
    <header class="firstHeader">

      <div class="logoSpace">
        <img src="images/logo.jpg" alt="lessonclass">
      </div >
    
      <div class="nextToLogo">
        <h1>
            CIRCUS MASH 
        </h1>
       
      </div>
      
    </header>
  
    `
  }

  function Footer(){
    return`<footer>
    <p> Copyright © 2022 CircusMASH </p> <p> Email: info@circusmash.co.uk</p> <p>Telephone: 0121 439 2530</p>
    </footer>`
  }

  function buildCal(m, y, cM, cH, cDW, cD, brdr){
    var mn=['January','February','March','April','May','June','July','August','September','October','November','December'];
    var dim=[31,0,31,30,31,30,31,31,30,31,30,31];
    
    var oD = new Date(y, m-1, 1); //DD replaced line to fix date bug when current day is 31st
    oD.od=oD.getDay()+1; //DD replaced line to fix date bug when current day is 31st
    
    var todaydate=new Date() //DD added
    var scanfortoday=(y==todaydate.getFullYear() && m==todaydate.getMonth()+1)? todaydate.getDate() : 0 //DD added
    
    dim[1]=(((oD.getFullYear()%100!=0)&&(oD.getFullYear()%4==0))||(oD.getFullYear()%400==0))?29:28;
    var t='<div class="'+cM+'"><table class="'+cM+'" cols="7" cellpadding="0" border="'+brdr+'" cellspacing="0"><tr align="center">';
    t+='<td colspan="7" align="center" class="'+cH+'">'+mn[m-1]+' - '+y+'</td></tr><tr align="center">';
    for(s=0;s<7;s++)t+='<td class="'+cDW+'">'+"SMTWTFS".substr(s,1)+'</td>';
    t+='</tr><tr align="center">';
    for(i=1;i<=42;i++){
    var x=((i-oD.od>=0)&&(i-oD.od<dim[m-1]))? i-oD.od+1 : '&nbsp;';
    if (x==scanfortoday) //DD added
    x='<span id="today">'+x+'</span>' //DD added
    t+='<td class="'+cD+'">'+x+'</td>';
    if(((i)%7==0)&&(i<36))t+='</tr><tr align="center">';
    }
    return t+='</tr></table></div>';
  } 


  function anOffer(){
    var currdate = new Date()
    var currday = currdate.getDay()
    if (currday == 0){ document.writeln("Sunday. <span class=open>Closed</span>. N/A")}
    if (currday == 1){ document.writeln("Monday. <span class=open>Opening Times</span>. 6:00 AM - 11:00 PM")}
    if (currday == 2){ document.writeln("Tuesday. <span class=open>Opening Times</span>. 6:00 AM - 11:00 PM")}
    if (currday == 3){ document.writeln("Wednesday. <span class=open>Opening Times</span>. 6:00 AM - 11:00 PM")}
    if (currday == 4){ document.writeln("Thursday. <span class=open>Opening Times</span>. 6:00 AM - 11:00 PM childrens classes")}
    if (currday == 5){ document.writeln("Friday. <span class=open>Opening Times</span>. 6:00 AM - 11:00 PM")}
    if (currday == 6){ document.writeln("Saturday. <span class=open>Opening Times</span>. 6:00 AM - 8:00 PM")}
    return day
  }