import socketIOClient from 'socket.io-client'
import Cookies from 'js-cookie'
import { AIPT_WEB_TOKEN } from 'utils/constants/config'
import { message } from 'antd'

// initialize
const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;
const URI = `${baseUrl}`.toLocaleLowerCase() === 'null' ? null : baseUrl;
const socketIO = socketIOClient(URI, { autoConnect: false })

// connect
export const connectSocket = () => {
  if (!socketIO.connected) {
    // set Authorization
    socketIO.io.opts.extraHeaders = {
      Authorization: Cookies.get(AIPT_WEB_TOKEN)
    }

    setTimeout(() => socketIO.connect(), 500)
  }
}

// message
socketIO.on('message', (data) => {
  const { msg, status } = data

  if (status === 200) {
    message.success(msg)
  } else {
    message.error(msg)
  }
})

export default socketIO