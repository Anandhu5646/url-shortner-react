import React, { useEffect, useState } from 'react'
import './UrlShortner.css'
import CopyToClipboard from 'react-copy-to-clipboard'
import axios from 'axios';
const Linkresult = ({inputValue}) => {

    let [shortenLink, setShortenLlink]=useState("Shorten url here")
    let [copyLink, setCopyLink]=useState(false)
    let [loading, setLoading] =useState(false)
    let [error, setError]=useState(false)
    useEffect(()=>{
        let timer=setTimeout(()=>{
            setCopyLink(false)
          
        },1000)
        return ()=> clearTimeout(timer)
    },[copyLink])
    const fetchData=async()=>{
      try {
        setLoading(true)
        const res= await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
        setShortenLlink(res.data.result.full_short_link)

      } catch (error) {
        setError(false)
      }finally{
        setLoading(false)
      }
    }

    useEffect(()=>{
      if(inputValue.length){
        fetchData() 
      }
    },[inputValue])


    if(loading){
      return <p className='noData'>Loading...</p>
    }
    if(error){
      return <p className='noData'>Something went wrong!</p>
    }
  return (
    <>
    {shortenLink && (

    <div>
     <div className='links'>
        <p>{shortenLink}</p> 
        <CopyToClipboard
         text={shortenLink}
         onCopy={()=>setCopyLink(true)}
         >
        <button className={copyLink ? 'copyLink' : ''}>Copy to Clipboard</button>

        </CopyToClipboard>
     </div>
    </div>
    )}
    </>
  )
}

export default Linkresult
