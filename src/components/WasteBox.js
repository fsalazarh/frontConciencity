import React, {Component } from 'react';
import BarChart from './BarChart';
import {Tabs, Tab} from 'react-materialize';

class WasteBox extends Component{
	render(){
		var data= this.props.data;
		const listItems = data.map((element,i) => {
			return(							
				<Tab title={element.day} active={i==0} >

				    	<div className="card">
				    		<table>
						        <thead>
						          <tr>
						              <th> </th>
						              <th> </th>
						          </tr>
						        </thead>

						        <tbody>
						          <tr>
						            <td>Fecha y hora:</td>
						            <td>  {element.hours} {element.day} </td>
						          </tr>
						          <tr>
						            <td>Cantidad de residuos:</td>
						            <td> {element.weight} kilos </td>
						          </tr>
						          <tr>
						            <td>Nombre Reciclado: r</td>
						            <td>{element.recyclerName} </td>
						          </tr>
						           <tr>
						            <td>Aporte ambiental estimado: </td>
						            <td>15 e kg </td>
						          </tr>
						        </tbody>
						      </table>
				    	</div>

				    </Tab>


				)		
		})


		for(var i=0;i<data.lenght;i++){
			console.log(data[i]);

			};


		return(

			
				
							
				<Tabs className='teal green z-depth-1'>
				    {listItems}
				</Tabs>
	)
		
	}
}


export default WasteBox;