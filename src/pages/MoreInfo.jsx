import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { fetchGenres, fetchMovieInfo, fetchVideoKey } from "../api/fetch";
import Trailer from "../components/Trailer";
import Banner from "../components/Banner";
import Related from "../components/Related";
import { BsDot } from "react-icons/bs";
import Credits from "../components/Credits";
import Reviews from "../components/Reviews";
import { useParams } from "react-router-dom";

function MoreInfo() {
  const { id } = useParams();
  const [selected, setSelected] = useState({});
  useEffect(() => {
    id && fetchMovieInfo(setSelected, id);
  }, [id]);

  const title = selected.title;
  const description = selected.overview;
  const releaseDate = selected.release_date;
  const genreIds = selected.genre_ids || [];

  const [votes, setVotes] = useState(0);
  useEffect(() => {
    if (selected && selected.vote_count) {
      setVotes(selected.vote_count);
    }
  }, [selected]);

  const popularity = selected.vote_average;
  let popularityPercent = popularity * 10;
  popularityPercent = popularityPercent.toString().substring(0, 2);
  const popularityStyle = {
    width: `${popularityPercent}%`,
  };
  const [videoInfo, setVideoInfo] = useState({});
  useEffect(() => {
    Object.keys(selected).length > 0 && fetchVideoKey(id, setVideoInfo);
  }, [selected, id]);

  const [genresList, setGenresList] = useState([]);
  useEffect(() => {
    fetchGenres(setGenresList);
  }, []);

  return Object.keys(selected).length > 0 ? (
    <div id='moreInfo'>
      <div className='w-full min-h-screen pb-4 bg-primary text-white space-y-4'>
        <Banner topMovie={selected}>
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
                          <span>{genreItem.name}</span>&nbsp;
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
                onClick={() => setVotes(votes + 1)}
              />
              <p className='selection:bg-transparent'>{votes}</p>
              <AiOutlineArrowDown
                className='fill-red-500 hover:fill-red-800 cursor-pointer'
                onClick={() => setVotes(votes - 1)}
              />
            </div>
          </div>
          <div className='relative flex w-full h-12 border-white border-2'>
            <div style={popularityStyle} className='bg-green-500 h-full'></div>
            <p className='absolute w-full text-center leading-[48px] tracking-[16px]'>
              Popularity {popularityPercent}%
            </p>
          </div>
          <Credits id={id} />
          <Reviews id={id} />
          <Related id={id} />
        </div>
      </div>
    </div>
  ) : null;
}

export default MoreInfo;
