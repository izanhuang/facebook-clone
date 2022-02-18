import React, { useState, useEffect } from 'react'
import { Wrapper, PagePadding, CenterElement } from '../styles/Wrapper'
import { useParams } from 'react-router-dom'
import { getUserProfile } from '../utils/firebaseUtils'
import { Avatar, AvatarOutline } from '../styles/Avatar'
import { useAuth } from '../contexts/AuthContext'
import Post from '../components/Post'
import { PostCard, PostsContainer } from '../styles/PostStyling'
import { Divider } from '../styles/LineBreak'
import { useCollection } from 'react-firebase-hooks/firestore'
import { query, collection, where, orderBy } from 'firebase/firestore'
import db from '../utils/firebase'
import NotFound from './NotFound'
import {
  ProfileHeader,
  ProfileNavContainer,
  ProfileNav,
  ProfileContentContainer,
  LeftContainer,
  RightContainer,
} from '../styles/ProfileStyling'

const Profile = () => {
  const { userName } = useParams()
  const [profileFound, setProfileFound] = useState(true)
  const [profileDetails, setProfileDetails] = useState(false)
  const [uid, setUid] = useState('')
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

  useEffect(() => {
    async function fetchData() {
      const userProfile = await getUserProfile(userName)
      setProfileDetails(userProfile)
      if (userProfile) {
        setUid(userProfile.uid)
      } else {
        setProfileFound(false)
      }
    }
    fetchData()
  }, [])

  const postsRef = collection(db, 'posts')
  const q = query(
    postsRef,
    where('uid', '==', uid),
    orderBy('timestamp', 'desc'),
  )
  const [timeline, loading, error] = useCollection(q, {
    snapshotListenOptions: { includeMetadataChanges: true },
  })

  return (
    <>
      {profileFound ? (
        <Wrapper>
          <PagePadding />
          {profileDetails && (
            <>
              <CenterElement profileHeader>
                <ProfileHeader>
                  <AvatarOutline>
                    <Avatar large src={profileDetails.profileImg} />
                  </AvatarOutline>
                  <h1>
                    {profileDetails.firstName + ' ' + profileDetails.lastName}
                  </h1>
                  <Divider profileDivider />
                  <ProfileNavContainer>
                    <ProfileNav>
                      {currentUser.uid !== uid && (
                        <button className="actionButton">
                          <img
                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/JonZjQBHWuh.png"
                            // https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/5nzjDogBZbf.png
                            alt="add friend icon"
                          />
                          <span>Add Friend</span>
                        </button>
                      )}
                      {currentUser.uid !== uid && (
                        <button className="secondaryButton">
                          <img
                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/111xWLHJ_6m.png"
                            alt="message icon"
                          />
                          <span>Message</span>
                        </button>
                      )}
                      {currentUser.uid === uid && (
                        <button className="secondaryButton">
                          <img
                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/OR6SzrfoMFg.png"
                            alt="edit profile icon"
                          />
                          <span>Edit Profile</span>
                        </button>
                      )}
                    </ProfileNav>
                  </ProfileNavContainer>
                </ProfileHeader>
              </CenterElement>
              <ProfileContentContainer>
                <LeftContainer>
                  <PostCard>
                    <div>About</div>
                    <p>Gender {profileDetails.genderCode}</p>
                    <p>Born {profileDetails.birthDate}</p>
                    <p>
                      Joined{' '}
                      {
                        monthNames[
                          new Date(
                            profileDetails.createdDate?.toDate(),
                          ).getMonth()
                        ]
                      }
                      {' ' +
                        new Date(
                          profileDetails.createdDate?.toDate(),
                        ).getFullYear()}
                    </p>
                  </PostCard>
                </LeftContainer>
                {timeline && (
                  <RightContainer>
                    <PostCard>Posts</PostCard>
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
                  </RightContainer>
                )}
              </ProfileContentContainer>
            </>
          )}
        </Wrapper>
      ) : (
        <NotFound />
      )}
    </>
  )
}

export default Profile
