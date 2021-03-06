export const Users = [
  {
    uid: 0,
    firstName: '',
    lastName: '',
    birthDate: '',
    genderCode: '',
    userName: '',
    friendsListIds: [],
    profileImg:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    createdDate: '',
  },
  {
    uid: 1,
    firstName: 'firstName',
    lastName: 'lastName',
    birthDate: '01/24/2019',
    genderCode: 'M',
    userName: 'user2', //Unique
    friendsListIds: [1, 3],
    profileImg:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    createdDate: '1/24/2022',
  },
  {
    uid: 2,
    firstName: 'user3first',
    lastName: 'user3last',
    birthDate: '01/24/2019',
    genderCode: 'M',
    userName: 'user3',
    friendsListIds: [1, 2],
    profileImg:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    createdDate: '1/24/2022',
  },
  {
    uid: 3,
    firstName: 'user4first',
    lastName: 'user42last',
    birthDate: '01/24/2019',
    genderCode: 'F',
    userName: 'user4',
    friendsListIds: [1],
    profileImg:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    createdDate: '1/24/2022',
  },
]

export const Contacts = [
  { userId: 1, contactsListIds: [2, 4], pendingContactsIds: [3] },
  { userId: 2, contactsListIds: [1, 3], pendingContactsIds: [] },
  { userId: 3, contactsListIds: [1, 2], pendingContactsIds: [] },
  { userId: 4, contactsListIds: [1], pendingContactsIds: [] },
]

export const Conversations = [
  {
    userId: 1,
    recipients: 2,
    messages: [
      {
        content: [],
        sentDateTime: '201101011029',
      },
    ],
  },
]

export const chats = [
  {
    chatName: 'chat 1',
    recipients: 2,
    messages: [
      {
        content: [],
        sentDateTime: '201101011029',
      },
    ],
  },
]
