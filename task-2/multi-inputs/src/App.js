import React, { Component } from 'react'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			inputFields: [
				'first',
				'second'
			]
		}
	}


	addNewInput(event) {
		this.setState({
			inputFields: [...this.state.inputFields, '']
		})
		console.log(this.state)
	}

	render() {
		return (
			<div className="App">
				<main>
					<h1>Test</h1>
					<form className="form">
						{
							this.state.inputFields.map((input, index) => {
								return (
									<div key={index}>
										<label>test attribute</label>
										<input className={`input-${index}`} type="text" name="input" onClick={this.addNewInput.bind(this)} defaultValue={input}/>
									</div>
								)
							})
						}
					</form>
				</main>

				<aside>
					<button>cancel</button>
					<button>save</button>
				</aside>
			</div>
		)
	}
}

export default App
