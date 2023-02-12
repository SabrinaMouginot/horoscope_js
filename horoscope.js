function zodiac(){
  var birthmonth = document.getElementById("month").value;
   var birthday = document.getElementById("day").value;
 var result = " unknown because you didn't put a valid date.";


if (birthmonth == 1&& birthday >= 20 || birthmonth == 2 && birthday <= 18
    ){
        result = ("Verseau");
     document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aquarius.png'width=20%>";
   document.getElementById("characteristic").innerHTML="Les Verseaux sont extrêmement vulnérables et sensibles. Bien que vous puissiez souvent les trouver entourés de nombreux amis, mais en réalité, ils ont rarement des amis proches et des connaissances. Le Verseau est un signe universel qui en fait des personnes publiques. Par conséquent, les Verseaux sont souvent associés à des clubs, des organisations et des forums et participent avec enthousiasme à des discussions intellectuelles. Les Verseaux sont de grands communicateurs tant qu'ils sont dans leur domaine mental.";
  
    }

{
       alert("Please enter an accurate date ! ");
    }
 document.getElementById("output").innerHTML= result;
}
  