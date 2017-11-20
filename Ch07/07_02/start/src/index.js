import React from 'react'
import { render } from 'react-dom'
import MemberList from './components/ui/MemberList'
// import routes from './routes'
import Member from './components/ui/Member'

window.React = React

render(
	<MemberList />,
	document.getElementById('react-container'))
