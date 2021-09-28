import React, { useEffect, useState} from 'react';
import { Row, Spinner } from 'react-bootstrap';
import UpdateNews from '../UpdateNews/UpdateNews';

const News = () => {

    const  [updateNews, setUpdateNews] = useState([]);

    useEffect(() => {


        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=09cdee9a7f384258ac81bc7fdc6c8665')
        .then(response => response.json())
        .then( data => setUpdateNews(data.articles))

    }, [])

    return (
        <>
        {
            updateNews.length ===0 ? 
            <Spinner animation="border" />
        
            :

            <Row xs={1} md={3} className="g-4">
            {
              updateNews.map(upNews => <UpdateNews updatenewS={upNews}></UpdateNews>)
            }        
      </Row>
        }
       </>
    );
};

export default News;

//react bootstrap theke card group copy kore, data card row ar modde jeta repeat hobe seta updateNews ar modde rakte hobe.. and jar modde ai update data gula thakbe seita (Row) News.js ar modde rakte hobe.

// ai api ar modde object ar array ase, ai array r moddei news ase. tai data set korar somoy setUpdateNews(data) dile hobe na se janno setUpdateNews(data.articles) use kore data access korte hobe.

// conditional sapekke spinner set kora hoise.