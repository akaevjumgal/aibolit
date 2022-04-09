import './PetsCard.css';

export default function PetsCard({ title, date, img }) {
  return (
    <div className="pets_card_container">
      <img src={img || null} alt="fsdf" />
      <div className="pets_card_title">
        <p>{title}</p>
        <p className="Pets_Card_container_p">{date}</p>
      </div>
    </div>
  );
}
