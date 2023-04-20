import React from 'react';
import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, genImg, handleSubmit }) => {
  return (

    <div className='aipicker-container'>
      <textarea
        className='aipicker-textarea'
        placeholder='Ask me anything'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className='flex flex-wrap gap-3'>
        {genImg ? (
          <CustomButton
            title="Asking AI..."
            type="outline"
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              title="AI Sticker"
              type="outline"
              handleClick={() => handleSubmit("sticker")}
              customStyles="text-xs"
            />
            <CustomButton
              title="AI Full"
              type="filled"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker
