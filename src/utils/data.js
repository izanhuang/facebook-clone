export const Users = [
  {
    uid: 1,
    firstName: 'Izan',
    lastName: 'Huang',
    birthDate: '12/02/1999',
    genderCode: 'F',
    userName: 'izancanfly',
    friendsListIds: [2, 4],
    profileImg: '',
    createdDate: '1/24/2022',
  },
  {
    uid: 2, //Auto generated
    firstName: 'user2first',
    lastName: 'user2last',
    birthDate: '01/24/1999', //Must be 18+
    genderCode: 'M',
    userName: 'user2', //Unique
    friendsListIds: [1, 3],
    profileImg: '',
    createdDate: '1/24/2022',
  },
  {
    uid: 3,
    firstName: 'user3first',
    lastName: 'user3last',
    birthDate: '01/24/1999',
    genderCode: 'M',
    userName: 'user3',
    friendsListIds: [1, 2],
    profileImg: '',
    createdDate: '1/24/2022',
  },
  {
    uid: 4,
    firstName: 'user4first',
    lastName: 'user42last',
    birthDate: '01/24/1999',
    genderCode: 'F',
    userName: 'user4',
    friendsListIds: [1],
    profileImg: '',
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
