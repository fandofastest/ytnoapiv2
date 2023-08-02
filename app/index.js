const usetube = require('usetube')
const ytrend = require("@freetube/yt-trending-scraper")
const youtube = require("youtube-search-api");


const express = require('express');
const app = express();
const port = 3000;



app.get('/searchv2/:id', (req, myres) => {
    youtube
  .GetListByKeyword(req.params.id, false, 25, [{ type: "video" }])
  .then((res) => {
    console.log("Page1");
    console.log(res);
    myres.json(res);

  })
  .catch((err) => {
    console.log(err);
  });
  
});


app.get('/search/:id',async (req, myres) => {
const videos = await usetube.searchVideo(req.params.id);

console.log(videos);
myres.json(videos);

  
});

app.get('/searchchannel/:id',async (req, myres) => {
const videos = await usetube.searchChannel(req.params.id);

console.log(videos);
myres.json(videos);

  
});



app.get('/channel/:id',async (req, myres) => {
const videos = await usetube.getChannelVideos(req.params.id);

console.log(videos);
myres.json(videos);

  
});

app.get('/playlist/:id',async (req, myres) => {
const videos = await usetube.getPlaylistVideos(req.params.id);

console.log(videos);
myres.json(videos);

  
});

app.get('/channeldesc/:id',async (req, myres) => {
const videos = await usetube.getChannelDesc(req.params.id);

console.log(videos);
myres.json(videos);

  
});

app.get('/videodesc/:id',async (req, myres) => {
const videos = await usetube.getVideoDesc(req.params.id);

console.log(videos);
myres.json(videos);

  
});


app.get('/videodate/:id',async (req, myres) => {
const videos = await usetube.getVideoDate(req.params.id);

console.log(videos);
myres.json(videos);

  
});

app.get('/trending/:id', (req, myres) => {
  const parameters = {
    geoLocation: req.params.id,
    parseCreatorOnRise: false,
    page: 'music'
}

ytrend.scrapeTrendingPage(parameters).then((data) =>{
    console.log(data);
    myres.json(data);
    
}).catch((error)=>{
    console.error(error);
});



});


app.listen(port, () => {
    console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});