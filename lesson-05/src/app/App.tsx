import { ClickTimer } from "features/refExamples/ClickTimer";
import { PreviousInput } from "features/refExamples/PreviousInput";
import { FocusTracker } from "features/refExamples/FocusTracker";
import { DebouncedLogger } from "features/refExamples/DebouncedLogger";
import { WebSocketLogger } from "features/refExamples/WebSocketLogger";

export function App() {
  return (
    <div>
      <ClickTimer />
      <PreviousInput />
      <FocusTracker />
      <DebouncedLogger />
      <WebSocketLogger />
    </div>
  );
}

export default App;
