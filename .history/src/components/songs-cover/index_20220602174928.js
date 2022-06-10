import React, { memo } from 'react'

const Y = memo(() => {
  return (
    <div className="item" key = {item}>
                                <a className="recommend-link" href={playlistId(item.id)}>
                                    <img className='link-cover' src={item.picUrl} alt={item.name}></img>
                                </a>
                                <div></div>
                                <p>
                                    <a href='todo'>{item.name}</a>
                                </p>
                            </div>
  )
})

export default Y