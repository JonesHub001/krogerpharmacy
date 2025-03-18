import { chatClient, CHANNEL_TYPE } from '../config/chatConfig';
import { ChannelSort } from 'stream-chat';

export const createSupportChannel = async (userId: string, pharmacistId: string) => {
  try {
    const channel = chatClient.channel(CHANNEL_TYPE.SUPPORT, `support-${userId}`, {
      members: [userId, pharmacistId],
      name: 'Customer Support',
    });

    await channel.create();
    return channel;
  } catch (error) {
    console.error('Error creating support channel:', error);
    throw error;
  }
};

export const createConsultationChannel = async (userId: string, pharmacistId: string) => {
  try {
    const channel = chatClient.channel(CHANNEL_TYPE.CONSULTATION, `consultation-${userId}`, {
      members: [userId, pharmacistId],
      name: 'Private Consultation',
    });

    await channel.create();
    return channel;
  } catch (error) {
    console.error('Error creating consultation channel:', error);
    throw error;
  }
};

export const getExistingChannels = async (userId: string) => {
  try {
    const filter = { members: { $in: [userId] } };
    const sort: ChannelSort = { last_message_at: -1 as const };
    
    const channels = await chatClient.queryChannels(filter, sort);
    return channels;
  } catch (error) {
    console.error('Error fetching channels:', error);
    throw error;
  }
};

export const getOnlinePharmacists = async () => {
  try {
    const filter = { 
      role: 'pharmacist',
      online: true,
    };
    
    const users = await chatClient.queryUsers(filter);
    return users.users;
  } catch (error) {
    console.error('Error fetching online pharmacists:', error);
    throw error;
  }
}; 