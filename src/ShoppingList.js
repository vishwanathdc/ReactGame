import react, Component from 'react';
import logo from './logo.svg';
import './ShoppingList.css';

class ShoppingList extends Component{
	render(){
		return(
				<div>
					<h1>Fruit Shopping List</h1>
					<ul>
						<li>orange</li>
						<li>apple</li>
						<li>muskmelon</li>
					</ul>
					<h1>vegetable Shopping List</h1>
					<ul>
						<li>tomato</li>
						<li>peppers</li>
						<li>onion</li>
					</ul>
				</div>
			);
	}
}