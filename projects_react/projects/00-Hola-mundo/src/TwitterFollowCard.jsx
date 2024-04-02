import { useState } from 'react';

export function TwitterFollowCard({userName = 'unknown',children}){
  const ImgSrc=`https://unavatar.io/${userName}`
    /*Poddemos hacer esto:
  const state = useState(false);
  const isFollowing = state[0];
  const setIsFollowing = state[1];
  */
 const [isFollowing, setIsFollowing] = useState(false);
 //Pero es más entendible esto ^^, que es básicamente lo mismo
  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following':'tw-followCard-button';
  
  const HandleClick= () => {
    setIsFollowing(!isFollowing);
  }

    return(
        <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={ImgSrc} alt="avatar_goku" />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>


      <aside>
        <button className={buttonClassName} onClick={HandleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
    )
}