import { StreamChat } from 'stream-chat';

// Get the API key from environment variable or use a default for development
export const STREAM_API_KEY = import.meta.env.VITE_STREAM_API_KEY || 'your_api_key';

// Initialize Stream Chat client
export const chatClient = StreamChat.getInstance(STREAM_API_KEY);

// User roles
export const USER_ROLE = {
    PATIENT: 'patient',
    PHARMACIST: 'pharmacist',
    ADMIN: 'admin'
} as const;

// Chat channels types
export const CHANNEL_TYPE = {
    MESSAGING: 'messaging',
    SUPPORT: 'support',
    CONSULTATION: 'consultation'
} as const; 