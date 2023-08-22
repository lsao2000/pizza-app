import React from 'react'
import multiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'
const About = () => {
  return (
    <div className='about'>
        <div className='aboutTop' style={{background:`url(${multiplePizzas})`}}>
            <br/>
            <br/>
            <br/>
        </div>
        <div className='aboutBottom'>
          <h1>ABOUT US</h1>
          <p> Scrapy is a free open-source web scraping framework. It enables the extraction of data wanted from a particular website in a fast, simple, and yet extensible way. It is also well documented.

Scrapy allows us to define data structures, write data extractors and comes with built-in CSS and XPath selectors that we can use to extract the data. The scrapers make a GET request to a website, parse the HTML response, and extract targeted data using the out defined data extractors. There are multiple output formats such as JSON, CSV, XML. Output can also be saved to the database.

Scrapy has countermeasures to many website restrictions such as randomizing time between requests by default which can help avoid getting banned from them. </p>
        </div>
    </div>
  )
}

export default About