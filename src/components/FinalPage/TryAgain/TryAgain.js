import React from 'react';
import { Redirect } from 'react-router-dom';

// unsure if this will work to do the quiz again without logging in???
export default function TryAgain() {
  return <Redirect to='landingpage' />
};