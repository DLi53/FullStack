import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
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
            if (user && follow.followerId === state.session.user.id && follow.followeeId === user.id) {

                arr.push(follow.id)
            }
        })

        
        return arr[0]
    })



    // console.log(currentuserfollowings.includes(user.id), user.id);
    const [isFollowing, setIsFollowing] = useState(currentuserfollowings.includes(user && user.id))
    // console.log(isFollowing);
    const [refetch, setRefetch] = useState(true)

    useEffect(()=> {
        console.log('fetching');
        dispatch(fetchFollows())
       

    },[refetch])

    const [redirect, setRedirect] = useState(false)
 


    const createfollow = () =>{
        dispatch(createFollow({follower_id: currentUserId, followee_id: user.id}))
        setRefetch(!refetch)
    }

    const deletefollow = () => {
        dispatch(deleteFollow(followId)) 
        setRefetch(!refetch)
    }


    const handleFollow = () => {
        // e.preventDefault();
        setIsFollowing(!isFollowing)


        isFollowing ? deletefollow() : createfollow()

    }

    




    
    // onClick={(e) => handleFollow}
    return ( 
        <button 
            onClick={handleFollow}
            className={isFollowing ? "followButton " :'followButton notfollowing' }>{isFollowing ? 'Following' : 'Follow'}</button>
     );

     

}
 
export default FollowButton;