import './resume.css'

function Resume(){
    return(
    <div id="resumeContainer">
        <ul className='technicalResume'>
            <li>
                <h1>Technical Resume</h1>
                {/* <iframe 
                    src="/file/Margarita-Ramirez-Resume.pdf"
                    title="Resume"
                    width="100%"
                    height="800px"
                    className='resumeImg'
                    style={{ border: 'none' }}
                ></iframe> */}
                <img src="/file/Resume-MargaritaRamirez-1.png" alt="Resume" className='resumeImg' />
            </li>
            <li>
                <h1> Non Technical Resume</h1>
                <img src="/file/MargaritaResume-1.png" alt="Resume" className='resumeImg' />
            </li>
            
        </ul>
    </div>
    )
}

export default Resume;