import React, { useEffect, useState } from "react";
import { useMovieContext } from "../components/MovieContext";
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { fetchVideoKey } from '../utils/fetch';
import Trailer from "../components/Trailer";
import Banner from "../components/Banner";

function MoreInfo() {
    const { selectedMovieObject } = useMovieContext();
    // console.log(selectedMovieObject);

    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    const title = selectedMovieObject.title;
    const description = selectedMovieObject.overview;
    const releaseDate = selectedMovieObject.release_date;
    const votes = selectedMovieObject.vote_count;
    const url = selectedMovieObject.backdrop_path;
    const bgStyle = {
      backgroundImage: `url('${baseUrl + url}')`,
    }

    const [voteChange, setVoteChange] = useState();
    useEffect(() => {
        setVoteChange(votes);
    }, [votes]);
    const increaseVotes = () => {
        setVoteChange(voteChange + 1);
    }
    const decreaseVotes = () => {
        setVoteChange(voteChange - 1);
    }

    const popularity = selectedMovieObject.vote_average;
    let popularityPercent = popularity * 10;
    popularityPercent = popularityPercent.toString().substring(0, 2);
    const popularityStyle = {
        width: `${popularityPercent}%`,
    }
    // const baseVideoUrl = 'https://www.youtube.com/watch?v=';
    const embededBaseUrl = 'https://www.youtube.com/embed/';
    const [videoInfo, setVideoInfo] = useState({});
    useEffect(() => {
      fetchVideoKey(selectedMovieObject.id, setVideoInfo);
    }, [selectedMovieObject, setVideoInfo])
    // console.log('id:', videoInfo.id,'\n key: ', videoInfo.key)

    const embededUrl = `${embededBaseUrl + videoInfo.key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1`;

    return (
        <div id="moreInfo" className="pt-[60px]">
            <div className="w-full pb-4 px-12 bg-quaternary text-white space-y-4">
                <Banner style={bgStyle} topMovie={selectedMovieObject}>
                    <Trailer embededUrl={embededUrl} className='hidden' />
                </Banner>
                <h1 className="text-3xl font-bold">{title}</h1>
                <div className="pb-4">
                    <h2 className="text-xl font-bold">Description</h2>
                    <p>{description}</p>                    
                </div>
                <div className="pb-4">
                    <h2 className="text-xl font-bold">Release Date</h2>
                    <p>{releaseDate}</p>                    
                </div>
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-bold">Votes: </h2>
                    <div className="space-y-2">
                        <AiOutlineArrowUp className="fill-green-500 hover:fill-green-800 cursor-pointer" onClick={increaseVotes} />
                        <p className="selection:bg-transparent">{voteChange}</p>
                        <AiOutlineArrowDown className="fill-red-500 hover:fill-red-800 cursor-pointer" onClick={decreaseVotes} />
                    </div>                    
                </div>
                <div className="relative flex w-full h-12 border-white border-2">
                    <div style={popularityStyle} className="bg-green-500 h-full"></div>
                    <p className="absolute w-full text-center leading-[48px] tracking-[16px]">Popularity {popularityPercent}%</p>
                </div>
            </div>
        </div>
    )
}

export default MoreInfo;