// 영화 기본 장르 상수 선언 (const 사용 예시)
const defaultGenre = "Unknown";

// 영화 객체 배열 선언 (let 사용 예시)
let movies = [
  {
    title: "미션 임파서블:파이널 레코닝",
    director: "크리스토퍼 맥쿼리",
    year: 2025,
    genre: "Action",
  },
  {
    title: "파묘",
    director: "장재현",
    year: 2024,
    genre: "Mistery",
  },
  {
    title: "서울의 봄",
    director: "김성수",
    year: 2023,
    genre: "Drama",
  },
];

// 영화 객체 3개 하드코딩 (var 사용 예시)
const movie1 = {
  title: "The Matrix",
  director: "Wachowskis",
  year: 1999,
  genre: "Sci-Fi",
};
const movie2 = {
  title: "Inception",
  director: "Nolan",
  year: 2010,
  genre: "Sci-Fi",
};
const movie3 = {
  title: "Parasite",
  director: "Bong",
  year: 2019,
  genre: "Drama",
};
movies.push(movie1);
movies.push(movie2);
movies.push(movie3);

// 최소 3개의 영화 객체를 하드코딩으로 배열에 추가
movies.push({
  title: "The Matrix",
  director: "Wachowskis",
  year: 1999,
  genre: "Sci-Fi",
});
movies.push({
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  genre: "Sci-Fi",
});
movies.push({
  title: "Parasite",
  director: "Bong Joon-ho",
  year: 2019,
  genre: "Drama",
});
// 빈 속성이 있는 영화 예시 (기본값 적용 확인용)
movies.push({
  title: "Eternal Sunshine of the Spotless Mind",
  director: "",
  year: 2004,
  genre: "",
});

console.log(movies);

const printMovie = (index, director = "Unknown", movie) => {
  console.log(
    `${index}. Title: ${movie.title}, Director: ${director}, Year: ${movie.year}, Genre: ${movie.genre}`
  );
  // 1. Title: [title], Director: [director], Year: [year], Genre: [genre]
};

const printMovies = (movies) => {
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (!movie.title) movie.title = "Unknown";
    printMovie(i, movie.director, movie);
  }
};

const printTotalMovies = (movies) => {
  // Total Movies: [총 영화 수]
  console.log(`Total Movies: ${movies.length}`);
};

console.log("Movie Collection:");
printMovies(movies);
printTotalMovies(movies);
