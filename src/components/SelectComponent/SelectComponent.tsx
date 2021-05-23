import { createStyles, FormControl, InputLabel, makeStyles, Select, Theme } from '@material-ui/core'
import { SelectInputProps } from '@material-ui/core/Select/SelectInput'
import React from 'react'
import './SelectComponent.scss'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(5),
      width: 250,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
)

interface SelectProps {
  labelId: string
  id: string
  label: string
  value: unknown
  onChange: SelectInputProps['onChange']
}

const SelectComponent: React.FC<SelectProps> = (props) => {
  const classes = useStyles()
  return (
    <div className="SelectComponent">
      <FormControl className={classes.formControl}>
        <InputLabel id={props.labelId}>{props.label}</InputLabel>
        <Select labelId={props.labelId} id={props.id} value={props.value} onChange={props.onChange}>
          {props.children}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectComponent
