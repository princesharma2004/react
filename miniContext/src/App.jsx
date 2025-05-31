import UserContextProvider from "./context/UserContextProvider"
import { Login, Profile } from "./components"

export default function App()
{
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}
