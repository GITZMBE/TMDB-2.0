import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { fetchGenres, fetchVideoKey } from "../api/fetch";
import Trailer from "../components/Trailer";
import Banner from "../components/Banner";
import Related from "../components/Related";
import { BsDot } from "react-icons/bs";
import Credits from "../components/Credits";
import { useRecoilState } from "recoil";
import { selectedMovieState } from "../recoil/recoil";
import Reviews from "../components/Reviews";

function MoreInfo() {
  const [selectedMovie] = useRecoilState(selectedMovieState);
  if (Object.keys(selectedMovie).length === 0) {
    window.location.href = "http://localhost:3000";
  }

  const baseUrl = "https://image.tmdb.org/t/p/w780";
  const title = selectedMovie.title;
  const description = selectedMovie.overview;
  const releaseDate = selectedMovie.release_date;
  const votes = selectedMovie.vote_count;
  const genreIds = selectedMovie.genre_ids || [];
  const url = selectedMovie.backdrop_path;
  const bgStyle = {
    backgroundImage: `url('${baseUrl + url}')`,
  };

  const [voteChange, setVoteChange] = useState();
  useEffect(() => {
    setVoteChange(votes);
  }, [votes]);
  const increaseVotes = () => {
    setVoteChange(voteChange + 1);
  };
  const decreaseVotes = () => {
    setVoteChange(voteChange - 1);
  };

  const popularity = selectedMovie.vote_average;
  let popularityPercent = popularity * 10;
  popularityPercent = popularityPercent.toString().substring(0, 2);
  const popularityStyle = {
    width: `${popularityPercent}%`,
  };
  const [videoInfo, setVideoInfo] = useState({});
  useEffect(() => {
    fetchVideoKey(selectedMovie.id, setVideoInfo);
  }, [selectedMovie]);

  const [genresList, setGenresList] = useState([]);
  useEffect(() => {
    fetchGenres(setGenresList);
  }, []);

  return (
    <div id='moreInfo'>
      <div className='w-full pb-4 bg-primary text-white space-y-4'>
        <Banner style={bgStyle} topMovie={selectedMovie}>
          <Trailer videoKey={videoInfo && videoInfo.key} className='hidden' />
        </Banner>
        <div className='px-12 space-y-4'>
          <h1 className='text-3xl font-bold'>{title}</h1>
          <div>
            <h2 className='text-xl font-bold'>Genres</h2>
            <p className='flex gap-2'>
              {Object.keys(genreIds).length > 0
                ? genreIds.map((genreId, index) =>
                    genresList.map((genreItem) =>
                      genreId === genreItem.id ? (
                        <React.Fragment key={index}>
                          <span>{genreItem.name}</span>{" "}
                          {index !== genreIds.length - 1 && <BsDot size={22} />}
                        </React.Fragment>
                      ) : null
                    )
                  )
                : null}
            </p>
          </div>
          <div className='pb-4'>
            <h2 className='text-xl font-bold'>Description</h2>
            <p>{description}</p>
          </div>
          <div className='pb-4'>
            <h2 className='text-xl font-bold'>Release Date</h2>
            <p>{releaseDate}</p>
          </div>
          <div className='flex items-center gap-4'>
            <h2 className='text-xl font-bold'>Votes: </h2>
            <div className='space-y-2'>
              <AiOutlineArrowUp
                className='fill-green-500 hover:fill-green-800 cursor-pointer'
                onClick={increaseVotes}
              />
              <p className='selection:bg-transparent'>{voteChange}</p>
              <AiOutlineArrowDown
                className='fill-red-500 hover:fill-red-800 cursor-pointer'
                onClick={decreaseVotes}
              />
            </div>
          </div>
          <div className='relative flex w-full h-12 border-white border-2'>
            <div style={popularityStyle} className='bg-green-500 h-full'></div>
            <p className='absolute w-full text-center leading-[48px] tracking-[16px]'>
              Popularity {popularityPercent}%
            </p>
          </div>
          <Credits id={selectedMovie.id} />
          <Reviews id={selectedMovie.id} />
          <Related id={selectedMovie.id} />
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
