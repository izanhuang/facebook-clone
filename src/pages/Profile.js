import React, { useState, useEffect } from 'react'
import { Wrapper, PagePadding } from '../styles/Wrapper'
import { useLocation } from 'react-router-dom'
import { getUserProfile, getUserPosts } from '../utils/firebaseUtils'
import { Avatar } from '../styles/Avatar'
import { useAuth } from '../contexts/AuthContext'
import Post from '../components/Post'
import { PostsContainer } from '../styles/PostStyling'

const Profile = () => {
  const { state } = useLocation()
  const { uid } = state
  const [profileDetails, setProfileDetails] = useState(false)
  const [timeline, setTimeline] = useState(false)
  const { currentUser } = useAuth()
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  useEffect(async () => {
    const userProfile = await getUserProfile(uid)
    setProfileDetails(userProfile)

    if (userProfile !== false) {
      setTimeline(await getUserPosts(uid))
    }
  }, [])

  return (
    <Wrapper>
      <PagePadding>Profile</PagePadding>
      {profileDetails ? (
        <div>
          <div>
            <Avatar src={profileDetails.profileImg} />
            <p>{profileDetails.firstName + ' ' + profileDetails.lastName}</p>
          </div>
          {currentUser.uid !== uid && <button>Add Friend</button>}
          <div>
            <div>
              <div>About</div>
              <p>Gender {profileDetails.genderCode}</p>
              <p>Born {profileDetails.birthDate}</p>
              <p>
                Joined{' '}
                {
                  monthNames[
                    new Date(profileDetails.createdDate?.toDate()).getMonth()
                  ]
                }
                {' ' +
                  new Date(profileDetails.createdDate?.toDate()).getFullYear()}
              </p>
            </div>
            {timeline && (
              <div>
                <div>Posts</div>
                <PostsContainer>
                  {timeline &&
                    timeline.docs.map((post) => (
                      <Post
                        key={post.id}
                        name={post.data().name}
                        text={post.data().text}
                        email={post.data().email}
                        timestamp={post.data().timestamp}
                        image={post.data().image}
                        userName={post.data().userName}
                        profileImg={post.data().profileImg}
                        uid={post.data().uid}
                        docId={post.id}
                        likes={post.data().likes}
                        comments={post.data().comments}
                        shares={post.data().shares}
                        sharedFrom={post.data().sharedFrom}
                      />
                    ))}
                </PostsContainer>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>Profile not avaliable</p>
      )}
    </Wrapper>
  )
}

export default Profile
