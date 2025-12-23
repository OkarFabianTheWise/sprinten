import React from 'react';
import Image from 'next/image';
import keyIcon from './key.png';

interface PrivateKeyCardProps {
  onClick?: () => void;
}

const PrivateKeyCard: React.FC<PrivateKeyCardProps> = ({ onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="w-[344px] h-[73px] bg-[#0D141A] rounded-lg p-4 flex items-center gap-4 cursor-pointer hover:bg-[#151D25] transition-colors"
    >
      {/* Icon Container */}
      <div className="w-10 h-10 rounded-full bg-[#1A2631] flex items-center justify-center flex-shrink-0 p-2">
        {/* Key Icon */}
        <div className="w-6 h-6 relative">
          {/* image */}
            <Image
                src={keyIcon}
                alt="Key Icon"
                width={24}
                height={24}
            />
        </div>
      </div>

      {/* Text Container */}
      <div className="flex flex-col gap-1 w-[229px]">
        {/* Title */}
        <h3 
          className="text-[#E7E8E8] text-base font-medium leading-6"
          style={{ 
            fontFamily: 'DM Sans, sans-serif',
            letterSpacing: '0.15px'
          }}
        >
          Private key
        </h3>
        
        {/* Description */}
        <p 
          className="text-[#B4B7B9] text-[10px] font-normal leading-[100%]"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Import wallets from existing 64 character key
        </p>
      </div>
    </div>
  );
};

export default PrivateKeyCard;