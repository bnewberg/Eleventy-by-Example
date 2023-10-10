const { DateTime } = require("luxon")

module.exports = {
    layout: "layouts/post.html",
    tags: ["posts"],
    author: "Branden",
    eleventyComputed: {
        dateString: ({page}) => DateTime.fromJSDate(page.date, {zone: 'utc'}).toLocaleString(DateTime.DATE_FULL)
    }
}