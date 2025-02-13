import React from 'react';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer'
import './BibleStudyGroupsPage.css';

function BibleStudyGroupsPage() {
  return (
    <div className="BibleStudyGroupsPage">
      {/* Navbar */}
      <Navbar />

      {/* Adult Bible Study Groups Section */}
      <section className="bible-study-section container my-5">
        <h2>ADULT BIBLE STUDY GROUPS</h2>
        <p>
          Over 4000 adult Bible Study Groups have been established where people from any denomination can attend.
        </p>
        <p>
          They are given Bible study lessons to follow and teach from. There are now over 200 lessons translated into 5 languages. All who attend are given a copy of the lessons and many are given a New Testament in their own language.
        </p>
        <p>
          Seven of the GHM teams continually go to their zone to train and teach new leaders.
          ​The Lord is coming soon. What a joy it will be to see many Tumbukans, Ngoni, Chewa, Yao, Ngonde and Lambya people from Malawi in heaven.
        </p>
        <p>To God be the glory!</p>
        <div className="image-grid">
          <div className="image-item">
            <img src="/biblestudy.jpg" alt="Bible Study 1" />
          </div>
          <div className="image-item">
            <img src="/biblestudy1.jpg" alt="Bible Study 2" />
          </div>
          <div className="image-item">
            <img src="/biblestudy2.jpg" alt="Bible Study 3" />
          </div>
        </div>
      </section>

      {/* Youth & Children's Clubs Section */}
      <section className="youth-clubs-section container my-5">
        <h2>YOUTH &amp; CHILDREN'S CLUBS</h2>
        <p>
          About 4,300 youth and children's Bible clubs are active. For many it's a place for them to belong. Many lives are touched and changed as only God can do!
        </p>
        <p>
          When Patrick taught this youth the lesson of ‘The Salvation of the Thief on the Cross’, he told us:
        </p>
        <blockquote>
          “When we reached the last point in the lesson, I just saw tears coming down his face. I waited for him to finish crying. Then he said, “All my life what I have known to do well is only to do bad things and I came to the conclusion that God cannot possibly forgive. But from the start of your reading the lesson right to this point, all I am seeing is that there is no amount of sin that God cannot forgive. He forgave a person just like me on his dying day, even while He was hanging on the cross, yet to me I thought that he cannot forgive me.””
        </blockquote>
        <p>This testimony says it all:</p>
        <blockquote>
          “As a parent, I am very happy now that my children know and believe in Lord Jesus Christ. Their knowing Him has changed their lives positively and it is reflecting in their behavior. I now get the respect that each parent would want to get from their children. This is what makes me proud and love my children even more.”
        </blockquote>
        <p>From a Youth leader:</p>
        <blockquote>
          “Youths are going to the hospital to help clean the hospital and have prayers with the sick. They said the lessons that they have been learning teaches them that Jesus loves every person including those that are in the hospital. So, the youth decided that the only way they can help them is to go and clean the hospital and wash the bed linen for the hospital and patients.”
        </blockquote>
        <div className="image-grid">
          <div className="image-item">
            <img src="/biblestudy3.jpg" alt="Bible Study 4" />
          </div>
          <div className="image-item">
            <img src="/biblestudy4.jpg" alt="Bible Study 5" />
          </div>
          <div className="image-item">
            <img src="/biblestudy5.jpg" alt="Bible Study 6" />
          </div>
          <div className="image-item">
            <img src="/biblestudy6.jpg" alt="Bible Study 7" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default BibleStudyGroupsPage;
