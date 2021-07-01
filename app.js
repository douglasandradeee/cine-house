const catalog = require("./catalog/catalog")
var readlineSync = require('readline-sync')
// const Movies = require("./catalog/catalog")



let addFilm = (title, duration, cast, realeaseYear, inTheaters) => {
    title = readlineSync.question("Digite o título do filme: ")
    duration = Number(readlineSync.question("Digite a duração do filme: "))
    cast = (readlineSync.question("Digite o elenco do filme: "))
    cast = cast.split(" ,")
    realeaseYear = Number(readlineSync.question("Digite o ano de lançamento: "))
    inTheaters = Number(readlineSync.question("Dígite 1(um) se estiver em cartaz ou, 0(zero) caso não: "))
    if (inTheaters == 1) {
        inTheaters = true
    } else {
        inTheaters = false
    }

    const newMovie = {
        code: catalog.length + 1,
        title,
        duration,
        cast,
        realeaseYear,
        inTheaters,
    }
    catalog.push(newMovie)
    console.log("Movie successfully added!")

    return console.log(catalog)
}

let findMovieByCode = (code) => {
    code = Number(readlineSync.question("Digite o código do filme: "))
    for (i = 0; i < catalog.length; i++) {
        var movie = catalog[i]
        if (movie.code == code) {
            console.log(movie)
        } else {
            console.log("Movie not found")
        }
    }

}
// findMovieByCode()
// addFilm()

let listarFilme = () => {
    var result = []
    for (i = 0; i < catalog.length; i++) {
        var filme = catalog[i]
        filme.inTheaters ? result.push(filme) : 0
    }
    return console.table(result)
}
listarFilme()