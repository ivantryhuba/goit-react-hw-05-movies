import React from 'react';
import Loader from 'react-loader-spinner';
import { SpinnerStyled } from './Spinner.styles';

export default function Spinner() {
  return (
    <SpinnerStyled>
      <Loader type="Bars" color="#ffc400" height={200} width={200} />
    </SpinnerStyled>
  );
}
