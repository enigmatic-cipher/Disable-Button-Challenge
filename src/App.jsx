import { useState } from 'react'
import './App.css'

export default function App() {

	const [value, setValue] = useState("")
	return (
		<>
			<h1>Disable Button Challange</h1>
			<input
				type="text"
				placeholder="Enter Text"
				onChange={(e) => setValue(e.target.value)}
			/>
			<button disabled={value.length < 1}>Submit</button>
		</>

	)
}
