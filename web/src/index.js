import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const theme = createMuiTheme({
	palette: {
		type: 'dark',
	},
})

const client = new ApolloClient({
	uri: 'https://48p1r2roz4.sse.codesandbox.io',
	cache: new InMemoryCache(),
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<ThemeProvider theme={theme}>
			<CssBaseline>
				<App />
			</CssBaseline>
		</ThemeProvider>
	</ApolloProvider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
