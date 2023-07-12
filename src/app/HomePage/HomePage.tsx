import Conversation from "./Conversation/Conversation";
import Frame from "./Frame/Frame";
import InputMessage from "./InputMessage/InputMessage";

export default function HomePage() {
  return (
    <Frame>
      <Conversation />
      <InputMessage />
    </Frame>
  );
}
