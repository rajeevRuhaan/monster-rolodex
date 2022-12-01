import {Component} from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';


class CardList extends Component {
    render() {
        console.log(this.props.monsters)
        console.log("render")
        const {monsters} = this.props;

        return(
            <div className='card-list'>
                {monsters.map((monster) => {
                    // destructure where ever variable is repeating
                   
                 return (
                    <Card monster={monster}/>
                    )
                })}
            </div>
        )
    }
}
export default CardList