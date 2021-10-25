export function fetchAll(urlArray) {
  return Promise.all(
    urlArray.map(url => {
      return fetch(url)
        .then(res => res.json())
        .then(data => data.results)
    })
  ).then(results => results.flat())
}
