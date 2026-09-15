import { FaArrowUp } from 'react-icons/fa';
import { Button } from '@/components/ui/button.tsx';
import { useForm } from 'react-hook-form';

export type ChatFormData = {
   prompt: string;
};

type Props = {
   onSubmit: (data: ChatFormData) => void;
};

const ChatInput = ({ onSubmit }: Props) => {
   const { register, handleSubmit, reset, formState } = useForm<ChatFormData>();

   return (
      <form
         onSubmit={handleSubmit((data: ChatFormData) => {
            reset({
               prompt: '',
            });
            onSubmit(data);
         })}
         onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
               e.preventDefault();
               e.currentTarget.requestSubmit();
            }
         }}
         className={'flex flex-col gap-2 items-end border-2 p-4 rounded-3xl'}
      >
         <textarea
            {...register('prompt', {
               required: true,
               validate: (data) => data.trim().length > 0,
            })}
            placeholder="Ask anything"
            maxLength={1000}
            className={'w-full border-0 focus:outline-0 resize-none'}
         />
         <Button
            className={'rounded-full w-9 h-9'}
            disabled={!formState.isValid}
            type="submit"
         >
            <FaArrowUp />
         </Button>
      </form>
   );
};

export default ChatInput;
