import React from 'react'
import CategoryButton from '../category button/CategoryButton'
import bgdetail from '../../../images/bgdetail.png'
import bg3 from '../../../images/bg3.png'
import instructor from '../../../images/instructor.png'
import { Data } from '../CoursesAPI'
import { useParams } from "react-router";
import './CourseDetail.css'
import { LearningData } from '../WhatYouWillLearn'

const CourseDetail = () => {
  let { matchid } = useParams();
  let getdata = Data.filter((item) => {
    if (matchid == item.id) {
      return item;
    }
  });

  const styles = {
    backgroundImage: `url(${bgdetail})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: "510px",
    color: "#FFFFFF",
    marginBottom: "50px",
    marginTop: "50px",
    padding: "20px"
  };

  const styles2 = {
    backgroundImage: `url(${bg3})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: "300px",
    color: "#FFFFFF",
    marginBottom: "50px",
    marginTop: "50px"
  };
  return (
    <div>
      {/* Button Section */}
      <div className='detail-btns'>
        <CategoryButton />
      </div>

      {/* Detail section */}

      <div className='detail-parent' style={styles}>
        <div className='detail-child1'>
          {
            getdata.map((item) => {
              return (
                <div>
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>
                  <h2>{item.instructor}</h2>
                  <div display="flex">
                    <h6>01/01/2020</h6>
                    <h6>English</h6>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='detail-child2'>
          <div style={styles2}>
            <h3>Preview Course</h3>
          </div>
        </div>
      </div>

      {/* what you will learn */}
      <div className='detail-learning'>
        <h1>What will you learn</h1>
        <div className='detail-learning-child'>
          {
            LearningData.map((item) => {
              return (
                <div className='learning-subchild'>
                  <img src={item.img} />
                  <p>{item.description}</p>
                </div>
              )
            })
          }
        </div>
        <button className='learning-enroll'>Enroll Now</button>
      </div>

      {/* requirement and description */}

      <div className='learning-req' style={{
        padding: "20px 40px"
      }}>
        <h1>Requirement</h1>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur. Convallis vitae ut commodo nibh semper elit lectus faucibus purus.</li>
          <li>Lorem ipsum dolor sit amet consectetur. Est et ipsum ut platea ac dapibus condimentum gravida eu. Ipsum phasellus turpis lobortis massa tincidunt aliquet. Velit phasellus dui nulla ultrices scelerisque.</li>
          <li>Lorem ipsum dolor sit amet consectetur. Est et ipsum ut platea ac dapibus condimentum gravida eu. Ip.</li>
        </ul>
      </div>
      <div className='learning-des' style={{
        padding: "20px 40px"
      }}>
        <h1>Description</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Morbi amet enim venenatis facilisis sit et. Volutpat mi semper penatibus tellus nibh commodo mattis bibendum malesuada. In sed sagittis imperdiet lacus. Enim interdum id potenti bibendum lacus nunc elementum duis mauris.</p>
        <p>Lorem ipsum dolor sit amet consectetur. Morbi amet enim venenatis facilisis sit et. Volutpat mi semper penatibus tellus nibh commodo mattis bibendum malesuada. In sed sagittis imperdiet lacus. Enim interdum id potenti bibendum lacus nunc elementum duis mauris.</p>
      </div>

      {/* rating and pricing */}

      <div className='price-parent'>
        <h1>Pricing & Rating</h1>
        {
          getdata.map((item) => {
            return (
              <div className='price-child'>
                <h2>{item.rating}</h2>
                <h1>{item.price}</h1>
              </div>
            )
          })
        }
      </div>

      {/* instructor */}

      <div className='instructor-parent'>
        <h1 className='instructor'>Instructor</h1>
        <h6 className='instrucor-name'>Joe Lane</h6>
        <div className='instructor-child1'>
          <h6>Agricultural Enginear</h6>
          <h6>abc@gmail.com</h6>
        </div>
        <div className='instructor-child2'>
          <div>
            <img src={instructor} />
          </div>
          <div>
            <p>4.5 Instructor Rating</p>
            <p>50 Reviews</p>
            <p>20 Courses</p>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur. Morbi amet enim venenatis facilisis sit et. Volutpat mi semper penatibus tellus nibh commodo mattis bibendum malesuada. In sed sagittis imperdiet lacus. Enim interdum id potenti bibendum lacus nunc elementum duis mauris.</p>
        <button className='instructor-btn'>Enroll Now</button>
      </div>
    </div>
  )
}

export default CourseDetail