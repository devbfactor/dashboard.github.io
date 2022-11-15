import React, { useState } from 'react'
import { Header } from '../components';
import { BlockPicker} from 'react-color';


const ColorPicker = () => {
  const [preview, setPreview] = useState("#fff");

  const handleChangeComplete = (color) => {
    setPreview(color.hex)
  }

  return (
    <div className="flex justify-start 2xl:justify-center overflow-auto">
      <div className="mx-10 mt-20 md:m-10 p-10 md:p-10 bg-white rounded-3xl">
        <Header category="App" title="Color Picker" />
        <div className="text-center">
        <div style={{backgroundColor:preview}} id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap mb-5">
          <div className="mt-5">
            <BlockPicker color={preview} onChangeComplete={handleChangeComplete} />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ColorPicker