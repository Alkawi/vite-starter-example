import { renderCards } from '../components/Card.js'

export async function fetchAll(urlArray, type, container) {
  let allData = []
  urlArray.forEach(url => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        allData.push(...data.results)
        if (data.info.count === allData.length) {
          container.append(renderCards(allData, type))
        }
      })
  })
  return allData
}
