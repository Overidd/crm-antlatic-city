import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from '@/presentation/store'
import { RouterApp } from './router/RouterApp'

const queryClient = new QueryClient()
function App() {

   return (
      <Provider store={store}>
         <QueryClientProvider client={queryClient}>
            <RouterApp />
         </QueryClientProvider>
      </Provider>
   )
}

export default App
