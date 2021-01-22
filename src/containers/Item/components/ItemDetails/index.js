/* eslint-disable react/no-array-index-key */
import React from 'react'

import DetailInput from './components/DetailInput'
import { Container, Delete, StyledButton, StyledInput, Tag, Tags } from './styles'

const ItemDetails = ({ action, msg, value, setValue }) => {
  const addTag = e => {
    if (e.key === 'Enter' && e.target.value) {
      setValue({
        tags: value.tags.concat({ tag: value.tag }),
        tag: '',
      })
    }
  }

  const removeTag = index => {
    const newTagList = value.tags.slice()
    newTagList.splice(index, 1)
    setValue({ tags: newTagList })
  }

  return (
    <Container>
      <DetailInput
        name="name"
        value={value}
        setValue={setValue}
        placeholder="Item name"
      />
      <br />
      <DetailInput
        name="description"
        value={value}
        setValue={setValue}
        placeholder="Description"
      />
      <br />
      <DetailInput
        name="stock"
        type="number"
        min="1"
        max="1000"
        label="Number of items to sell&emsp;"
        value={value}
        setValue={setValue}
      />
      <br />
      <DetailInput
        name="price"
        type="number"
        min="0"
        max="10000"
        label="Price of one item&emsp;"
        value={value}
        setValue={setValue}
        placeholder="$0.00"
      />
      <br />
      <StyledInput
        value={value.tag}
        onChange={e => setValue({ tag: e.target.value })}
        onKeyPress={addTag}
        placeholder="Add tags!"
      />
      <Tags>
        {value.tags.map((tag, i) => 
          <Tag key={i}>{tag.tag}&emsp;
            <Delete type="button" onClick={() => removeTag(i)}>
              x
            </Delete>
          </Tag>
          )}
      </Tags>
      <br />
      <StyledButton type="button" onClick={action}>{msg}</StyledButton>
    </Container>
  )
}

export default ItemDetails
