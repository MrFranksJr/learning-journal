export { sortByDate }

function sortByDate(a, b) {
    let publishDate1 = new Date(a.date), publishDate2 = new Date(b.date)
    return publishDate2-publishDate1
}