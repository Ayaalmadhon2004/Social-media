import React, { useState } from 'react'
import "./HelpCenter.css"
import Help from "../Assets/Images/flat-design-illustration-customer-support.png";


const HelpCenter = () => {
    
    const articles=[
        {
            id:1,
            title:"Get started with node.js",
            description:"Satisfied conveying a dependent contented he gentleman agreeable do be.",
            like:400,
            dislike:0,
        },
        {
            id:2,
            title:"Upgrade Gulp 3 to Gulp 4 the gulpfile.js workflow",
            description:"Required his you put the outlived answered position.",
            like:100,
            dislike:10,
        },
        {
            id:3,
            title:"6 Reasons to use Bootstrap 5 for better UI development",
            description:"As it so contrasted oh estimating instrument. Size like body some one had.",
            like:30,
            dislike:4,
        },
        {
            id:4,
            title:"A beginner's guide to browser-sync",
            description:"Started several mistake joy say painful removed reached end.",
            like:120,
            dislike:18,
        },
    ];

    const[states,setStates]=useState(
        articles.reduce((acc,article)=>{
            acc[article.id]={liked:false,disliked:false};
            return acc;
        },{})
     );

     const toggleLike=(id)=>{
        setStates((prev)=>({
            ...prev,
            [id]: {
                liked: !prev[id].liked,
                disliked: prev[id].liked ? prev[id].disliked : false // إذا فعّل like، الغي dislike
              }
        }));
     };

     const [selectedQuestion, setSelectedQuestion] = useState("");

     const data = {
       "How can we Help": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sed laborum! Pariatur ipsam nisi est minima ducimus. Animi illo laboriosam ipsam asperiores reprehenderit sit, et qui maiores suscipit? Possimus itaque accusamus temporibus ratione autem dolorum nihil rerum sapiente a sint culpa minus repellat quo odit deleniti, eaque dolor consequuntur harum. Consectetur atque sequi facilis eveniet quia beatae ducimus rem odio ullam, nihil ad ab exercitationem blanditiis dolorem, libero magnam voluptatibus, porro a aut quod molestias harum. Amet, laudantium! Possimus aspernatur consequuntur quibusdam! Magni dolorem ad minima commodi voluptas, optio, consectetur numquam provident quaerat aliquam neque, fugiat veniam quidem aut incidunt distinctio. Architecto nulla quaerat illum ducimus dolorum quia quod consequatur, aliquam quasi animi impedit, quam adipisci vero recusandae ex harum dolores modi nostrum. Accusantium esse magni quis nulla temporibus voluptatibus delectus, saepe ea, nemo quibusdam amet non. Error deserunt ratione amet nesciunt dolorum magni necessitatibus veniam laborum hic expedita consequatur dolor eos quas commodi vitae, libero ex reiciendis voluptatum accusantium, mollitia odit ab! Architecto, at nesciunt similique aut tenetur explicabo? Non quo sunt sequi numquam reprehenderit cumque rem necessitatibus culpa sit, nam recusandae, deserunt at animi ex eum esse corporis, eaque facilis dolores! Est necessitatibus adipisci accusamus dolorem nisi ut?",
       "How to edit my profile": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sed laborum! Pariatur ipsam nisi est minima ducimus. Animi illo laboriosam ipsam asperiores reprehenderit sit, et qui maiores suscipit? Possimus itaque accusamus temporibus ratione autem dolorum nihil rerum sapiente a sint culpa minus repellat quo odit deleniti, eaque dolor consequuntur harum. Consectetur atque sequi facilis eveniet quia beatae ducimus rem odio ullam, nihil ad ab exercitationem blanditiis dolorem, libero magnam voluptatibus, porro a aut quod molestias harum. Amet, laudantium! Possimus aspernatur consequuntur quibusdam! Magni dolorem ad minima commodi voluptas, optio, consectetur numquam provident quaerat aliquam neque, fugiat veniam quidem aut incidunt distinctio. Architecto nulla quaerat illum ducimus dolorum quia quod consequatur, aliquam quasi animi impedit, quam adipisci vero recusandae ex harum dolores modi nostrum. Accusantium esse magni quis nulla temporibus voluptatibus delectus, saepe ea, nemo quibusdam amet non. Error deserunt ratione amet nesciunt dolorum magni necessitatibus veniam laborum hic expedita consequatur dolor eos quas commodi vitae, libero ex reiciendis voluptatum accusantium, mollitia odit ab! Architecto, at nesciunt similique aut tenetur explicabo? Non quo sunt sequi numquam reprehenderit cumque rem necessitatibus culpa sit, nam recusandae, deserunt at animi ex eum esse corporis, eaque facilis dolores! Est necessitatibus adipisci accusamus dolorem nisi ut?",
       "How much i offer the sellers": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nisi est minima ducimus. Animi illo laboriosam ipsam asperiores reprehenderit sit, et qui maiores suscipit? Possimus itaque accusamus temporibus ratione autem dolorum nihil rerum sapiente a sint culpa minus repellat quo odit deleniti, eaque dolor consequuntur harum. Consectetur atque sequi facilis eveniet quia beatae ducimus rem odio ullam, nihil ad ab exercitationem blanditiis dolorem, libero magnam voluptatibus, porro a aut quod molestias harum. Amet, laudantium! Possimus aspernatur consequuntur quibusdam! Magni dolorem ad minima commodi voluptas, optio, consectetur numquam provident quaerat aliquam neque, fugiat veniam quidem aut incidunt distinctio. Architecto nulla quaerat illum ducimus dolorum quia quod consequatur, aliquam quasi animi impedit, quam adipisci vero recusandae ex harum dolores modi nostrum. Accusantium esse magni quis nulla temporibus voluptatibus delectus, saepe ea, nemo quibusdam amet non. Error deserunt ratione amet nesciunt dolorum magni necessitatibus veniam laborum hic expedita consequatur dolor eos quas commodi vitae, libero ex reiciendis voluptatum accusantium, mollitia odit ab! Architecto, at nesciunt similique aut tenetur explicabo? Non quo sunt sequi numquam reprehenderit cumque rem necessitatibus culpa sit, nam recusandae, deserunt at animi ex eum esse corporis, eaque facilis dolores! Est necessitatibus adipisci accusamus dolorem nisi ut?",
       "installation Guide": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sed nisi est minima ducimus. Animi illo laboriosam ipsam asperiores reprehenderit sit, et qui maiores suscipit? Possimus itaque accusamus temporibus ratione autem dolorum nihil rerum sapiente a sint culpa minus repellat quo odit deleniti, eaque dolor consequuntur harum. Consectetur atque sequi facilis eveniet quia beatae ducimus rem odio ullam, nihil ad ab exercitationem blanditiis dolorem, libero magnam voluptatibus, porro a aut quod molestias harum. Amet, laudantium! Possimus aspernatur consequuntur quibusdam! Magni dolorem ad minima commodi voluptas, optio, consectetur numquam provident quaerat aliquam neque, fugiat veniam quidem aut incidunt distinctio. Architecto nulla quaerat illum ducimus dolorum quia quod consequatur, aliquam quasi animi impedit, quam adipisci vero recusandae ex harum dolores modi nostrum. Accusantium esse magni quis nulla temporibus voluptatibus delectus, saepe ea, nemo quibusdam amet non. Error deserunt ratione amet nesciunt dolorum magni necessitatibus veniam laborum hic expedita consequatur dolor eos quas commodi vitae, libero ex reiciendis voluptatum accusantium, mollitia odit ab! Architecto, at nesciunt similique aut tenetur explicabo? Non quo sunt sequi numquam reprehenderit cumque rem necessitatibus culpa sit, nam recusandae, deserunt at animi ex eum esse corporis, eaque facilis dolores! Est necessitatibus adipisci accusamus dolorem nisi ut?",
       "Additional options and services ": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sed laborum! Pariatur ipsam nisi est minima ducimus. Animi illo laboriosam ipsam asperiores reprehenderit sit, et qui maiores suscipit? Possimus itaque accusamus temporibus ratione autem dolorum nihil rerum sapiente a sint culpa minus repellat quo odit deleniti, eaque dolor consequuntur harum. Consectetur atque sequi facilis eveniet quia beatae ducimus rem odio ullam, nihil ad ab exercitationem blanditiis dolorem, libero magnam voluptatibus, porro a aut quod molestias harum. Amet, laudantium! Possimus aspernatur consequuntur quibusdam! Magni dolorem ad minima commodi voluptas, optio, consectetur numquam provident quaerat aliquam neque, fugiat veniam quidem aut incidunt distinctio. Architecto nulla quaerat illum ducimus dolorum quia quod consequatur, aliquam quasi animi impedit, quam adipisci vero recusandae ex harum dolores modi nostrum. Accusantium esse magni quis nulla temporibus voluptatibus delectus, saepe ea, nemo quibusdam amet non. Error deserunt ratione amet nesciunt dolorum magni necessitatibus veniam laborum hic expedita consequatur dolor eos quas commodi vitae, libero ex reiciendis voluptatum accusantium, mollitia odit ab! Architecto, at nesciunt similique aut tenetur explicabo? Non quo sunt sequi numquam reprehenderit cumque rem necessitatibus culpa sit, nam recusandae, deserunt at animi ex eum esse corporis, eaque facilis dolores! Est necessitatibus adipisci accusamus dolorem nisi ut?",
       "What are the difference between 2 ": "Lorem ipsum dolor Labore, sed laborum! Pariatur ipsam nisi est minima ducimus. Animi illo laboriosam ipsam asperiores reprehenderit sit, et qui maiores suscipit? Possimus itaque accusamus temporibus ratione autem dolorum nihil rerum sapiente a sint culpa minus repellat quo odit deleniti, eaque dolor consequuntur harum. Consectetur atque sequi facilis eveniet quia beatae ducimus rem odio ullam, nihil ad ab exercitationem blanditiis dolorem, libero magnam voluptatibus, porro a aut quod molestias harum. Amet, laudantium! Possimus aspernatur consequuntur quibusdam! Magni dolorem ad minima commodi voluptas, optio, consectetur numquam provident quaerat aliquam neque, fugiat veniam quidem aut incidunt distinctio. Architecto nulla quaerat illum ducimus dolorum quia quod consequatur, aliquam quasi animi impedit, quam adipisci vero recusandae ex harum dolores modi nostrum. Accusantium esse magni quis nulla temporibus voluptatibus delectus, saepe ea, nemo quibusdam amet non. Error deserunt ratione amet nesciunt dolorum magni necessitatibus veniam laborum hic expedita consequatur dolor eos quas commodi vitae, libero ex reiciendis voluptatum accusantium, mollitia odit ab! Architecto, at nesciunt similique aut tenetur explicabo? Non quo sunt sequi numquam reprehenderit cumque rem necessitatibus culpa sit, nam recusandae, deserunt at animi ex eum esse corporis, eaque facilis dolores! Est necessitatibus adipisci accusamus dolorem nisi ut?",
       "How can i git it ": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sed laborum! Pariatur ipsam nisi est minima ducimus. Animi illo laboriosam ipsam asperiores reprehenderit sit, et qui maiores suscipit? Possimus itaque accusamus temporibus ratione autem dolorum nihil rerum sapiente a sint culpa minus repellat quo odit deleniti, eaque dolor consequuntur harum. Consectetur atque sequi facilis eveniet quia beatae ducimus rem odio ullam, nihil ad ab exercitationem blanditiis dolorem, libero magnam voluptatibus, porro a aut quod molestias harum. Amet, laudantium! Possimus aspernatur consequuntur quibusdam! Magni dolorem ad minima commodi voluptas, optio, consectetur numquam provident quaerat aliquam neque, fugiat veniam quidem aut incidunt distinctio. Architecto nulla quaerat illum ducimus dolorum quia quod consequatur, aliquam quasi animi impedit, quam adipisci vero recusandae ex harum dolores modi nostrum. Accusantium esse magni quis nulla temporibus voluptatibus delectus, saepe ea, nemo quibusdam amet non. Error deserunt ratione amet nesciunt dolorum magni necessitatibus veniam laborum hic expedita consequatur dolor eos quas commodi vitae, libero ex reiciendis voluptatum accusantium, mollitia odit ab! Architecto, at nesciunt similique aut tenetur explicabo? Non quo sunt sequi numquam reprehenderit cumque rem necessitatibus culpa sit, nam recusandae, deserunt at animi ex eum esse corporis, eaque facilis dolores! Est necessitatibus adipisci accusamus dolorem nisi ut?",
       "View all questions": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sed laborum! Pariatur ipsam nisi est minima ducimus. Animi illo laboriosam ipsam asperiores reprehenderit sit, et qui maiores suscipit? Possimus itaque accusamus temporibus ratione autem dolorum nihil rerum sapiente a sint culpa minus repellat quo odit deleniti, eaque dolor consequuntur harum. Consectetur atque sequi facilis eveniet quia beatae ducimus rem odio ullam, nihil ad ab exercitationem blanditiis dolorem, libero magnam voluptatibus, porro a aut quod molestias harum. Amet, laudantium! Possimus aspernatur consequuntur quibusdam! Magni dolorem ad minima commodi voluptas, optio, consectetur numquam provident quaerat aliquam neque, fugiat veniam quidem aut incidunt distinctio. Architecto nulla quaerat illum ducimus dolorum quia quod consequatur, aliquam quasi animi impedit, quam adipisci vero recusandae ex harum dolores modi nostrum. Accusantium esse magni quis nulla temporibus voluptatibus delectus, saepe ea, nemo quibusdam amet non. Error deserunt ratione amet nesciunt dolorum magni necessitatibus veniam laborum hic expedita consequatur dolor eos quas commodi vitae, libero ex reiciendis voluptatum accusantium, mollitia odit ab! Architecto, at nesciunt similique aut tenetur explicabo? Non quo sunt sequi numquam reprehenderit cumque rem necessitatibus culpa sitex eum esse corporis, eaque facilis dolores! Est necessitatibus adipisci accusamus dolorem nisi ut?",
     };

     const toggleDislike=(id)=>{
        setStates((prev)=>({
            ...prev,
            [id]: {
                disliked: !prev[id].disliked,
                liked: prev[id].disliked ? prev[id].liked : false // إذا فعّل dislike، الغي like
              }
        }))
     }

  return (
    <div className="conatiner HelpCenter">
       <div className="topHelp">
        <div className="left-help">
          <img src={Help} alt="help"/>
        </div>
        <div className="right-help">
          <h2>Hi Sam , we're here to help</h2>
          <p>Search here to get answers to your questions.</p>
          <input type="text" placeholder="Search"/><i class="fa-solid fa-magnifying-glass"></i>
        </div>
       </div>

       <div className="centerHelp">
        <h2>Popular questions</h2>
        <ul className="centerList">
        {Object.keys(data).map((question) => (
          <li key={question}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setSelectedQuestion(question);
              }}
            >
              {question}
            </a>
          </li>
        ))}
      </ul>
      {selectedQuestion && (
        <div className="answer-box">
          <h3>{selectedQuestion}</h3>
          <p>{data[selectedQuestion]}</p>
        </div>
      )}

       </div>
       <div className="bottomHelp">
        <h2>Popular articles</h2>
          {articles.map((article)=>(
            <div className="article" key={article.id}>
                <div className="left">
                   <h3>{article.title}</h3>
                   <p>{article.description}</p>
                </div>
                <div className="right">
                   <button type="submit" 
                   onClick={() => toggleLike(article.id)}
                   className={`like ${states[article.id].liked ? "active" : ""}`}>
                   <i class="fa-solid fa-thumbs-up"></i> 
                   {article.like}</button>

                   <button type="submit" 
                   onClick={() => toggleDislike(article.id)}
                   className={`dislike ${states[article.id].disliked ? "active2" : ""}`}
                   >
                   {article.dislike}  <i class="fa-solid fa-thumbs-down"></i>
                   </button>

                </div>
            </div>
          ))}
       </div>
    </div>
  )
}

export default HelpCenter
