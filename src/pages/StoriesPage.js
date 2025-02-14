import React from 'react';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import './StoriesPage.css';

function StoriesPage() {
  return (
    <div className="StoriesPage">
      <Navbar />
      <div className="container my-5">
      <header className="mb-5 text-center">
          <h2>STORIES</h2>
        </header>
        {/* Story 1: Foster's Dream Comes True */}
        <section className="story-section my-5">
          <div className="row align-items-center">
            {/* Image on left */}
            <div className="col-md-6 order-md-1">
              <img src="/story1.jpg" alt="Foster's Dream Comes True" className="img-fluid story-img" />
            </div>
            {/* Text on right */}
            <div className="col-md-6 order-md-2">
              <h3>Foster's Dream Comes True</h3>
              <p>
                Foster, age 14, has quite a story to tell! When we returned to Flushununu village, I asked some youth how our lessons have helped them. Foster was eager to share, "Since my parents came to your programs a few months ago, my father has stopped beating my mom and I have never seen him drinking again. He would always come home late and they would argue all night and it always ended up with my mom crying after being beaten up by him. I was always scared with what was happening in our family and I thought there was no hope for us and that we would always be like that. But luckily, I saw that they both came to the lessons here and since that day I knew that something definitely changed. My father now works hard to pay for school fees for us and provide us with all our needs at home. I do not know what they were taught in those lessons, but I assure you, it was life-changing. We now live a happy life that I always dreamt of. I am so thankful to God for sending this team here to deliver the wonderful news. Even myself, I learnt so much about the 'Forgiving Father' lesson and I understand what that story is all about. I am happy to know that God loves us and cares for us all. Thank God for this ministry."
              </p>
            </div>
          </div>
        </section>

        {/* Story 2: Meet Makhumbo */}
        <section className="story-section my-5">
          <div className="row align-items-center">
            {/* Image on right */}
            <div className="col-md-6 order-md-2">
              <img src="/story2.jpg" alt="Meet Makhumbo" className="img-fluid story-img" />
            </div>
            {/* Text on left */}
            <div className="col-md-6 order-md-1">
              <h3>Meet Makhumbo</h3>
              <p>
                Meet Makhumbo, a father of 9. His community is amazed. Mary Hara, mother of 9, was about to leave her husband and her children because Makhumbo drank every day and wasn’t providing for the family. Often there was nothing to eat. Then Good Hope came "to town." Makhumbo decided to attend the lessons and, as he heard the messages, he was convicted in his heart of his wrongdoing. The next day he returned to our teachings, and this time he heard the lesson of the "Forgiving Father." God touched his heart and he silently received Jesus Christ as his personal Lord and Savior. Since that day, he has stopped drinking and is now buying food and clothing for his family. The whole community is amazed at the change in Makhumbo, and Mary gives thanks and praise to God for saving her family.
              </p>
            </div>
          </div>
        </section>

        {/* Story 3: A Witch Doctor is Totally Changed */}
        <section className="story-section my-5">
          <div className="row align-items-center">
            {/* Image on left */}
            <div className="col-md-6 order-md-1">
              <img src="/story3.jpg" alt="A Witch Doctor is Totally Changed" className="img-fluid story-img" />
            </div>
            {/* Text on right */}
            <div className="col-md-6 order-md-2">
              <h3>A Witch Doctor is Totally Changed</h3>
              <p>
                Nya Banda, with tears streaming down her face, tells us, "I was a witch doctor. I only came to your program to get a free lunch. When I arrived, the food was not ready yet, so I attended your teachings while waiting. Your lessons were very powerful, and I came back in the evening to watch the 'JESUS' film. I was quite touched as I saw what was happening to Jesus in the film. So I returned the next day. As I heard your teaching, I was convicted in my heart of my wrongdoing and received Jesus Christ as my personal Savior. My life is totally changed..."
              </p>
            </div>
          </div>
        </section>

        {/* Story 4: God's Word is Spreading Fast! */}
        <section className="story-section my-5">
          <div className="row align-items-center">
            {/* Image on right */}
            <div className="col-md-6 order-md-2">
              <img src="/story4.jpg" alt="God's Word is Spreading Fast" className="img-fluid story-img" />
            </div>
            {/* Text on left */}
            <div className="col-md-6 order-md-1">
              <h3>God's Word is Spreading Fast!</h3>
              <p>
                Rose, who once married a Muslim and suffered years of abuse, left her husband and started her own business. In Dec. 2016, Good Hope came to her village in Mkazimasika. So touched by the lessons, she asked, "How can I get saved?" I taught her and gave her a copy of our 'Great Bible Lessons' book. She says, "After one month of studying, I decided to follow Christ. I was filled with such joy that I wanted to share it with others. I started teaching my friends, but my pastor became angry and chased me out of his church. I called Good Hope, asking, 'What should I do?' They told me, 'This does not affect your relationship with God. If you want to teach others, start a Bible Study Group.'" Since then, Rose has started 7 Bible Study Groups and travels up to 15 km to share the truth about salvation. Others call her, "We heard about your lessons, please come to our village and teach us too." Rose continues, "My aim is to open more groups. If we can open more, the truth will spread faster."
              </p>
            </div>
          </div>
        </section>

      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default StoriesPage;
