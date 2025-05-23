import React, { useRef } from 'react'
import FileUpload from '../../components/file-upload-container/FileUpload'
import { CustomBoxFullWidth } from '@/styled-components/CustomStyles.style'

const FileInputField = (props) => {
    const {
        width,
        onChange,
        errorStatus,
        acceptedFileInput,
        labelText,
        titleText,
        hintText,
        required,
    } = props
    const imageContainerBusinessRef = useRef()
    return (
        <CustomBoxFullWidth>
            <FileUpload
                titleText={titleText}
                labelText={labelText}
                hintText={hintText}
                width={width}
                anchor={imageContainerBusinessRef}
                errorStatus={errorStatus}
                required={required}
            />
            <input
                ref={imageContainerBusinessRef}
                required={required}
                multiple
                id="file"
                name="file"
                type="file"
                accept={acceptedFileInput}
                hidden
                onChange={(e) => onChange(e)}
            />
        </CustomBoxFullWidth>
    )
}

export default FileInputField
