import React from 'react'
import { Icons, toast } from 'react-toastify';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';

function Card({course,likedCourses, setLikedCourses}) {

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            //pehle se like hua pada tha

            setLikedCourses((prev) => prev.filter((cid)=> cid !== course.id));
            toast.warning("Like removed");
        }
        else{
            //pehle se like nahi hua 
            if(likedCourses.length===0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev)=> [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className='w-[300px] bg-slate-900 bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative '>
                <img src={course.image.url}></img>

                <div className='w-[40px] h-[40px] grid place-items-center bg-white rounded-full absolute right-2 bottom-[-15px]'>
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? 
                            (<FcLike fontSize="1.75rem"/>):
                            (<FcLikePlaceholder fontSize="1.75rem"/>)
                        }
                    </button>
                </div>
            </div>

            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        course.description.length > 100 ?
                        (course.description.substr(0,100))+ "...":
                        (course.description)

                    }
                    </p>
            </div>
        </div>
    )
}

export default Card