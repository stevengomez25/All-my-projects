import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';


export function App(){
  //Esto También se puede hacer
  const Stevenprompts = {isFollowing: true,userName: 'stevengomez25'}
  //Pero es considerado malas practicas
  return(
    <div className="App">
    <TwitterFollowCard isFollowing={false} userName="midudev">
      MiduDev
    </TwitterFollowCard>
    <TwitterFollowCard isFollowing userName="Apple" >
      Apple
    </TwitterFollowCard>
    <TwitterFollowCard isFollowing={false} userName="Goku" >
      Goku
    </TwitterFollowCard>
    <TwitterFollowCard isFollowing userName="Youtube" >
      Youtube
    </TwitterFollowCard>
    <TwitterFollowCard isFollowing={false} userName="soyDalto">
      SoyDalto
    </TwitterFollowCard>
    <TwitterFollowCard isFollowing userName="Target">
      Target Retailer Store
    </TwitterFollowCard>
    <TwitterFollowCard isFollowing={false} userName="Google" >
      Google
    </TwitterFollowCard>
    <TwitterFollowCard isFollowing userName="Instagram" >
      Instagram
    </TwitterFollowCard>
    <TwitterFollowCard isFollowing={false} userName="Pinterest" >
      Pinterest
    </TwitterFollowCard>
    <TwitterFollowCard {...Stevenprompts}>
      Steven Gómez
    </TwitterFollowCard>
    <TwitterFollowCard >
      Steven Gómez
    </TwitterFollowCard>
    </div>
  )
}