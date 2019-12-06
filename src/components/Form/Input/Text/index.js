import React from 'react';
import clsx from 'clsx';

import { FormControl, FormHelperText, TextField } from '@material-ui/core';
import classes from './Text.module.scss';

const TextInput = props => {
  const {
    errorText,
    touched,
    label,
    required,
    error,
    className,
    type,
    variant,
    ref,
    setRef,
    inputIcon,
    ...other
  } = props;
  const requireRender = () => {
    return required && <span className="required-mark">*</span>;
  };
  const getError = () => {
    if (touched) {
      return !!errorText;
    }
    return false;
  };
  return (
    <div
      className={clsx(
        classes.textInputWrapper,
        className,
        type === 'hidden' && classes.inputHidden,
        variant === 'outlined' && classes.variantOutlined,
      )}
    >
      <FormControl error={!!(touched && errorText)}>
        <TextField
          margin="dense"
          inputRef={el => {
            if (setRef) {
              setRef(el);
            }
          }}
          error={getError()}
          label={
            <span>
              {label}
              {requireRender()}
            </span>
          }
          type={type}
          variant={variant}
          {...other}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {!!inputIcon && <div className={classes.inputIcon}>{inputIcon}</div>}
        <FormHelperText
          className={touched && !!errorText ? '' : classes.errorTextHide}
        >
          {errorText}
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default TextInput;
