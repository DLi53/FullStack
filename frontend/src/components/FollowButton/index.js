import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createFollow, deleteFollow, fetchFollow, fetchFollows } from '../../store/follows'
import './followbutton.css'

const FollowButton = ({user}) => {

    const dispatch = useDispatch()
    const currentUserId = useSelector(state => state.session.user.id)
    const currentuserfollowings = useSelector(state => {
        let arr = []
        Object.values(state.following).forEach(follow => {
            // console.log(follow)
            if (follow.followerId === state.session.user.id) {
                arr.push(follow.followeeId)
            }
        })

        return arr
    })

    const followId = useSelector(state => {
        let arr = []
        Object.values(state.following).forEach(follow => {
            if (follow.followerId === state.session.user.id && follow.followeeId === user.id) {

                arr.push(follow.id)
            }
        })

        
        return arr[0]
    })

    // console.log(currentuserfollowings.includes(user.id), user.id);
    const [isFollowing, setIsFollowing] = useState(currentuserfollowings.includes(user.id))
    // console.log(isFollowing);



    const handleFollow = () => {
        // e.preventDefault();
        setIsFollowing(!isFollowing)


        isFollowing ? dispatch(deleteFollow(followId)) : dispatch(createFollow({follower_id: currentUserId, followee_id: user.id}))


    }

    // onClick={(e) => handleFollow}
    return ( 
        <button 
            onClick={handleFollow}
            className={isFollowing ? "followButton " :'followButton notfollowing' }>{isFollowing ? 'Following' : 'Follow'}</button>
     );
}
 
export default FollowButton;