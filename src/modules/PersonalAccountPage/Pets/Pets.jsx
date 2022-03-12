import Slider from "react-slick";
import FirstPet from "./currentPets/FirstPet";
import SecondPet from "./currentPets/SecondPet";
import './Pets.css'
import PetsCard from "./PetsCard";

export default function Pets() {

    return(
<div className="pet_section">  
    <div> <h2>Мои питомцы</h2></div>
    <div> 
        <button className="pets_button"><img src={'/img/pets.svg'} alt="" /> <p>ДОБАВИТЬ НОВОГО ПИТОМЦА</p></button>
    </div> 
    <FirstPet/>
    <SecondPet/>


    
</div>
    
    )
}