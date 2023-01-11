import { MonsterType } from '../../App';
import Card from '../card/card.component';
import './card-list.styles.css';

type CarListProps = {
    monsters: MonsterType[]
}

const CardList = ({monsters}: CarListProps) => {
    
    return(
        <div className='card-list'>
        {monsters.map((monster) =>{
            return (
            <div key={monster.id}> 
            <Card monster={monster}/> 
            </div>
          )}    
        )}
        </div>
    )}
    

export default CardList;