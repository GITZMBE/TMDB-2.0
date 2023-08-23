import React, { useEffect, useState } from "react";
import { useMovieContext } from "../components/MovieContext";
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

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
    const popularityPercent = popularity * 10;
    const popularityStyle = {
        width: `${popularityPercent}%`,
    }

    return (
        <div id="moreInfo" className="pt-[60px]">
            <div className="w-full py-4 px-12 bg-quaternary text-white space-y-4">
                <div style={bgStyle} className="w-full h-[75vh] background-center"></div>
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
                        <p>{voteChange}</p>
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