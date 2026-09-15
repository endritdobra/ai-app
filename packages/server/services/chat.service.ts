import { conversationRepository } from '../repositories/conversation.repository.ts';
import { OpenAI } from 'openai';

const client = new OpenAI({
   baseURL: 'https://ollama.com/v1',
   apiKey: process.env.OLLAMA_API_KEY,
});

type ChatResponse = {
   id: string;
   message: string;
};

export const chatService = {
   async sendMessage(
      prompt: string,
      conversationId: string
   ): Promise<ChatResponse> {
      const response = await client.responses.create({
         model: process.env.OLLAMA_MODEL || 'gemma4:31b',
         input: prompt,
         temperature: 0.2,
         max_output_tokens: 100,
         previous_response_id:
            conversationRepository.getLastResponseId(conversationId),
      });

      conversationRepository.setLastResponseId(conversationId, response.id);

      return {
         id: response.id,
         message: response.output_text,
      };
   },
};
