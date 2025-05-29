import bot_icon from '@public/asset/bot_icon.svg'
import user_icon from '@public/asset/user_icon.svg'

interface IContentSenderProps {
  item: {
    text: string;
    sender: 'bot' | 'user';
    image_base64?: string | null;
    image_caption?: string | null;
  };
  isLoading: boolean;
}

export const ContentSender = ({ item, isLoading }: IContentSenderProps) => {
  const botSender = item.sender === 'bot';

  return (
    <div className={`flex w-full p-2 ${botSender ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex items-start gap-3 max-w-[75%]`}>
        {botSender && (
          <div className="flex-shrink-0">
            <img src={bot_icon} alt="bot" className="w-8 h-8" />
          </div>
        )}

        <div className="bg-white text-[#151515] text-sm p-4 rounded-lg shadow-sm break-words whitespace-pre-wrap">
          <p>{item.text}</p>
          
          {botSender && item.image_base64 && (
            <div className="mt-3">
              <img
                src={`data:image/jpeg;base64,${item.image_base64}`}
                alt={item.image_caption ?? 'Imagem relacionada'}
                className="max-w-full rounded"
              />
              {item.image_caption && (
                <p className="text-xs text-gray-600 mt-1">{item.image_caption}</p>
              )}
            </div>
          )}
        </div>

        {!botSender && (
          <div className="flex-shrink-0">
            <img src={user_icon} alt="usuário" className="w-8 h-8" />
          </div>
        )}
      </div>
    </div>
  );
};
