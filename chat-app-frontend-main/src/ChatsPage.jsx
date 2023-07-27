// import {
//   // MultiChatSocket,
//   // MultiChatWindow,
//   // MultiChatLogic,
//   // useMultiChatLogic,
//   PrettyChatWindow,
// } from "react-chat-engine-pretty";

import {
  MultiChatSocket,
  MultiChatWindow,
  // MultiChatLogic,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "bc87edb3-493a-496f-a1d1-2afe6090299f",  //project-id
    props.user.username,
    props.user.secret
  );

  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />

      {/* <PrettyChatWindow
        projectId="a5305925-47e6-4bb6-98d9-c41e694de93f"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }} */}
      {/* /> */}
    </div>
  );
};

export default ChatsPage;
