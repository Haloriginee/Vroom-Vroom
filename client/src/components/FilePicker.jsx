import React from 'react';
import CustomButton from './CustomButton';

const FilePicker = ({readFile, file, setFile}) => {

  return (

    <div className='filepicker-container'>
      <div className='flex flex-col flex-1'>
        <input
          type="file"
          id="file"
          accept='image/'
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file" className='filepicker-label'>
          Upload File
        </label>

        <p className='text-gray-500 text-xs mt-2 truncate'>
          {file === "" ? "No file chosen" : file.name}
        </p>
      </div>

      <div className='flex flex-wrap mt-4 gap-3'>
        <CustomButton
          type="outline"
          title="logo"
          handleClick={() => readFile("logo")}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="full"
          handleClick={() => readFile("full")}
          customStyles="text-xs"
        />
      </div>

    </div>
  )
}

export default FilePicker
