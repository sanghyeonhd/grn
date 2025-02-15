
import React from 'react';
import { Copy, Check } from "lucide-react";

interface ShareLinkPanelProps {
  id: string;
  linkCopied: boolean;
  onCopyLink: () => void;
}

const ShareLinkPanel = ({ id, linkCopied, onCopyLink }: ShareLinkPanelProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
      <div className="text-sm font-medium mb-3">공유하기</div>
      <div className="flex items-center border rounded-md overflow-hidden">
        <input
          type="text"
          value={`https://grangand.com/journal/${id}`}
          readOnly
          className="flex-1 px-3 py-2 text-sm bg-gray-50"
        />
        <button 
          onClick={onCopyLink}
          className="px-3 py-2 border-l hover:bg-gray-50"
        >
          {linkCopied ? (
            <Check className="w-5 h-5 text-gray-600" />
          ) : (
            <Copy className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ShareLinkPanel;
