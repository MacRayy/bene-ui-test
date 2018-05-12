import React, { Component } from 'react'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			inputFields: [
				'first',
				'second',
				''
			]
		}
	}


	addNewInput() {
		this.setState({ inputFields: [...this.state.inputFields, ''] })
		console.log(this.state)
	}

	saveInputs() {
		const inputValues = Array.from(document.querySelectorAll('.input')).map((field, index) => {
			return field.value
		})
		this.setState({ inputFields: inputValues })

		console.info(inputValues)
		console.info(this.state)
	}

	render() {
		return (
			<div className="App">
				<h1>Test</h1>
				<main className="input-container">
					{
						this.state.inputFields.map((input, index) => {
							return (
								<div key={index}>
									<label>test attribute</label>
									<input className={`input input-${index}`} type="text" name="input" onClick={this.addNewInput.bind(this)} defaultValue={input}/>
								</div>
							)
						})
					}
				</main>
				<aside>
					<button>cancel</button>
					<button onClick={this.saveInputs.bind(this)}>save</button>
				</aside>
			</div>
		)
	}
}

export default App
