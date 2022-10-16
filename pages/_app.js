import '../styles/globals.css'
import { makeStore } from '../store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={makeStore}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
