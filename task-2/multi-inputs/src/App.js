import React, { Component } from 'react'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inputFields: [
				'first',
				'second',
				''
			]
		}
	}


	addNewInput() {
		this.setState({ inputFields: [ ...this.state.inputFields, '' ] })
	}

	onBlurUpdate() {
		this.saveInputs()
		this.forceUpdate()
	}

	onDelete(event) {
		const inputFields = this.state.inputFields

		const updatedInputs = inputFields.filter( field => {
			if (field !== event.target.classList[2]) {
				return field
			}
		})

		this.setState({ inputFields: updatedInputs })
	}

	saveInputs() {
		const inputValues = Array.from( document.querySelectorAll('.input') ).map( field => field.value )
		this.setState({ inputFields: inputValues })

		console.info(inputValues)
		console.info(this.state)
	}

	render() {
		return (
			<div className="App">
				<div className="input-container">
					<h1 className="h1">Test</h1>
					<main className="form">
						{
							this.state.inputFields.map((input, index) => {
								return (
									<div className="input-wrapper" key={index}>
										<input
											id={ `input-${index}` }
											className="input"
											name="input"
											type="text"
											defaultValue={input}
											onClick={ this.addNewInput.bind(this) }
											onBlur={this.onBlurUpdate.bind(this)}
										/>
										<label htmlFor={ `input-${index}` } className="input-label">test attribute</label>
										<button className={ `btn btn--delete ${input}`} onClick={ this.onDelete.bind(this) }></button>
									</div>
								)
							})
						}
					</main>
					<aside className="sidebar">
						<button className="btn">cancel</button>
						<button className="btn btn--blue" onClick={ this.saveInputs.bind(this) }>save</button>
					</aside>
				</div>
			</div>
		)
	}
}

export default App
