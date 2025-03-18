import React, { useEffect, useState } from 'react';
import {
  Chat as StreamChat,
  Channel,
  ChannelHeader,
  ChannelList,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';
import { ChannelSort } from 'stream-chat';
import { chatClient, STREAM_API_KEY } from '../../config/chatConfig';
import 'stream-chat-react/dist/css/v2/index.css';

interface ChatProps {
  userId: string;
  username: string;
  userRole: string;
}

export const Chat: React.FC<ChatProps> = ({ userId, username, userRole }) => {
  const [clientReady, setClientReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initChat = async () => {
      try {
        console.log('Initializing chat with:', { userId, username, userRole, apiKey: STREAM_API_KEY });
        
        if (!STREAM_API_KEY || STREAM_API_KEY === 'your_api_key') {
          throw new Error('Stream API key not configured');
        }

        // Connect the user
        await chatClient.connectUser(
          {
            id: userId,
            name: username,
            role: userRole,
          },
          chatClient.devToken(userId)
        );
        
        console.log('Chat client connected successfully');
        setClientReady(true);
      } catch (error) {
        console.error('Error connecting user to chat:', error);
        setError(error instanceof Error ? error.message : 'Failed to connect to chat');
      }
    };

    if (!chatClient.userID) {
      initChat();
    }

    return () => {
      chatClient.disconnectUser();
    };
  }, [userId, username, userRole]);

  if (error) {
    return (
      <div className="h-full flex items-center justify-center bg-white p-4 rounded-lg">
        <div className="text-center">
          <p className="text-red-600 mb-2">Error: {error}</p>
          <p className="text-gray-600">Please check your configuration and try again.</p>
        </div>
      </div>
    );
  }

  if (!clientReady) {
    return (
      <div className="h-full flex items-center justify-center bg-white p-4 rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Connecting to chat...</p>
        </div>
      </div>
    );
  }

  const filters = { members: { $in: [userId] } };
  const sort: ChannelSort = { last_message_at: -1 as const };

  return (
    <div className="chat-container h-full bg-white rounded-lg shadow-lg overflow-hidden">
      <StreamChat client={chatClient} theme="messaging light">
        <div className="flex h-full">
          <div className="w-1/3 border-r border-gray-200">
            <ChannelList 
              filters={filters} 
              sort={sort}
              options={{ state: true, watch: true, presence: true }}
              showChannelSearch
            />
          </div>
          <div className="w-2/3">
            <Channel>
              <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput focus />
              </Window>
              <Thread />
            </Channel>
          </div>
        </div>
      </StreamChat>
    </div>
  );
}; 