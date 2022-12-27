import  ilustration from './images/illustration-intro.svg'
import Pagination from './Pagination'
import facebook from './images/icon-facebook.svg'
import twitter from './images/icon-twitter.svg'
import youtube from './images/icon-youtube.svg'
import pinterest from './images/icon-pinterest.svg'
import instagram from './images/icon-instagram.svg'
import logo from'./images/logo.svg'

const Grid=()=>{
    return (
        <div className='grid'>
            <div className='grid-one'>
               <img src={ilustration} alt=""/>
            </div>

            <div className='grid-two'>
               <p>Bring everyone together to build better products.</p>
               <p>
                    Manage makes it simple for software teams to plan day-to-day 
                    tasks while keeping the larger team goals in view.
               </p>
               <p className='button'>Get Started</p>
            </div>

            <div className='grid-three'>
                <p>What’s different about Manage?</p>
                <p>
                    Manage provides all the functionality your team needs, without 
                    the complexity. Our software is tailor-made for modern digital 
                    product teams. 
                </p>
            </div>

            <div className='grid-four'>
                <div className='text-area'>
                    <div className='oneline'>
                        <p>01</p>
                        <p>Track company-wide progress</p>
                    </div>
                    <p>
                        See how your day-to-day tasks fit into the wider vision. Go from 
                        tracking progress at the milestone level all the way done to the 
                        smallest of details. Never lose sight of the bigger picture again.
                    </p>
                </div>
                <div className='text-area'>
                    <div className='oneline'>
                        <p>02</p>
                        <p> Advanced built-in reports</p>
                    </div>
                    <p>
                        Set internal delivery estimates and track progress toward company 
                        goals. Our customisable dashboard helps you build out the reports 
                        you need to keep key stakeholders informed.
                    </p>
                </div>
                <div className='text-area'>
                    <div className='oneline'>
                        <p>03</p>
                        <p>Everything you need in one place</p>
                    </div>
                    <p>
                        Stop jumping from one service to another to communicate, store files, 
                        track tasks and share documents. Manage offers an all-in-one team 
                        productivity solution.
                    </p>
                </div>
            </div>

            <Pagination/>

            <div className='grid-six'>
                <p> Simplify how your team works today.</p>
                <p className='button get'>Get Started</p>
            </div>

            <footer className='grid-seven'>
                <div className='gri1'>
                    <div className='go-box'>
                        <p>Updates in your inbox…</p>
                        <p>Go</p>
                    </div>
                </div>
                <div className='gri2'>
                    <div>
                        <p>Home</p>
                        <p>Pricing</p>
                        <p>Products</p>
                        <p>About Us</p>
                    </div>
                    <div className=''>
                        <p>Careers</p>
                        <p>Commuinity</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div className='gri3'>
                    <div>
                        <img src={facebook} alt=""/>
                        <img src={youtube} alt=""/>
                        <img src={twitter} alt=""/>
                        <img src={pinterest} alt=""/>
                        <img src={instagram} alt=""/>
                    </div>
                    <div><img className='img' src={logo} alt=""/></div>
                </div>
                <div className='gri4'>Copyright 2020. All Rights Reserved</div>
            </footer>
        </div>
    )
}
export default Grid