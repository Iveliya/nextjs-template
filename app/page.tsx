/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div>
      <div className="cover">
        <h1 className="title">NIKE STORE</h1>
      </div>

      <div className="columns">
        <div className="column-half">
          <img className="image" src="/nike shoes.webp" alt="image01" />
        </div>
        <div className="column-half">
          <h2 className="section-title">SHOE</h2>
          <p>
          Original Presents Stylish, Comfortable & Trendy sports shoe for all sports. 
          Comfortable inner lining with anti-sweat & perfect grip, Airmix sole having 
          an non-slippery that is make it more lightweight and durable. 
          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column-half">
          <h2 className="section-title">CLOTHES</h2>
          <p>
           Track pants, joggers, sweatpants - whatever you call them,
           make sure they are part of your collection this season. Super-soft,
           fleece-lined tracksuits from Nike and Pink Soda Sport are ideal for
           off-duty, while iconic 3-stripe styles from adidas Originals work anytime.
          </p>
        </div>
        <div className="column-half">
          <img className="image" src="/cloth.webp" alt="image01" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">WHO ARE THE MOST FAMOUS ATHLETES WHO WEAR NIKE?</h2>
        <p>
        Nike is becoming not just an adequate answer to the long-standing German leadership in the sector,
        but their main competitor, which is about to destroy them both in terms of annual sales and reputation.
        For the second proof is the huge list of athletes who become loyal fans of the brand. Many of them are
        long-time Nike faces. The list includes huge names such as Carl Lewis, Andre Agassi, Marion Johns,
        Tiger Woods, , Rafael Nadal, LeBron James, Ronaldo and even Michael Jordan himself.
        </p>
      </div>

      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery">
          <img className="gallery-image" src="/nike5.jpg" alt="image01" />
          <img className="gallery-image" src="/nike6.webp" alt="image01" />
          <img className="gallery-image" src="/nike7.webp" alt="image01" />
          <img className="gallery-image" src="/nike8.jpg" alt="image01" />
          <img className="gallery-image" src="/nike9.jpg" alt="image01" />
          <img className="gallery-image" src="/nike10.jpg" alt="image01" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Celebrities who wear NIKE</h2>
        <div className="card-container">
          <div className="card">
            <img className="avatar" src="/nike11.jpg" alt="avatar" />
            <h3 className="card-name">Kobe Bryant</h3>
            <p>
            This year, Kobe is doing a bit better with his shoes than at his day job:
            the Lakers have won oly 16 against 29 losses, but the Kobe 8s shoes sold
            $50 million last year. That makes the return on Kobe even better than the
            return on Melo, from Nike is perspective. In any event, not a bad performance
            from the aging superstar.
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/nike12.jpg" alt="avatar" />
            <h3 className="card-name">Maria Sharapova</h3>
            <p>
            In addition to Nike and her tour winnings, Sharapova cashes checks from Canon,
            Sony Ericsson, and Tiffany, totaling over $20 million annually. As a young child,
            her father worked odd jobs like dishwashing in order to fund her tennis lessons.
            Hopefully her Nike contract, along with the others, has enabled her to pay him 
            back with interest.
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/nike13.jpg" alt="avatar" />
            <h3 className="card-name">Roger Federer</h3>
            <p>
            Annually, the Swiss star pulls $40 million including his Nike cash.
            With a haul like that, he is on a path to become a rare athlete-billionaire.
            Not a moment too soon, either-with that kind of cash, he can bail out the Swiss banks.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
