import ali from './images/avatar-ali.png'
import anisha from './images/avatar-anisha.png'
import richard from './images/avatar-richard.png'
import shanai from './images/avatar-shanai.png'
import {useState} from 'react'

const Pagination=()=>{
    const [small,setSmall]=useState(false)
    const [index, setIndex]=useState(0)
    let list=[]
    
    const data=[
        {
        image:anisha,
        name:'Anisha Li',
        post:`“Manage has supercharged our team’s workflow. The ability to maintain 
        visibility on larger milestones at all times keeps everyone motivated.”`
    },
    {
        image:ali,
        name:'Ali Bravo',
        post:`“We have been able to cancel so many other subscriptions since using 
        Manage. There is no more cross-channel confusion and everyone is much 
        more focused.”`
    },
    {
        image:richard,
        name:'Richard Watts',
        post:`“Manage allows us to provide structure and process. It keeps us organized 
        and focused. I can’t stop recommending them to everyone I talk to!”`
    },
    {
        image:shanai,
        name:'Shanai Gough',
        post:` “Their software allows us to track, manage and collaborate on our projects 
        from anywhere. It keeps the whole team in-sync without being intrusive.”`
    }
]
    return (
        <div className='grid-five'>
             <div>What they’ve said</div>
             <div className='wrap'>
                {
                    (()=>{
                        new ResizeObserver((lis)=>{
                            if(lis[0].contentRect.width>700){
                                console.log('yes')
                                setSmall(true)
                            }else{
                                setSmall(false)
                            }
                           
                        }).observe(document.querySelector('body'))
                        if(small){
                            return (
                                <>
                                    {data.map((dat)=>{
                                        return (
                                        <div className='card' key={dat.name}>
                                            <img src={dat.image} alt=''/>
                                            <div  className='name'>{dat.name}</div>
                                            <div className='post'>{dat.post}</div>
                                        </div>
                                    )
                                   })}
                                </>
                            )
                        }else{
                            return (
                                <>
                                    <div className='card-box'>
                                        <div className='card'>
                                            <img src={data[index].image} alt=''/>
                                            <div className='name'>{data[index].name}</div>
                                            <div className='post'>{data[index].post}</div>
                                        </div>
                                        <div className='label'>
                                            {(()=>{
                                                for(let i=0;i<data.length;i++){
                                                     list.push(i)
                                                     
                                                }
                                                return list.map((num)=>{
                                                    return (
                                                        <label for={`l${num}`} onClick={()=>setIndex(num)}>
                                                             {num==0?<input  name='c' type='radio' value={num} id={`l${num}`}/>:<input name='c' type='radio' value={num} id={`l${num}`}/>}
                                                             <div></div>
                                                        </label>
                                                        )
                                                })
                                            })()}
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    })()
                }
                {/* {data.map((dat)=>{
                    return (
                        <div key={dat.name}>
                            <img src={dat.image} alt=''/>
                            <div>{dat.name}</div>
                            <div>{dat.post}</div>
                        </div>
                    )
                })} */}
             </div>
             <div className='button'>Get Started</div>
        </div>
    )
}
export default Pagination