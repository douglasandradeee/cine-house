// function Movies(code, title, duration, cast, realeaseYear, inTheaters) {
//     this.code = code
//     this.title = title
//     this.duration = duration
//     this.cast = cast
//     this.realeaseYear = realeaseYear
//     this.inTheaters = inTheaters
// }

const catalog = [
    {
        code: 1,
        title: "Bacurau",
        duration: 2.10,
        cast: ["Sônia Braga", "Udo Kier", "Barbara Colen"],
        realeaseYear: 2019,
        inTheaters: true,
    },
    {
        code: 2,
        title: "Mariguella",
        duration: 2.35,
        cast: ["Seu Jorge", "Adriana Esteves", "Bruno Gagliasso"],
        realeaseYear: 2021,
        inTheaters: true,
    },
    {
        code: 3,
        title: "Matrix",
        duration: 2.15,
        cast: ["Keanue Reeves", "Carie Moss", "Hugo Weaving"],
        realeaseYear: 1999,
        inTheaters: false,
    }
]
module.exports = catalog
// module.exports = Movies