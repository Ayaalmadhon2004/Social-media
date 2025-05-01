import React, { useState } from 'react';
import './header.css';
import natureImg from '../Assets/santa-maddalena-dolomites-rangesouth-tyrol.jpg';
import personalImg from '../Assets/Images/01-person2.jpg';
import story1 from '../Assets/Images/beautiful-collage-travel-concept.jpg';
import story2 from '../Assets/Images/05-Ctvi5fKK.jpg';
import story3 from '../Assets/Images/modern-smartphone-with-live-abstract-wallpaper-coming-out-screen.jpg';
import story4 from '../Assets/Images/open-book-beautiful-setting.jpg';
import mainPhoto from "../Assets/Images/01-person2.jpg";
import graduated from "../Assets/Images/image1_0.jpg";
import messageUsers from '../data/data';


const Header = React.memo(() => {
  const [photo, setPhoto] = useState(false);
  const [close,setClose] =useState(false);
  const[image,setImage]=useState(null);


  const [video, setVideo] = useState(false);
  const [event, setEvent] = useState(false);
  const [feeling, setFeeling] = useState(false);

  const story = [
    { idx: 1, img: story1, name: 'hellay paper' },
    { idx: 2, img: story2, name: 'leena ahmad' },
    { idx: 3, img: story3, name: 'lara lamy' },
    { idx: 4, img: story4, name: 'lana lorans' },
  ];

  const media = [
    { idx: 1, img: 'fa-solid fa-image', name: 'Photo' },
    { idx: 2, img: 'fa-solid fa-video', name: 'Video' },
    { idx: 3, img: 'fa-solid fa-calendar-days', name: 'Event' },
    { idx: 4, img: 'fa-solid fa-person-breastfeeding', name: 'Feeling' },
  ];
  
  
  const closeChange=()=>{
    setClose(!close);
  }

  const postsDetails = [
    {
      index: 1,
      head: 'Add post photo',
      img: personalImg,
      thoughts: 'share your thoughts here...',
      upload: 'Upload attachment',
      icon: 'fa-solid fa-image',
    },
  ];

  const handleMediaClick = (idx) => {
    setPhoto(false);
    setVideo(false);
    setEvent(false);
    setFeeling(false);

    switch (idx) {
      case 1:
        setPhoto(true);
        break;
      case 2:
        setVideo(!video);
        break;
      case 3:
        setEvent(!event);
        break;
      case 4:
        setFeeling(!feeling);
        break;
      default:
        break;
    }
  };

  const handleChange=(e)=>{
    const file=e.target.files[0];
    if(file){
      setImage(URL.createObjectURL(file));
    }
  }

  const newsSection=[
    {
      index:1,
      news:"Ten questions you should answer truthfully",
      hour:"2hr",
    },
    {
      index:2,
      news:"Five unbelievable facts about money",
      hour:"3hr",
    },
    {
      index:3,
      news:"Best Pinterest Boards for learning about business",
      hour:"4hr",
    },
    {
      index:4,
      news:"Skills that you can learn from business",
      hour:"7hr",
    },
    
  ];

  return (
    <div className={`container headerContainer`}>
      <div className="header3sections">
        <div className="leftHead">
          <img className="background" src={natureImg} alt="nature background" />
          <img className="personal" src={personalImg} alt="personal img" />
          <div className="texts">
          <h3>Sam Lanson</h3>
          <h4>Web Developer at Stackbros</h4>
          <p>
            I'd love to change the world,
            <br /> but they won’t give me the <br />source code.
          </p>
          </div>
          <div className="rates">
            <div>
              <span>256</span>
              <p>Post</p>
            </div>
            <div>
              <span>2.5K</span>
              <p>Followers</p>
            </div>
            <div>
              <span>365</span>
              <p>Following</p>
            </div>
          </div>
          <div className="left-space"></div>
        </div>
        <div className="centerrHead">
          <div className="storyHead">
            <div className="story1">
              <i className="fa-solid fa-plus"></i>
              <br />
              <p>
                Post a <br />
                story
              </p>
            </div>
            <div className="storyContainer">
              {story.map((story) => (
                <div className="stories" key={story.idx}>
                  <img src={story.img} alt={story.name} />
                  <p>{story.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="postSection">
            <img src={mainPhoto} alt="personal-img"/>
            <input type="text" placeholder="Write something here..." />
            <div className="media">
              {media.map((media) => (
                <div key={media.idx} className='PostSharing'>

                  <div className="mediaIcons" onClick={() => 
                     handleMediaClick(media.idx) }>
                    <i className={media.img}></i>
                    <p>{media.name}</p>
                  </div>
                 

                 {
                  /** make it better but later  */
                  /**
                   {photo && media.idx === 1 && (
                    <div className={` photoSection ${close?"active":""}`}>
                      <div className="photo">
                        {postsDetails.map((postImg) => (
                          <div key={postImg.index} >
                              <div className="head">
                              <h3>{postImg.head}</h3>
                              <i className="fa-solid fa-xmark" onClick={() => { closeChange() }} ></i>
                              </div>
                            <div className="thoughts">
                              
                              <div className="textPost">
                              <img src={mainPhoto} alt="personal-img"/>
                              <textarea placeholder='share your thoughts'></textarea>
                              </div>

                               <div className="image-upload">
                                <h3>Upload attachment</h3>
                                <input type="file" id="upload" accept='image/*' onChange={handleChange} />
                               </div>

                               <div className="btns">
                                <div className="btn-red">Cancel</div>
                                <div className="btn-green">Post</div>
                               </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {video && media.idx === 2 && (
                    <div className="videoSection">
                      <div className={` video ${close?"active":""}`}>
                      {postsDetails.map((postImg) => (
                          <div key={postImg.index} >
                              <div className="head">
                              <h3>{postImg.head}</h3>
                              <i className="fa-solid fa-xmark" onClick={() => { closeChange() }} ></i>
                              </div>
                            <div className="thoughts">
                              
                              <div className="textPost">
                              <img src={mainPhoto} alt="personal-img"/>
                              <textarea placeholder='share your thoughts'></textarea>
                              </div>

                               <div className="image-upload">
                                <h3>Upload attachment</h3>
                                <input type="file" id="upload" accept='image/*' onChange={handleChange} />
                               </div>

                               <div className="btns">
                                <div className="btn-red">Cancel</div>
                                <div className="btn-green">Post</div>
                               </div>
                            </div>
                          </div>
                      ))}
                      </div>
                    </div>
                  )}

                  {event && media.idx === 3 && (
                    <div className="eventSection">
                      <div className={` event ${close?"active":""}`}>
                      {postsDetails.map((postImg) => (
                          <div key={postImg.index} >
                              <div className="head">
                              <h3>{postImg.head}</h3>
                              <i className="fa-solid fa-xmark" onClick={() => { closeChange() }} ></i>
                              </div>
                            <div className="thoughts">
                              
                              <div className="textPost">
                              <img src={mainPhoto} alt="personal-img"/>
                              <textarea placeholder='share your thoughts'></textarea>
                              </div>

                               <div className="image-upload">
                                <h3>Upload attachment</h3>
                                <input type="file" id="upload" accept='image/*' onChange={handleChange} />
                               </div>

                               <div className="btns">
                                <div className="btn-red">Cancel</div>
                                <div className="btn-green">Post</div>
                               </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {feeling && media.idx === 4 && (
                    <div className="feelingSection">
                      <div className={` feeling ${close?"active":""}`}>
                      {postsDetails.map((postImg) => (
                          <div key={postImg.index} >
                              <div className="head">
                              <h3>{postImg.head}</h3>
                              <i className="fa-solid fa-xmark" onClick={() => { closeChange() }} ></i>
                              </div>
                            <div className="thoughts">
                              
                              <div className="textPost">
                              <img src={mainPhoto} alt="personal-img"/>
                              <textarea placeholder='share your thoughts'></textarea>
                              </div>

                               <div className="image-upload">
                                <h3>Upload attachment</h3>
                                <input type="file" id="upload" accept='image/*' onChange={handleChange} />
                               </div>

                               <div className="btns">
                                <div className="btn-red">Cancel</div>
                                <div className="btn-green">Post</div>
                               </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                   */
                 }
                </div>
              ))}
            </div>
          </div>
          <div className="personalPost1">
            <div className="head">
              <img src={mainPhoto} alt="personal-img"/>
              <div>
                <h3>Sam lanson</h3>
                <span>2 hours</span>
              </div>
            </div>
            <div className="details">
              <p>I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
              <img src={graduated} alt="graduated"/>
            </div>
            <div className="interactions">
            <div className='interactionContainer'>
              <span><i class="fa-solid fa-thumbs-up"></i> liked(56)</span>
              <span><i class="fa-solid fa-comment"></i> commented(23)</span>
              <span className='share'><i class="fa-solid fa-share"></i> share(2)</span>
            </div>
            </div>
            <div className="comments">
              <div className="head-comments">
              <img src={mainPhoto} alt="personal-img"/>
              <input type="text" placeholder="Add a comment"/>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
              <div className="content-comments">
                {messageUsers.map((comment)=>(
                  <div className="comment" key={comment.id}>
                    <div className="head-comment">
                      <img src={comment.img} alt={comment.name}/>
                      <div className="content-head-comment ">
                      <h3>{comment.name}</h3> 
                      <span>{comment.time}</span>
                      </div>
                    </div>
                     <div className='center-section gray'>
                     <p>{comment.comment}</p>
                     </div>
                     <div className="interaction-comment">
                      <span>Like({comment.like})</span>
                      <span>Reply</span>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="spaceCenterHeader"></div>
        </div>
        <div className="rightHead">
          <div className="followSection">
            <h2>Who to follow</h2>
            {messageUsers.map((follow)=>(
              <div className="follow" key={follow.id}>
                 <img src={follow.img} alt={follow.name}/>
                 <div className="follow-details">
                  <h3>{follow.name}</h3>
                  <p>{follow.job}</p>
                 </div>
                 {
                 follow.followed==="true"?
                 (<i class="fa-solid fa-user-group"></i>):
                 (<i class="fa-solid fa-plus"></i>)}
              </div>
            ))}
          </div>
          <div className="news-section">
            <h2>Today's news</h2>
            {newsSection.map((newsItem)=>(
              <div className='news' key={newsItem.index}>
              <a href='#'>{newsItem.news}</a><br/>
              <span>{newsItem.hour}</span>
              </div>
            ))}
          </div>
          <div className="right-space"></div>
        </div>
      </div>
    </div>
  );
});

export default Header;
