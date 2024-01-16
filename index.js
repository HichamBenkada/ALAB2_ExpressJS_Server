const express = require("express");
const app = express();
const PORT = 5500;

/**
 * Make use of EJS view engine
 */
app.set("view engine", "ejs");
// //Styles
app.use(express.static("styles"));

app.get("/", (req, res) => {
  const options = [
    {
      title: "SSR(Server-side rendering)",
      content:
        "Server-side rendering is where your site's content is rendered on the web server rather than the browser. This server prepares an HTML file with user-specific data and sends it to the user's machine",
    },
    {
      title: "View Engine!!!",
      content: `View engines allow us to render web pages using template files. These templates are filled with actual data and served to the client. There are multiple view engines, check out the documentation for the most popular ones to learn how view engine work behined the seen \
    <a href='https://pugjs.org/api/getting-started.html'>Pug</a>, \
    <a href='https://www.npmjs.com/package/mustache'>Mustache</a>, or \
    <a href='https://www.npmjs.com/package/ejs'>EJS</a>. <br/><br/>\
    In this project, I have created a basic template engine using <code>ejs view engine </code> \
    , then used <code>res.render</code> to render this page using this content within the template.`,
    },
    {
      title: "EJS (Embedded JavaScript)",
      content:
        '"ejs"is a simple templating language that allows developers to generate HTML markup using plain JavaScript. It provides an easy-to-use syntax for embedding dynamic content within HTML templates, making it a popular choice for server-side rendering with Node',
    },
  ];

  res.render("index", { title: "Home", options });
});

// about page
app.get("/about", (req, res) => {
  res.render("about");
});

// if page not found
app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Hicham's Server is waiting for calls on port ${PORT}`);
});
