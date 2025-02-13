import React from 'react';
import Navbar from '../pages/Navbar';
import './PrisonMinistryPage.css';

function PrisonMinistryPage() {
  return (
    <div className="PrisonMinistryPage">
      <Navbar />

      <div className="container my-5">
        {/* Header & Introduction */}
        <header className="mb-5">
          <h2>Good Hope Ministries goes into Prisons</h2>
          <p>
            Every week Good Hope goes into six prisons in northern Malawi to show God's love and share God's word with the men there.
          </p>
          <ul>
            <li>Bringing them lunch once a month</li>
            <li>Distributing clothing, glasses as needed</li>
            <li>Each one receives a New Testament &amp; a book with Bible Lessons</li>
            <li>Teach God's word to the Bible study groups that are established</li>
            <li>Give certificates for successfully completing Bible lessons</li>
          </ul>
        </header>

        {/* Image Gallery */}
        <section className="prison-images mb-5">
          <div className="row">
            {/* First row: 4 images */}
            <div className="col-md-3 col-sm-6 image-item">
              <img src="/mzprison.jpg" alt="teaching 900men at mzuzu prison" className="img-fluid prison-img" />
              <p className="caption">teaching 900men at mzuzu prison</p>
            </div>
            <div className="col-md-3 col-sm-6 image-item">
              <img src="/leading.jpg" alt="leading a bible study group in rumphi" className="img-fluid prison-img" />
              <p className="caption">leading a bible study group in rumphi</p>
            </div>
            <div className="col-md-3 col-sm-6 image-item">
              <img src="/glasses.jpg" alt="distributing glasses" className="img-fluid prison-img" />
              <p className="caption">distributing glasses</p>
            </div>
            <div className="col-md-3 col-sm-6 image-item">
              <img src="/christmas.jpg" alt="it's like christmas when they all receive a lunch of rice and vegetables" className="img-fluid prison-img" />
              <p className="caption">it's like christmas when they all receive a lunch of rice and vegetables</p>
            </div>
          </div>
          <div className="row mt-4">
            {/* Second row: 3 images */}
            <div className="col-md-4 col-sm-6 image-item">
              <img src="/clothes.jpg" alt="distributing clothes" className="img-fluid prison-img" />
              <p className="caption">distributing clothes</p>
            </div>
            <div className="col-md-4 col-sm-6 image-item">
              <img src="/rumphi.jpg" alt="teaching at rumphi prison with 230 men" className="img-fluid prison-img" />
              <p className="caption">teaching at rumphi prison with 230 men</p>
            </div>
            <div className="col-md-4 col-sm-6 image-item">
              <img src="/testament.jpg" alt="all receive new testament and bible lessons" className="img-fluid prison-img" />
              <p className="caption">all receive new testament and bible lessons</p>
            </div>
          </div>
        </section>

        {/* Testimony Section: Benjamin Banda's Testimony */}
        <section className="testimony-section">
          <div className="row align-items-center">
            {/* Text Column */}
            <div className="col-md-6 order-md-1">
              <h3>Benjamin Banda's Testimony</h3>
              <p>
                Words can not express how thankful I was to God for this! I was so thankful and I knew this meant my life would no longer be the same. It is by God’s amazing grace that this is all happening. It is just amazing how God works. Who knew that I could be a free man? I am happy that I accepted God in my life and it’s a privilege to know about the free gift of Salvation that the Lord has given me. I praise Him with all my heart for this.
              </p>
              <p>
                <strong>Benjamin &amp; his wife, Jane</strong> <br />
                at Good Hope Ministries' office <br />
                Benjamin, age 48, has wife &amp; 5 children
              </p>
              <p>
                “I just want to share the amazing wonders that God has done for me. First of all, when Good Hope Ministries came to the prison, I did not expect my life to change like that. I went in as somebody who had lost his way. I thought there was no more hope for me. I thought this was the end of my life as I knew it. There was nothing anybody could do for me, that’s what I had in my mind.
              </p>
              <p>
                But when Good Hope came, my life turned around. I learned the Forgiving Father's lesson and immediately I realised that God still loved me and was always by my side even though I was in prison. Keep in mind, by then, I didn’t even have the slightest idea that I would be out of prison anytime soon. (Good Hope bailed me out for $178.) I had been in there for 9 months and I expected to be there for many more years to come. My family would visit me, but it was not easy to visit me every now and then because I knew my wife was struggling with the kids because she was left alone to take care of them even though she didn’t have a job. I knew there was nobody to help her too.
              </p>
              <p>
                However, when GHM came, I knew that even if I don’t get out of prison, I accepted Jesus Christ as my personal Lord and Saviour and it gave me so much joy to learn about God’s Kingdom and Salvation. I read the Bible you gave me as did everyone else in prison every day. It was such a joy to live for the Lord now. I joined the fellowship team and shared the word of God with friends and studied the GBL (Great Bible Lessons) with some of my fellow inmates at the fellowship.
              </p>
              <p>
                Little did I know that God still had plans for me. After a while, Fumbani Gondwe (prison Chaplain and guard) told me that I had been identified as one of the inmates who had changed so much with Good Hope’s visit, and because of the behaviour I had been showing and my participation in the fellowship and Bible Study Groups, GHM was planning to help settle my bail, together with that of a few other inmates.
              </p>
            </div>
            {/* Image Column */}
            <div className="col-md-6 order-md-2">
              <img src="/benja.jpg" alt="Benjamin Banda" className="img-fluid testimony-img" />
            </div>
          </div>
        </section>

        {/* Testimony Section: Leonard's Testimony */}
        <section className="testimony-section">
          <div className="row align-items-center">
            {/* Image Column */}
            <div className="col-md-6 order-md-1">
              <img src="/leo.jpg" alt="Leonard" className="img-fluid testimony-img" />
            </div>
            {/* Text Column */}
            <div className="col-md-6 order-md-2">
              <h3>LEONARD THANKS GOD FOR SENDING HIM TO PRISON</h3>
              <p>
                When I met Leonard, an inmate in Mzuzu prison, he was dressed in dirty rags. When I asked him if he has any relatives visiting him, he said that the only relative he has now is Jesus Christ.
              </p>
              <p>
                "I learned about the love of Jesus and what he had done for me on the cross through your weekly Bible lessons here in prison and I made the decision to obey and follow Him. I don't care whether my relatives love me or not. What I know is that I have Jesus Christ as my Saviour. My relatives have abandoned me but Jesus has not. He loves me so much. I will come out of prison a changed person. I thank God for sending me here so that I could get to know Him." He was shedding tears as he was talking to me. (Seeing his clothes were exposing his private parts, we gave him a new set of clothes).
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PrisonMinistryPage;
