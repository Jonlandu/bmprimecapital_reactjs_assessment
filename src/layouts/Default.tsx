import { SideBar } from "../components/message/SideBar";
import icon from "/assets/home.svg";
import { LeftBar } from "../components/message/LeftBar";
import Chat from "../components/message/Chat";
import { MessageProps } from "../types/types";
const DefaultLayout = () => {
  // const messages: MessageProps[] = [
  //   {
  //     text: "<p>Hello! How can I assist you today?</p><p>Here are some options you can explore:</p><ul><li><strong>Account Issues:</strong> Reset your password, update your profile, or manage your settings.</li><li><strong>Billing Support:</strong> View invoices, update payment methods, or check your subscription status.</li><li><strong>Technical Assistance:</strong> Troubleshoot errors, report bugs, or request new features.</li></ul><p>Feel free to ask me anything!</p>",
  //     isUser: false,
  //   },
  //   { text: "I need help with my account.", isUser: true },
  //   {
  //     text: "<p>Sure, can you please provide more details?</p><p>For example:</p><ul><li>Are you unable to log in?</li><li>Do you need to update your profile information?</li><li>Is there an issue with your account settings?</li></ul>",
  //     isUser: false,
  //   },
  //   { text: "I am unable to log in to my account.", isUser: true },
  //   {
  //     text: "<p>Have you tried resetting your password?</p><p>If not, you can do so by clicking on the <strong>Forgot Password</strong> link on the login page. If you still face issues, let me know, and I can assist further.</p>",
  //     isUser: false,
  //   },
  //   { text: "Yes, but I didn't receive the reset email.", isUser: true },
  //   {
  //     text: "<p>Let me check that for you. Please hold on.</p><p>In the meantime, ensure that:</p><ul><li>The email address you entered is correct.</li><li>You have checked your spam or junk folder.</li><li>Your email server is not blocking our messages.</li></ul>",
  //     isUser: false,
  //   },
  // ];
  const messages: MessageProps[] = [];

  return (
    <>
      <div className="m-4 p-10">
        <div className="flex h-screen">
          {/* Left Sidebar */}
          <LeftBar icon={icon} title="Dev Test" />

          {/* Chat Area */}
          <Chat messages={messages} />

          {/* Right Sidebar */}
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
