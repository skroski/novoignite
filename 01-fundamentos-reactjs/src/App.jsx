import { Post } from "./Post"
import "./index.css"
import { Header } from "./components/Header"

export function App() {

  return (
    <>
    
    <Header/>
    <h1>Ignite Novo</h1>
    <Post 
      author="Daniel"
      content="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero inventore esse neque harum beatae excepturi autem natus obcaecati praesentium totam, odio in illum velit soluta! Optio numquam reprehenderit in soluta." />
    <Post />
    <Post />
    <Post />
    </>
  )
}
