export function splitReviewsDate(string) {
  const array = string.split('T')[0];
  return array;
}

export function twoDigitRating(num) {
  const rating = num.toString().substring(0, 2);
  return rating;
}