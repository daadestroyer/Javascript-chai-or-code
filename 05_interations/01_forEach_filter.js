const allheroes = ["shaktiman","hatim","sonpari","hero","doraemon","ironman","thor","captainamerica"]
const heroesWithNameStartWithS = []

// simply printing the array using foreach
allheroes.forEach((hero)=>
    console.log(hero)
)

console.log();

// filtering the elements present in array based on some values
// if we are putting curly braces then we need to put return keyword otherwise not
// const res = allheroes.filter((hero)=>
//   hero.startsWith("s")
// )

const res = allheroes.filter((hero)=> {
    return hero.startsWith("s")
})

console.log(res);


console.log();


// filter all heroes whose name start with S and store them in heroesWithNameStartWithS array

allheroes.filter((hero)=>{
    if(hero.startsWith("s")){
        heroesWithNameStartWithS.push(hero)
    }
})

console.log(heroesWithNameStartWithS);


console.log();

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const historyGenreBooks = books.filter((book)=>{
    return book.genre == "History"
  })

  console.log(historyGenreBooks);


  console.log();


  const historyGenreBooksPublishDate95 = books.filter((book)=>{
    return book.publish >= 1995 && book.genre == "History"
  })

  console.log(historyGenreBooksPublishDate95);