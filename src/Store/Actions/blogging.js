export  function blogging() {

   fetch("https://api.covid19api.com/countries")
   .then((res) => {
       return res.json()
   })
    .then( (res) => {
        console.log(res, "res")
    })

    return {
        type: "BLOG",
        blogging: { blogs: "apis"}
    }
}