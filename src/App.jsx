/* https://mhnpd.github.io/react-loader-spinner/docs/intro/ */
/* npm install react-loader-spinner --save */
import { Audio, Radio, Bars, CirclesWithBar, ColorRing, Comment, ProgressBar, ThreeDots, Vortex, RotatingLines } from 'react-loader-spinner'
function App() {
    return (
        <div className="flex flex-wrap justify-center items-center">
            <div className='border border-green-500 p-10 w-64 flex flex-col justify-center items-center m-4  rounded-3xl'>
                <h1 className='text-2xl text-center' >Audio</h1>
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color='green'
                    ariaLabel='three-dots-loading'
                    wrapperStyle
                    wrapperClassName
                />
            </div>
            <div className='border border-green-500 p-10 w-64 flex flex-col justify-center items-center m-4  rounded-3xl'>
                <h1 className='text-2xl text-center' >Radio</h1>
                <Radio
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="radio-loading"
                    wrapperStyle={{}}
                    wrapperClass="radio-wrapper"
                />
            </div>
            <div className='border border-green-500 p-10 w-64 flex flex-col justify-center items-center m-4  rounded-3xl'>
                <h1 className='text-2xl text-center' >Bars</h1>
                <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
            <div className='border border-green-500 p-10 w-64 flex flex-col justify-center items-center m-4  rounded-3xl'>
                <h1 className='text-2xl text-center' >Circles With Bar</h1>
                <CirclesWithBar
                    height="100"
                    width="100"
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    outerCircleColor=""
                    innerCircleColor=""
                    barColor=""
                    ariaLabel='circles-with-bar-loading'
                />
            </div>
            <div className='border border-green-500 p-10 w-64 flex flex-col justify-center items-center m-4  rounded-3xl'>
                <h1 className='text-2xl text-center' >Color Ring</h1>
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            </div>
            <div className='border border-green-500 p-10 w-64 flex flex-col justify-center items-center m-4  rounded-3xl'>
                <h1 className='text-2xl text-center' >Comment</h1>
                <Comment
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="comment-loading"
                    wrapperStyle={{}}
                    wrapperClass="comment-wrapper"
                    color="#fff"
                    backgroundColor="#F4442E"
                />
            </div>
            <div className='border border-green-500 p-10 w-64 flex flex-col justify-center items-center m-4  rounded-3xl'>
                <h1 className='text-2xl text-center' >Progress Bar</h1>
                <ProgressBar
                    height="80"
                    width="80"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass="progress-bar-wrapper"
                    borderColor='#F4442E'
                    barColor='#51E5FF'
                />
            </div>
            <div className='border border-green-500 p-10 w-64 flex flex-col justify-center items-center m-4  rounded-3xl'>
                <h1 className='text-2xl text-center' >Three Dots</h1>
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#4fa94d"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
            <div className='border border-green-500 p-10 w-64 flex flex-col justify-center items-center m-4  rounded-3xl'>
                <h1 className='text-2xl text-center' >Vortex</h1>
                <Vortex
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />
            </div>
            <div className='border border-green-500 p-10 w-64 flex flex-col justify-center items-center m-4  rounded-3xl'>
                <h1 className='text-2xl text-center' >Rotating Lines</h1>
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />
            </div>
        </div>
    )
}

export default App
