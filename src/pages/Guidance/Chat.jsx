import { Component } from 'react';

import TypingText from 'components/chat/TypingText';
import happy from 'assets/avatar/happy.png';
import forest from 'assets/bg/forest.jpg';
import ChatInput from 'components/chat/ChatInput';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        "Please no problems, or not I have a tough time, okay?",
        "Hi! If you're having problems, feel free to ask me, okay?",
      ],
      options: []
    };
  }

  render() {
    return (
      <div className='relative h-screen overflow-x-auto'>
        {/* Background image */}
        <img
          src={forest}
          className='absolute inset-0 w-full h-full object-cover'
          alt='Forest'
        />
  
        {/* Content container */}
        <div className='h-full w-full relative z-10'>
          <div className='grid'>
            <img src={happy} className='w-[200px] mx-auto' alt='Happy' />
            <TypingText history={this.state.history}/>
          </div>
          <ChatInput/>
        </div>
      </div>
    );
  }
  
}

export default Chat;