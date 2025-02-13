import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="AboutPage">
      {/* Navigation */}
      <Navbar />

      {/* Main Team Image */}
      <section className="about-main-image">
        <img src="/team.jpg" alt="Our Team" className="team-main-image" />
      </section>

      {/* Sub Images Section */}
      <section className="about-sub-images container">
        <div className="row">
          <div className="col-md-4 col-12">
            <img src="/teaching.jpg" alt="Teaching" className="about-sub-image" />
          </div>
          <div className="col-md-4 col-12">
            <img src="/office.jpg" alt="Office" className="about-sub-image" />
          </div>
          <div className="col-md-4 col-12">
            <img src="/cars.jpg" alt="Cars" className="about-sub-image" />
          </div>
        </div>
      </section>

      {/* Founding Details Section */}
      <section className="about-details container my-5">
        <div className="founding-details mb-4">
          <h2>Good Hope Ministries</h2>
          <ul>
            <li>Founded in 2001 by Joe & Anna Ebert</li>
            <li>Works with the Tumbuka people in every village in northern Malawi</li>
            <li>Home base is in Luwinga, Mzuzu</li>
            <li>Office in Canada is located in London, ON, Canada</li>
          </ul>
        </div>

        {/* Longer Descriptive Passage */}
        <div className="detailed-description">
          <p>
            Good Hope Ministries is a holistic ministry committed to improving the lives of the Tumbuka people in northern Malawi through sharing God's word and showing God's love in many practical ways so they will trust us and receive the message we bring. In doing so, that God can be glorified through it all.
          </p>
          <p>
            Our team of nationals teach and train the people in ways they can treasure what they have learned to better their living conditions and so give themselves Good Hope for the future here and for all of eternity.
          </p>
          <h3>GOOD HOPE MINISTRIES AT A GLANCE</h3>
          <p>
            GHM has 6 teams, each responsible for one district in northern Malawi to oversee all our programs there. During the visits to the villages, the team continue to train new Bible Study Group coaches and leaders for adults, youth and children. There are now over 7,000 established groups in most villages in the north, with over 200,000 attending. To God be the glory!
          </p>
          <p>
            Giving New Testaments to all who attend the Bible Study groups at least 10 times. We are limited to 12,000 per year and wishing we had more to give away. So far over 340,000 NTs have been distributed.
          </p>
          <p>
            Distributing Bible Lessons to anyone with the desire to study God's word from young to old. Last year 170,000 books were distributed.
          </p>
          <p>
            Teach men to provide, protect and love their wives and children God's way and teach women, youth, and children their roles — God's way as well.
          </p>
          <p>
            Showing the ‘JESUS’ film—a 2-hour film on the life of Christ in villages they go to. Over 2 million people have seen the film.
          </p>
          <p>
            Repairing broken boreholes (wells) and treating 250,000 people with skin issues such as ringworm, scabies, and sores over the years.
          </p>
          <p>
            Visiting all 6 prisons in the north to teach Bible Study groups; those who attend are given a free lunch once a month—"It's like Christmas."
          </p>
          <p>
            Distributing reading glasses in all the villages to everyone in need.
          </p>
          <p>
            Providing protection for the abused of all ages through our Protecting Our Children program.
          </p>
          <p>
            Establishing thousands of Children's Bible Clubs where children learn that Jesus loves them and is always with them. These clubs become a family and a place where they belong.
          </p>
          <p>
            Teaching youth lessons like "Why Am I Here on Earth?" gives them purpose in life, helping reduce suicides and empowering them to help others.
          </p>
          <p>
            Our goal is to reach all 2,100,000 Tumbuka people living in northern Malawi.
          </p>
        </div>
      </section>

        {/* Footer Section */}
        <Footer />
    </div>
  );
}

export default AboutPage;
