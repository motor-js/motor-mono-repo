/* eslint-disable no-use-before-define */

import React, { useEffect, useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { useList } from '@motor-js/engine'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

export default function Filter({ dimension, label }) {

  const [val, setValue] = useState([]);
  const { listData, select, selections, clearSelections  } = useList({ dimension })

  useEffect(() => {
    selections && setValue(selections)
  },[selections])

  const handleChange = (obj, val, reas) => {
    if (reas === "clear") {
      clearSelections();
    } else if (reas === 'remove-option') {
      const newSel = selections.filter(({ key: id1 }) => !val.some(({ key: id2 }) => id2 === id1));
      select([newSel[0].key]);
    } else {
      const newSel = val.filter((el) => !selections.includes(el));
      select([newSel[0].key]);
    }
  }
  return (
    <div>
      { listData && 
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={listData}
          disableCloseOnSelect
          freeSolo
          size='small'
          onChange={handleChange}
          value={val}
          getOptionLabel={(option) => option.text}
          renderOption={(option, { selected }) => (
            <React.Fragment>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.text}
            </React.Fragment>
          )}
          style={{ width: 500 }}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" label={label} placeholder={label} />
          )}
        />
        }
    </div>
  );
}

