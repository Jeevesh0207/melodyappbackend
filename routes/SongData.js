const express=require("express")
const SongData=express.Router()
const SliderImage=require('../JSON/SliderImage/Slider.json')
const EnglishTrendingSong=require("../JSON/EnglishTrending/Trending.json")
const SliderEnglish50=require("../JSON/SliderImage/English_50.json")
const SliderHindi50=require("../JSON/SliderImage/Hindi_50.json")
const Unplugged31=require("../JSON/SliderImage/Unplugged.json")
const Punjabi50=require("../JSON/SliderImage/Punjabi_50.json")
const Bhojpuri50=require("../JSON/SliderImage/Bhojpuri_50.json")
const Kpop50=require("../JSON/SliderImage/K_pop.json")
const Bhakti50=require("../JSON/SliderImage/Bhajan.json")
const ArjitSingh50=require("../JSON/Singer/ArjitSingh.json")
const HoneySingh50=require("../JSON/Singer/HoneySingh.json")
const TopArtist=require("../JSON/Singer/TopArtist.json")
const NewReleaseHindi=require("../JSON/HindiTrendig/NewRelease.json")
const NewReleaseEnglish=require("../JSON/EnglishTrending/NewRelease.json")
const HindiTrendingSong=require("../JSON/HindiTrendig/Trending.json")
const HindiRomantic=require("../JSON/HindiTrendig/Romantic.json")
const EnglishRomantic=require("../JSON/EnglishTrending/Romantic.json")
const SadPopSong=require("../JSON/HindiTrendig/Sadpop.json")
const SadSongHindi=require("../JSON/HindiTrendig/SadSong.json")
const DanceHindiSong=require("../JSON/HindiTrendig/Dance.json")
const SongHindi90s=require("../JSON/HindiTrendig/90sSong.json")
const WorkoutHindi=require("../JSON/HindiTrendig/Workout.json")
const BhaktiSongHindi=require("../JSON/HindiTrendig/BhaktiHindi.json")

SongData.get('/sliderimage',async(req,res)=>{ 
    res.send(SliderImage)   
})

//! ---------------------SLIDER---------------------

SongData.get('/newreleaseHindi50',async(req,res)=>{ 
    res.send(SliderHindi50)   
})

SongData.get('/unplugged31',async(req,res)=>{ 
    res.send(Unplugged31)   
})

SongData.get('/newreleasepunjabi50',async(req,res)=>{ 
    res.send(Punjabi50)   
})

SongData.get('/newreleasebhojpuri50',async(req,res)=>{ 
    res.send(Bhojpuri50)   
})

SongData.get('/kpop50',async(req,res)=>{ 
    res.send(Kpop50)   
})

SongData.get('/bhakti50',async(req,res)=>{ 
    res.send(Bhakti50)   
})

SongData.get('/arjitsingh50',async(req,res)=>{ 
    res.send(ArjitSingh50)   
})

SongData.get('/honeysingh50',async(req,res)=>{ 
    res.send(HoneySingh50)   
})

SongData.get('/newreleaseEnglish50',async(req,res)=>{ 
    res.send(SliderEnglish50)   
})

//! ------------------------------------------------

//! ---------------------Top Artist------------------

SongData.get('/topartists',async(req,res)=>{ 
    res.send(TopArtist)   
})

//! -------------------------------------------------

//! ---------------------Categories------------------

SongData.get('/newreleasehindi',async(req,res)=>{ 
    res.send(NewReleaseHindi)   
})

SongData.get('/newreleaseenglish',async(req,res)=>{ 
    res.send(NewReleaseEnglish)   
})

SongData.get('/hinditrendingsong',async(req,res)=>{ 
    res.send(HindiTrendingSong)   
})

SongData.get('/englishtrendingsong',async(req,res)=>{ 
    res.send(EnglishTrendingSong)   
})

SongData.get('/hindiromantic',async(req,res)=>{ 
    res.send(HindiRomantic)   
})

SongData.get('/englishromantic',async(req,res)=>{ 
    res.send(EnglishRomantic)   
})

SongData.get('/sadpopsong',async(req,res)=>{ 
    res.send(SadPopSong)   
})

SongData.get('/sadsonghindi',async(req,res)=>{ 
    res.send(SadSongHindi)   
})

SongData.get('/dancehindisong',async(req,res)=>{ 
    res.send(DanceHindiSong)   
})

SongData.get('/songhindi90s',async(req,res)=>{ 
    res.send(SongHindi90s)   
})

SongData.get('/bhaktihindisong',async(req,res)=>{ 
    res.send(Bhakti50)   
})

SongData.get('/workoutsong',async(req,res)=>{ 
    res.send(WorkoutHindi)   
})

module.exports=SongData