import { AxiosResponse } from 'axios'
import { QueryList } from './http'

export type UserRole = 'customer' | 'car_driver' | 'admin'
export type AttachmentType = 'image' | 'video' | 'voice'
export type MessageResponseStatus = 'pending' | 'rejected' | 'fulfilled'
export type changeUserStatusParams = Pick<IUser, 'is_online'> & { user_id: string }
export type GetTokenParams = Pick<IUser, 'user_id' | 'phone'>

export interface LoginChatFormParams {
  phone: string
  password: string
}

export type UpdateProfile = Partial<
  Pick<IUser, 'user_name' | 'date_of_birth' | 'gender' | 'bio'> & {
    avatar: string
  }
>

export type CreateUserParams = Pick<
  IUser,
  'user_name' | 'date_of_birth' | 'gender' | 'role' | 'bio' | 'phone' | 'user_id'
> & {
  user_id: number
  avatar: string
}

export interface TokenRes {
  access_token: string
  refresh_token: string
}

export type ChatAxiosResponse<T> = AxiosResponse & {
  message: string
  success: boolean
  status_code: number
  data: T
}

export interface IAttachment {
  _id: string
  url: string
  thumbnail_url: string
  desc: string
  attachment_type: AttachmentType
  created_at: Date
  updated_at: Date
}

export type AttachmentRes = Pick<IAttachment, 'thumbnail_url' | 'url' | 'attachment_type'> & {
  attachment_id: string
}

export interface IUser {
  _id: string
  user_name: string
  role: UserRole
  avatar_id?: string
  password: string
  bio?: string
  phone: string
  user_id: number
  date_of_birth?: string
  blocked_user_ids: number[]
  gender?: 'male' | 'female' | 'no_info'
  room_joined_ids: string[]
  messages_unread: {
    room_id: string
    message_ids: string[]
  }[]
  message_unread_count: number
  created_at: Date
  updated_at: Date
  is_online: boolean
  offline_at: Date
  room_blocked_noti_ids: string[]
}

export interface IMessage {
  _id: string
  user_id: string
  room_id: string
  text: string
  tag_ids: string[]
  attachment_ids: IAttachment[]
  reply_to: {
    message_id: string
    attachment_id?: string
  }
  read_by_user_ids: string[]
  is_hidden: boolean
  is_deleted: boolean
  is_edited: boolean
  liked_by_user_ids: {
    user_id: string
    emotion: MessageReactionType
  }[]
  created_at: Date | string
  updated_at: Date | string
}

export interface MessageUnreadCountRes {
  message_unread_count: number
  room_ids: string[]
}

export type MessageRes = Pick<IMessage, 'room_id' | 'created_at'> & {
  message_id: string
  is_author: boolean
  author: AuthorMessage
  attachments: AttachmentRes[]
  reaction_count: number
  reactions: MessageReactionType[]
  your_reaction: null | MessageReactionType
  message_text: string | null
  reply_to?: MessageReply | null
  is_read: boolean
  status?: MessageResponseStatus
}

export type UserRes = Pick<
  IUser,
  | 'bio'
  | 'created_at'
  | 'date_of_birth'
  | 'gender'
  | 'is_online'
  | 'offline_at'
  | 'role'
  | 'phone'
  | 'user_name'
  | 'updated_at'
> & {
  socket_id: string
  user_id: string
  avatar: string | null
  room_id?: string
  is_yourself?: boolean
}

export type UserReactionRes = Omit<UserRes, 'avatar'> & {
  reaction: MessageReactionType
  avatar: string
}

export type UsersLikedMessageRes = {
  [key: string]: UserReactionRes[]
}

export interface AuthorMessage {
  author_id: string
  author_name: string
  author_avatar: string
}

export interface MessageUser {
  user_id: string
  user_name: string
  user_avatar: string
}

export type MessageReply = {
  author: AuthorMessage
  message_id: string
  attachment?: {
    id: string
    url: string
  }
  message_text: string
  created_at: Date | string
}

export type MessageReactionType = 'like' | 'angry' | 'sad' | 'laugh' | 'heart' | 'wow'

export type SendMessage = {
  tag_ids?: string[] | null
  attachment_ids: string[]
  reply_to?: {
    message_id: string
    attachment_id?: string
  }
  text?: string
  room_id: string
}

export type SendMessageData = MessageFormData & {
  reply_to?: MessageReply
}

export type SendMessageForm = Partial<Pick<SendMessage, 'tag_ids' | 'attachment_ids' | 'text'>>

export interface SendMessageServiceParams {
  room_id: string
  user: IUser
  message: SendMessage
}

export interface GetMessagesInRoom extends QueryList {
  room_id: string
}

export interface LikeMessage {
  message_id: string
  emotion: MessageReactionType
}

export interface LikeMessageRes extends LikeMessage {
  user_id: string
  room_id: string
}

export interface UnlikeMessageRes extends UnlikeMessage {
  room_id: string
  user_id: string
}

export interface UnlikeMessage {
  message_id: string
  reaction: MessageReactionType
}

export interface mutateMessageReaction {
  messageId: string
  reaction: MessageReactionType
  is_author: boolean
  type: 'add' | 'delete'
}

export type MessageAttachment = {
  file: any
  previewImage: string
  id: string
}

export interface MessageForm {
  attachments?: MessageAttachment[] | AttachmentRes[]
  text?: string | undefined
}

export type MessageFormData = MessageForm & {
  room_id: string
  reply_to?: MessageReply
}

export type UserItemRes = {
  user_id: string
  is_online: string
  user_name: string
  user_avatar: string
}

export type MessageDetailRes = MessageRes & {
  read_by: UserItemRes[]
  un_read_by: UserItemRes[]
}

export interface IRoom {
  _id: string
  room_name: string
  room_avatar: string
  room_type: RoomType
  member_ids: RoomMember[]
  leader_id: string
  last_message_id?: string
  pinned_message_ids: string[]
  members_leaved: MemberLeaved
  message_ids: string[]
  is_expired: boolean
  created_at: Date
  deleted_at: Date
  updated_at: Date
}

export interface RoomRes {
  room_id: string
  room_name: string | null
  room_avatar?: string | null
  room_type: RoomType
  is_online: boolean
  member_count: number
  message_unread_count: number
  last_message?: LastMessage | null
  top_members?: {
    user_avatar: string
    user_name: string
    user_id: string
    is_online: boolean
  }[]
}

export interface ListRes<T> {
  has_more: boolean
  limit: number
  offset: number
  total: number
  data: T
}

export type RoomDetailRes = Omit<
  RoomRes,
  'message_unread_count' | 'last_message' | 'room_avatar'
> & {
  room_avatar: string | null
  offline_at: Date | null
  // messages_pinned: ListRes<MessageRes[]>
  messages: ListRes<MessageRes[]>
  members: ListRes<RoomMemberRes[]>
  // leader_user_info: RoomMemberRes | null
}

export type RoomType = 'group' | 'single' | 'admin'

export interface RoomMember {
  user_id: string
  joined_at: number
}

export interface MemberLeaved {
  user_id: string
  leaved_at: number
}

export interface RoomMemberWithId {
  _id: string
  member_ids: RoomMember[]
}

export type LastMessage = Pick<
  MessageRes,
  'message_id' | 'message_text' | 'is_author' | 'created_at' | 'room_id'
> & {
  author_name: string
}

export interface CreateSingleChat {
  partner_id: number | string
}

export interface AttachmentId {
  attachment_id: string
  url: string
}

export interface CreateGroupChat {
  room_name: string
  room_avatar_id?: AttachmentId
  member_ids: number[]
  compounding_car_id: number
}

export type CreateGroupChatServicesParams = Pick<
  CreateGroupChat,
  'room_avatar_id' | 'room_name'
> & {
  member_ids: string[]
}

export type CreateSingleChatServices = {
  partner: IUser
  user: IUser
}

export interface QueryRoomParams extends QueryList {
  search_term?: string
}

export interface QueryMembersInRoomParams extends QueryList {
  search_term?: string
}

export interface QueryRoomServiceParams extends QueryRoomParams {
  room_ids: string[]
  current_user: IUser
}

export interface QueryMembersInRoomService extends QueryList {
  room_id: string
}

export type RoomMemberRes = Pick<
  IUser,
  'bio' | 'gender' | 'date_of_birth' | 'is_online' | 'user_name' | 'phone'
> & {
  user_id: string
  avatar: string
}

export interface ClearUnreadMessage {
  room_id: string
}

export type FriendStatusRes = {
  user_id: string
  room_ids: string[]
}

export type ChangeStatusOfRoom = FriendStatusRes & { type: 'login' | 'logout' }

export interface AddMessageUnreadToRoomRes {
  message_unread_count: number
}

export interface ClearMessageUnread {
  room_id: string
}

export interface AddMessageUnread {
  message_id: string
}

export interface RoomTypingRes {
  user_id: string
  user_name: string
  room_id: string
}

export type UpdateRoomInfoForm = Partial<Pick<IRoom, 'room_name' | 'room_avatar'>>

export type UpdateRoomInfo = UpdateRoomInfoForm & {
  room_id: string
}

export interface RoomInfoRes {
  room_id: string
  room_name: string | null
  room_avatar?: string | null
  room_type: RoomType
  member_count: number
}

export interface TopMemberRes {
  user_id: string
  user_avatar: string
  user_name: string
  is_online: boolean
}

export type ConversationHeaderData = Pick<IRoom, 'room_avatar' | 'room_name'> & {
  room_id: string
  is_online: boolean
  offline_at: Date | null | number | string
}
