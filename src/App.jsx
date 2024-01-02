import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
    <section className='App'>  
        <TwitterFollowCard  isFollowing = {true} userName = "Kvwell">
            Olarte Tomás Kevin Saúl
        </TwitterFollowCard>
        
        <TwitterFollowCard  isFollowing = {true} userName = "NeaVic">
            Victor Manuel Florea Briviesca
        </TwitterFollowCard>

        <TwitterFollowCard  isFollowing = {true} userName = "Luu">
            Martinez Morales Maritza Lucero
        </TwitterFollowCard>


    </section>
    )
}