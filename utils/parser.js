const cheerio = require('cheerio');
const {cwInfo, techMemeInfo} = require('../constants')
/**
 *
 * @param {String} html
 */
function parseComputerWorldHTML(html){
  let eventsInfo = [];
  let $ = cheerio.load(html);
  const tableContent = $("#cwsearchabletable > tbody > tr");
  tableContent.each((index, element) => {
    let tds = $(element).find("td");
    let ths = $(element).find("th");
    let website = cwInfo.name;
    let title = $(ths[0]).text();
    let fromDate = $(tds[1]).text();
    let toDate = $(tds[2]).text();
    let location = $(tds[3]).text();
    eventsInfo.push({website, title, date:`${fromDate} to ${toDate}`, location});
  })
  return eventsInfo;
}

/**
 *
 * @param {String} html
 */
function parseTechMemeHTML(html){
  let eventsInfo = [];
  let $ = cheerio.load(html);
  const eventsDivs = $("#events > div");
  eventsDivs.each((index, element) => {
    let eventInfo = $(element).find("a > div");
    let website = techMemeInfo.name;
    let date = $(eventInfo[0]).text();
    let title = $(eventInfo[1]).text();
    let location = $(eventInfo[2]).text();
    eventsInfo.push({website, title, date, location});
  })
  return eventsInfo;
}

module.exports = {
  parseComputerWorldHTML,
  parseTechMemeHTML
}
