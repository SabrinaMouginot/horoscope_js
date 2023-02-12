function zodiac(){
  var birthmonth = document.getElementById("month").value;
   var birthday = document.getElementById("day").value;
 var result = " Inconnu car vous n'avez pas mis de date valide.";


if (birthmonth == 1&& birthday >= 20 || birthmonth == 2 && birthday <= 18
    ){
        result = ("Verseau");
     document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aquarius.png'width=20%>";
   document.getElementById("characteristic").innerHTML="Les Verseaux sont extrêmement vulnérables et sensibles. Bien que vous puissiez souvent les trouver entourés de nombreux amis, mais en réalité, ils ont rarement des amis proches et des connaissances. Le Verseau est un signe universel qui en fait des personnes publiques. Par conséquent, les Verseaux sont souvent associés à des clubs, des organisations et des forums et participent avec enthousiasme à des discussions intellectuelles. Les Verseaux sont de grands communicateurs tant qu'ils sont dans leur domaine mental.";
  
    }

{    if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
       result = ("Poisson");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-pisces.png'width=20%>";
      document.getElementById("characteristic").innerHTML="Les Poissons vivent dans leur monde imaginaire qui a à peine un lien avec la réalité. Ils aiment regarder le monde à travers une fenêtre rose. Lorsqu'ils sont mis au défi par la réalité, les Poissons ont tendance à se retirer dans leur monde imaginaire.";
      
    }
   if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
       result = ("Bélier");
      document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aries.png'width=20%>";
     document.getElementById("characteristic").innerHTML="Le Bélier fait preuve d'une forte personnalité. Ils ont de fortes qualités de leadership et sont honnêtes et directs. Le Bélier a souvent une forte détermination et ne peut pas être dissuadé par les échecs. Le Bélier est toujours avide d'action. Ils prennent spontanément le leadership. Mais ils ne jugent pas le pour et le contre d'une situation avant d'agir. Cela les rend également vulnérables.";
   }
  
    if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20){
        result = ("Taureau");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-taurus.png'width=20%>";
       document.getElementById("characteristic").innerHTML="Les Taureaux sont connus pour leur détermination et leur zèle. Il n'est pas facile de détourner un Taureau de son objectif une fois qu'il a défini son objectif. Il resterait concentré sur son objectif et s'efforcerait continuellement de l'atteindre. Les Taureaux attachent une grande valeur à la simplicité et à la fonctionnalité. Ils mènent souvent une vie simple et dépourvue de luxe.";
      
    }
  
    if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20
     ){
        result = ("Gémeaux");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-gemini.png'width=20%>";
      document.getElementById("characteristic").innerHTML="Les Gémeaux sont pleins de dualité. Ils regardent toujours une situation d'un double point de vue. Les Gémeaux sont caractérisés par l'inconstance et la double nature. Les Gémeaux restent donc toujours confus quant à leurs sentiments. Les Gémeaux sont cependant de bons communicateurs et expriment un bon contrôle du langage. On constate souvent qu'ils ont des connaissances sur plusieurs langues.";
     
    }
  
    if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22){
        result = ("Cancer");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-cancer.png'width=20%>";
      document.getElementById("characteristic").innerHTML="Les cancéreux sont émotifs. Leurs vies sont souvent infligées avec des sautes d'humeur. Vous pouvez trouver un Canérien dans différentes humeurs même au cours d'une journée. La véritable émotion du Cancer se cache cependant derrière son sang-froid. Mais ce sont des créatures douces et peuvent facilement être blessées par des mots méchants. Les personnes du signe du zodiaque Cancer peuvent être sujettes à la dépression et à d'autres problèmes mentaux. Cependant, les cancers sont de grands membres de la famille et apprécient les grandes familles autour d'eux.";
      
    }
    if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
        result = ("Lion");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-leo.png'width=20%>";
            document.getElementById("characteristic").innerHTML="Les Lions sont chaleureux. Ils sont pleins d'énergie et toujours prêts à passer à l'action. Les Lions ont soif de reconnaissance et d'admiration. Les Lions aiment toujours être au centre de l'attraction. Ils s'efforcent d'atteindre le sommet dans tout ce qu'ils font. Les Lions aiment toujours être entourés d'une grande foule et d'admirateurs. Cependant, ils sont souvent hostiles à la critique et ne prennent pas les paroles des critiques à la légère. Les Lions sont très ambitieux et choisissent leurs connaissances avec soin. Ils aspirent à une reconnaissance sociale.";
      
    }
    if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
        result = ("Vierge");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-virgo.png'width=20%>";
        document.getElementById("characteristic").innerHTML="Les Vierges ont un sens aigu du bien et du mal et pour cela, elles sont très discriminantes. Ils ont un sens intuitif pour identifier les mauvais motifs chez les gens. Par conséquent, les Vierges font preuve d'une extrême prudence dans ce qu'elles font. La vierge définit la pureté et est donc dotée de la capacité de distinguer le bien du mal. Par conséquent, les Vierges sont aussi des maniaques de la propreté. Malgré leur intelligence, les Vierges restent souvent confuses quant aux décisions qu'elles prennent dans leur vie. De plus, vous ne trouverez pas de Vierge regorgeant d'activités.";
    }
    if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22){
      result = ("Balance");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-libra.png'width=20%>";
        document.getElementById("characteristic").innerHTML="La Balance est un signe actif et les membres nés sous ce signe sont dotés d'une grande énergie. Mais les Balance ont aussi tendance à manquer rapidement d'énergie. La Balance est l''équilibre' et les membres de ce signe ont un esprit très équilibré. On les trouve souvent dans le règlement des différends. Les Balances essaient toujours de maintenir l'harmonie et l'équilibre. Ils sont également très équilibrés et ont un sens aigu de la justice. Par conséquent, leurs suggestions sont souvent très recherchées par leurs amis et leurs proches. Les Balances sont deux personnages à facettes. Ils ont tous les deux la gaieté et l'obscurité en eux. Les Balances ont des phases d'activités intenses, mais elles peuvent facilement glisser dans des phases d'inactivité complète et d'apathie également.";
    }
    if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
       result = ("Scorpion");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-scorpio.png'width=20%>";
        document.getElementById("characteristic").innerHTML="Les scorpions sont de nature la plus diversifiée et présentent donc l'étude la plus intéressante. Les Scorpions sont rancuniers et attendraient patiemment le bon moment pour frapper. Ils ne sont pas susceptibles d'oublier tout acte de trahison ou de traîtrise. Pour les Scorpions, ce qui est sous-entendu est plus fascinant que l'évident. Les Scorpions sont souvent décrits comme des égoïstes. Cependant, certains des traits positifs des Scorpions sont la diplomatie, l'intuition, l'intelligence, l'engagement, la détermination, la spiritualité et la sensibilité.";
    }
    if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
        result = ("Sagittaire");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-sagittarius.png'width=20%>";
        document.getElementById("characteristic").innerHTML="Les Sagittaires sont les optimistes incurables. Ils regardent toujours le côté positif d'une chose. Leur optimisme ne peut être atténué par des difficultés ou des résultats négatifs. Les Sagittaires sont souvent des gens en plein air. Ils s'intéresseront à toutes sortes d'activités sportives et de plein air. Ce sont aussi des aventures dans la nature. Bien qu'ils soient fidèles à leurs défauts, ils peuvent aussi devenir complètement sourds aux critiques et refuser les suggestions.";
    }
  
  if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){
 
        result = ("Capricorne");
     document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-capricorn.png'width=20%>";
     document.getElementById("characteristic").innerHTML="Les membres de ce signe ont un désir insatiable de grimper plus haut et pendant ce cours, ils peuvent également devenir égoïstes et ne pas hésiter à sacrifier les intérêts des autres pour atteindre leurs objectifs. à la perfection.";
    }else if (birthmonth>12||birthday>31)
       alert("Veuillez saisir une date précise. ");
    }
 document.getElementById("output").innerHTML= result;
}
  
