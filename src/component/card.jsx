import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
 
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        if (likedCourses.includes(props.course.id)) {
            setLikedCourses((prev) => prev.filter((cid) => cid !== props.course.id));
            toast.warning("Liked Removed");
        }
        else {
            if (likedCourses.length === 0) {
                setLikedCourses([props.course.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, props.course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className='card'>
            <div className='relative '>
                <img src={props.course.image.url} alt="Course Image" className='' />

                <div className='toast-handler'>
                    <button onClick={clickHandler}>
                        {
                            !likedCourses.includes(props.course.id) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
                        }
                    </button>
                </div>
            </div>



            <div className='card-info'>
                <p >{props.course.title}</p>
                <p >
                    {
                        props.course.description.length > 100 ? (props.course.description.substring(0, 100) + "....") : (props.course.description)
                    }

                </p>
            </div>

        </div>
    )
};

export default Card;
