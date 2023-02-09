import { MultiChatSocket, MultiChatWindow, useMultiChatLogic, useSingleChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'dc1ae4a1-4b59-47d0-8410-60d17374dfca',
        props.user.username,
        props.user.secret
    )
    return (
        <div style={{ height: "100vh" }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
        </div>
    )
};
export default ChatsPage;