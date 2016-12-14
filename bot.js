var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/
      botRegexAd=/^\/advance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/; 
      botRegexSiege = /^\/siege/; botRegexOW = /^\/ratings/; 
      botRegexSlut = /^\/slut/; botRegexStop = /^\/stop/; botRegexCheese = /^\/cheese/; botRegexMistake = /^\/mistake/; botRegexRookies = /^\/rookies/; botRegexEscalate = /^\/escalate/; botRegexHate = /^\/haters/; botRegexPopcorn = /^\/popcorn/; botRegexTellMe = /^\/tell me more/; botRegexDare = /^\/dare/; botRegexRead = /^\/read/; botRegexAmI = /^\/am i/; botRegexThankGod = /^\/thank god/; botRegexMascot = /^\/mascot/; botRegexHateFlow = /^\/hate/; botRegexController = /^\/controller/; botRegexUMad = /^\/u mad/; botRegexLost = /^\/lost/; botRegexFuckThis = /^\/fuck this/; botRegexBrowns = /^\/browns/;
      botRegexProp = /^\/prop/;botRegexKys = /^\/kys/; botRegexSlam = /^\/slam/; botRegexBrye = /^\/brye/;
      botRegexGian = /^\/gian/; botRegexScrotes = /^\/scrotes/; botRegexShaki = /^\/shaki/;
      botRegexDaf = /^\/dafuq/; botRegexAyy = /^\/ayy/; botRegexSchedule = /^\/schedule/; botRegexSMB = /^\/balls/; botRegexStATL = /^\/st atl/; botRegexStOAK = /^\/st oak/; botRegexStSD = /^\/st sd/; botRegexStKC = /^\/st kc/; botRegexStDEN = /^\/st den/; botRegexStPIT = /^\/st pit/; botRegexStBAL = /^\/st bal/; botRegexStCLE = /^\/st cle/; botRegexStCIN = /^\/st cin/; botRegexStBUF = /^\/st buf/; botRegexStNE = /^\/st ne/; botRegexStMIA = /^\/st mia/; botRegexStNYJ = /^\/st nyj/; botRegexStCAR = /^\/st car/; botRegexStNO = /^\/st no/; botRegexStTB = /^\/st tb/; botRegexStCHI = /^\/st chi/; botRegexStMIN = /^\/st min/; botRegexStDET = /^\/st det/; botRegexStGB = /^\/st gb/; botRegexStJAX = /^\/st jax/; botRegexStIND = /^\/st ind/; botRegexStHOU = /^\/st hou/; botRegexStTEN = /^\/st ten/; botRegexStSEA = /^\/st sea/; botRegexStAZ = /^\/st az/; botRegexStSF = /^\/st sf/; botRegexStLA = /^\/st la/; botRegexStWAS = /^\/st was/; botRegexStNYG = /^\/st nyg/; botRegexStDAL = /^\/st dal/; botRegexStPHI = /^\/st phi/;  
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexSlut.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/640x364.jpeg.f8a0e216bf7e42ed9a86b3ae23cc2ff1.large");
    this.res.end();
  } 
  else if(request.text && botRegexStop.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Stop appropriating black culture");
    this.res.end();
  } 
  else if(request.text && botRegexProp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/409x327.jpeg.08b5d95c51bb4897835cfe6b514f2f52.large");
    this.res.end();
  }
  else if(request.text && botRegexKys.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.wikihow.com/Tie-a-Noose");
    this.res.end();
  } 
  else if(request.text && botRegexSlam.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://pbs.twimg.com/profile_images/587294731471757313/ZpI5PfKq.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexDaf.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i3.kym-cdn.com/photos/images/facebook/000/787/356/d6f.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexBrye.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/600x490.jpeg.b31d5153fb474d9bb18dd51b3d650afe.large");
    this.res.end();
  } 
  else if(request.text && botRegexGian.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/9V6ZnvD.png");
    this.res.end();
  } 
  else if(request.text && botRegexScrotes.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1006x1340.jpeg.730381e4280e4028b8375432af14f39f.large");
    this.res.end();
  } 
  else if(request.text && botRegexShaki.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/305x375.jpeg.a8dd3aa18c7a4963a553e6dc16bcb100.large");
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    //postMessage("http://www.daddyleagues.com/maddenrating?name=&position=all&team="+request.text.substring(5,8));
    postMessage("http://daddyleagues.com/mcfslM17/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  
  else if(request.text && botRegexOW.test(request.text)) {
    this.res.writeHead(200);
    postMessage("www.daddyleagues.com/maddenrating/");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/mcfslM17/rules");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    
    postMessage("http://daddyleagues.com/mcfslM17/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/mcfslM17/players?name="+rep+"&position=all&team=all");
    
    this.res.end();
  }  

  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("(☞ﾟヮﾟ)☞");
    this.res.end();
  }
  else if(request.text && botRegexSchedule.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/mcfslM17/schedules");
    this.res.end();
  }
  
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  else if(request.text && botRegexSMB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/BtlG3v1.png");
    this.res.end();
  }
  else if(request.text && botRegexStATL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/jbo_991");
    this.res.end();
  }
  else if(request.text && botRegexStOAK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/droppedthebaby");
    this.res.end();
  } 	
else if(request.text && botRegexStSD.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/awesome_ninja790");
    this.res.end();
  }
else if(request.text && botRegexStKC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/Msugaige");
    this.res.end();
  }
else if(request.text && botRegexStDEN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/");
    this.res.end();
  }
else if(request.text && botRegexStPIT.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/pugnok");
    this.res.end();
  }
else if(request.text && botRegexStBAL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/mrx_2yu");
    this.res.end();
  }
else if(request.text && botRegexStCIN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/corey__cuuh");
    this.res.end();
  }
else if(request.text && botRegexStCLE.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UCSgVueR2TxftBOyQGIz31HQ");
    this.res.end();
  }
else if(request.text && botRegexStBUF.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/Nickcarroll67");
    this.res.end();
  }
else if(request.text && botRegexStNE.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/gkatz17");
    this.res.end();
  }
else if(request.text && botRegexStMIA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/budiceeffect1");
    this.res.end();
  }
else if(request.text && botRegexStNYJ.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/Q1Lqewf70A");
    this.res.end();
  }
else if(request.text && botRegexStCAR.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/");
    this.res.end();
  }
else if(request.text && botRegexStTB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/shayafar");
    this.res.end();
  }
else if(request.text && botRegexStNO.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/dsmooth7");
    this.res.end();
  }
else if(request.text && botRegexStCHI.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/Tburton1989");
    this.res.end();
  }
else if(request.text && botRegexStMIN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/bestkorea1");
    this.res.end();
  }
else if(request.text && botRegexStGB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/jayinurjungle");
    this.res.end();
  }
else if(request.text && botRegexStDET.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/");
    this.res.end();
  }
else if(request.text && botRegexStJAX.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/sdav15");
    this.res.end();
  }
else if(request.text && botRegexStIND.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/alfreddsc");
    this.res.end();
  }
else if(request.text && botRegexStHOU.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/xxhustlexx");
    this.res.end();
  }
else if(request.text && botRegexStTEN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/kingpluskong");
    this.res.end();
  }
else if(request.text && botRegexStSEA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/newtonless_panthers");
    this.res.end();
  }
else if(request.text && botRegexStAZ.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/ravenslions44");
    this.res.end();
  }
else if(request.text && botRegexStSF.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/ganggreentitans");
    this.res.end();
  }
else if(request.text && botRegexStLA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/tannerp52");
    this.res.end();
  }
else if(request.text && botRegexStWAS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://https://www.twitch.tv/wrjboy28");
    this.res.end();
  }
else if(request.text && botRegexStNYG.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://https://www.twitch.tv/ThatGuyTony27");
    this.res.end();
  }
else if(request.text && botRegexStDAL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://https://www.twitch.tv/Drgjr54");
    this.res.end();
  }
else if(request.text && botRegexStPHI.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.twitch.tv/longhard_hard");
    this.res.end();
  }
  else if(request.text && botRegexCheese.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://authoritynutrition.com/wp-content/uploads/2014/11/variety-of-cheese-on-a-wooden-table.jpg");
    this.res.end();
  }
else if(request.text && botRegexMistake.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://s-media-cache-ak0.pinimg.com/736x/ee/25/68/ee25687bdad83ffb2d74923e46d4ad7e.jpg");
    this.res.end();
  }
else if(request.text && botRegexRookies.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/NH526iWE2AFsk/giphy.gif");
    this.res.end();
  }
else if(request.text && botRegexEscalate.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media4.giphy.com/media/ToMjGpjpXMFPshSYGLm/giphy.gif");
    this.res.end();
  }
else if(request.text && botRegexHate.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://img1.izismile.com/img/img5/20120208/640/epic_haters_gonna_hate_memes_640_37.jpg");
    this.res.end();
  }
else if(request.text && botRegexPopcorn.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://cdn.meme.am/cache/instances/folder688/400x/58892688.jpg");
    this.res.end();
  }
else if(request.text && botRegexTellMe.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://pbs.twimg.com/profile_images/2571927616/mmb9qajq9swpi8xxy76a_400x400.jpeg");
    this.res.end();
  }
else if(request.text && botRegexDare.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://s2.quickmeme.com/img/82/824495e7c297da76b0528a47f3cea6fe93cb78035b4fe44fb2458bff379502be.jpg");
    this.res.end();
  }
else if(request.text && botRegexRead.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://cdn.meme.am/cache/instances/folder531/54265531.jpg");
    this.res.end();
  }
else if(request.text && botRegexAmI.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.quickmeme.com/img/10/1038253cfffcb26e9843ba2109e4cf8e52c0e7fa3ade70c9faf6ca9008e34b5e.jpg");
    this.res.end();
  }
else if(request.text && botRegexThankGod.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i60.tinypic.com/2uf3osy.jpg");
    this.res.end();
  }
  else if(request.text && botRegexMascot.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1612x2154.jpeg.242d98106c1a490d9275cfb3ba057105.large");
    this.res.end();
  }
else if(request.text && botRegexHateFlow.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://weknowmemes.com/wp-content/uploads/2013/05/palpatine-meme.jpg");
    this.res.end();
  }
  else if(request.text && botRegexController.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://img.memecdn.com/the-controller-you-get-when-youre-at-a-friends-house_o_764091.gif");
    this.res.end();
  }
else if(request.text && botRegexUMad.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://s2.quickmeme.com/img/a2/a29934bdbf6a89cc2437cf5c347624d68db17a3a69a35ff748c4fdeac1b27ef8.jpg");
    this.res.end();
  }
else if(request.text && botRegexLost.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://images1.westword.com/imager/u/original/7543656/tom.brady.fuck.you.memes.1.jpg");
    this.res.end();
  }
else if(request.text && botRegexFuckThis.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://p.fod4.com/p/media/7102c11ca3/Vg3kd7LuRkOES5CqwO6c_Catan-Table-Flip.gif");
    this.res.end();
  }
else if(request.text && botRegexBrowns.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media.cleveland.com/browns_impact/photo/browns-memejpg-05fb02c929e66aaa.jpg");
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
