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


	addNewInput() {
		console.log('alma')
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
										<input type="text" name="first" onClick={this.addNewInput} defaultValue={input}/>
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
